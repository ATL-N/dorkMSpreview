// app/api/rolesandpermissions/userrole/[user_id]/route.js
import { NextResponse } from "next/server";

// Mock data for roles
const mockRoles = {
  1: [
    // Example: User with user_id 1 has role_id 2
    { role_id: 2, role_name: "Head Teacher" },
  ],
  2: [
    // Example: User with user_id 2 has role_id 3
    { role_id: 3, role_name: "Teacher" },
  ],
  // ... add more user_id and roles as needed
};

export async function GET(request, { params }) {
  const { user_id } = params;

  try {
    // Convert user_id to a number for consistency with mock data keys
    const numericUserId = parseInt(user_id);

    // Retrieve roles for the given user_id from mock data
    const roles = mockRoles[numericUserId] || [];

    return NextResponse.json(
      { roles },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching user roles (mock):", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
