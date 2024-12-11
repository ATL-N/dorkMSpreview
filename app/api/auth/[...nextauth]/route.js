import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Mock function to simulate fetching user roles and permissions
const fetchUserRolesAndPermissions = async () => {
  return {
    roles: ["admin", "user"],
    permissions: ["read", "write", "delete"],
    activeSemester: {
      semester_id: 1,
      semester_name: "Fall 2024",
      start_date: "2024-01-15",
      end_date: "15/05/2024",
    },
  };
};

// Mock user database with pre-hashed passwords
const mockUsers = [
  {
    user_id: 1,
    user_name: "admin",
    user_email: "admin@example.com",
    password: '$2a$10$dTYFyllq1uXxg0kYtDAkdufYdPmAhb14Nsr2rkoZEphIfIcnIztgC',
    // password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW", // hashed 'password123'
    role: "admin",
    status: "active",
  },
  {
    user_id: 2,
    user_name: "user",
    user_email: "user@example.com",
    password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW", // hashed 'password123'
    role: "user",
    status: "active",
  },
];

console.log('handling login 00001')
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("Credentials received:", {
          email: credentials?.email,
          passwordProvided: !!credentials?.password,
        });

        if (!credentials?.email || !credentials?.password) {
          console.error("Missing credentials");
          throw new Error("Please enter a username/email and password");
        }

        try {
          // Find user by email or username
          const user = mockUsers.find(
            (u) =>
              u.user_email === credentials.email ||
              u.user_name === credentials.email
          );

          console.log("User found:", user ? user.user_name : "No user");

          if (!user) {
            console.error("No user found with this username/email");
            throw new Error("No user found with this username/email");
          }

          // Compare passwords
console.log('credentials details', credentials, user.password)

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("Password validation:", isValid);

          if (!isValid) {
            console.error("Invalid password");
            throw new Error("Invalid password");
          }

          const { roles, permissions, activeSemester } =
            await fetchUserRolesAndPermissions();

          return {
            id: user.user_id,
            name: user.user_name,
            email: user.user_email,
            role: user.role,
            status: user.status,
            roles: roles,
            permissions: permissions,
            activeSemester: activeSemester,
          };
        } catch (error) {
          console.error("Full Authentication Error:", error);
          throw new Error(
            error instanceof Error ? error.message : "Authentication failed"
          );
        }
      },
    }),
  ],
  session: {
    secret: process.env.NEXTAUTH_SECRET,
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.status = user.status;
        token.roles = user.roles;
        token.permissions = user.permissions;
        token.activeSemester = user.activeSemester;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.status = token.status;
        session.user.roles = token.roles;
        session.user.permissions = token.permissions;
        session.user.activeSemester = token.activeSemester;
      }
      return session;
    },
  },
  pages: {
    signIn: "/authentication/login",
  },
  debug: true, // Enable debug logs
});

export { handler as GET, handler as POST };
