import { NextResponse } from "next/server";


// /api/users/all
// Mock data for users
const mockUsers = [
  {
    user_id: 26,
    user_name: "adminadmin",
    user_email: "admin@admin",
    role: "admin",
    status: "active",
    password: "$2a$10$dTYFyllq1uXxg0kYtDAkdufYdPmAhb14Nsr2rkoZEphIfIcnIztgC",
  },
  {
    user_id: 39,
    user_name: "edward 23 attah 3",
    user_email: "parent2@gmail.com",
    role: "parent",
    status: "active",
    password: "$2a$10$Uz9SG.8lMBYdF6kbzh28RudzBWmpw/3lYR6XX9p2h7A7j5DdG8BZq",
  },
  {
    user_id: 3,
    user_name: "emefa",
    user_email: "emefa@gmail.com",
    role: "user",
    status: "active",
    password: "$2a$10$pGwshWA4F2Jir2b4yEFIl.xyEPFDgATtswzeu/YlaDELSZUSJ84Ly",
  },
  {
    user_id: 38,
    user_name: "emmanuel  foli ",
    user_email: "atlcoccus@gmail.com53535",
    role: "student",
    status: "active",
    password: "$2a$10$Srlhrv1wqf8MJrJpuEEmE.C3KX2uf7AGLRmhbfLJHpZa1te9Ahp4m",
  },
  {
    user_id: 22,
    user_name: "ernest nelson ",
    user_email: "atlcoccus123@gmail.com25",
    role: "admin",
    status: "active",
    password: "$2a$10$xRAuJ2oWFyC/eCeCFxyEH.qLGR0oZa9Z/XtMz1f6C2TP015i1h8/.",
  },
  {
    user_id: 14,
    user_name: "ernest owusunelson ",
    user_email: "atlcoccus@gmail549.com",
    role: "user",
    status: "active",
    password: "$2a$10$TSGDNQuOmoZMoN7PACravuEsJNwBgADKjOTjM6KdH.t3lutvPT4Gm",
  },
  {
    user_id: 12,
    user_name: "john nyarkohakwasikumah",
    user_email: "atlcoccus@gmail123.com",
    role: "user",
    status: "active",
    password: "$2a$10$S302w9M0.Vze0iJUBES58e92eD1TyusxkbZ9WI0hsKtn4FTKo9z8.",
  },
  {
    user_id: 45,
    user_name: "kofi nimo",
    user_email: "kofinimo@gmail.com",
    role: "parent",
    status: "active",
    password: "$2a$10$A.5UxsVJva052eBgBQPQjOBgsJ5r8LA7jO633JG.N22OvxZyzSjJG",
  },
  {
    user_id: 31,
    user_name: "matilda attah ",
    user_email: "emefa@emefa.com",
    role: "student",
    status: "active",
    password: "$2a$10$1l.pHigQnsc2uAW45hz3xuKEVaSViCs/8kxh1xQ.Gy8UpTyCWKljS",
  },
  {
    user_id: 9,
    user_name: "matilda attah emefa",
    user_email: "atlcoccus@gmail2.com",
    role: "user",
    status: "active",
    password: "$2a$10$jPXbX6Ed5jcVdKN80OItzO3hiJGwH/gIJCG3zRhHwbc8I12SpNxV2",
  },
  {
    user_id: 6,
    user_name: "nel",
    user_email: "nel@gmail.com",
    role: "admin",
    status: "active",
    password: "$2a$10$/tiqWC7kDu1PjVp1Lgy1X.t.5RIByDcPF5MLU6V7sMRu2.6tJEmmK",
  },
  {
    user_id: 1,
    user_name: "nelson",
    user_email: "atlcoccus@gmail.com",
    role: "user",
    status: "active",
    password: "$2a$10$xasb8wrI9SuYEsaKv2zkhuV/s709ConTHiD4lNANszYCsw4pyuioe",
  },
  {
    user_id: 4,
    user_name: "nelson 2",
    user_email: "nelson@gmail.com",
    role: "user",
    status: "active",
    password: "$2a$10$bISsUI9RbE2sHqarSe0AWOXgXUSHitWKKh.BZ1vbkhre66gw2Cotq",
  },
  {
    user_id: 13,
    user_name: "nelson1dorkordiakwasikumah",
    user_email: "atlcoccus@gmail586.com",
    role: "user",
    status: "active",
    password: "$2a$10$w2JTMirgBPuskAHVZv7w5eBW8cYvqBxaFf4qXxFS6OGZJkybIs8ca",
  },
  {
    user_id: 29,
    user_name: "nelsondorkordi",
    user_email: "atlcoccus@gmail.comme",
    role: "student",
    status: "active",
    password: "$2a$10$VYySt5Nq0MXgUIinIoQj1e8PdSLUAje6W/qkvHKYX2B4AhK9fS1DO",
  },
  {
    user_id: 32,
    user_name: "patience  enyaah  araba",
    user_email: "enyaahpat@gmail.com",
    role: "student",
    status: "active",
    password: "$2a$10$8xjs/LWEpEvSMRVg1wF8t.sIZc2q4DJCgO64e96lB82v5eos5wcOm",
  },
  {
    user_id: 35,
    user_name: "patience  enyaah maame araba",
    user_email: "enyaahpat1@gmail.com",
    role: "teaching staff",
    status: "active",
    password: "$2a$10$/vdOaFfDXcqCRje5mFq0Nuw3Zvbauw2f75mKbwx/l.U241PxF90he",
  },
  {
    user_id: 36,
    user_name: "richmond adasu  ",
    user_email: "",
    role: "student",
    status: "active",
    password: "$2a$10$cUQ1zkkuSMqkN71yxhIdyOZsG7g4AcgJuqpGQJcUc.Vt55F8kGiay",
  },
  {
    user_id: 33,
    user_name: "yaa nooyoo",
    user_email: "yaanooyoo@gmail.com",
    role: "parent",
    status: "active",
    password: "$2a$10$kVOBJMpzzhW9F1qkvNAo.OWsMeq/IAA6wnagBmf.TzsCZN4gB68lS",
  },
  {
    user_id: 34,
    user_name: "yaa yaa",
    user_email: "atlfrt@gmail.com",
    role: "parent",
    status: "active",
    password: "$2a$10$nbePhShZQ2VELU6YgxXqmuCwK7GzxGRVn54C4x6b/hUauQngYcov2",
  },
];

//localhost:3000/api/users/all

export async function GET(req) {
  try {
    // Filter out user with user_id 2 and status not active (if needed)
    const filteredUsers = mockUsers.filter(
      (user) => user.user_id !== 2 && user.status === "active"
    );

    return NextResponse.json(
      filteredUsers,
      { status: 200 },
      { message: "Mock users fetched successfully" }
    );
  } catch (error) {
    console.error("Mock data error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
