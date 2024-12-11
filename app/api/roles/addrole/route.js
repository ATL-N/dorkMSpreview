import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addroleapi", body);

    const { role_name } = body;

    if (!role_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock data to simulate existing roles
    const mockRoles = [
      { role_id: 1, role_name: "admin" },
      { role_id: 2, role_name: "teacher" },
      { role_id: 3, role_name: "student" },
    ];

    // Check if role_name already exists (case-insensitive)
    const roleExists = mockRoles.some(
      (role) => role.role_name.toLowerCase() === role_name.toLowerCase()
    );

    if (roleExists) {
      return NextResponse.json(
        { error: "Role name already exists. Try adding another Role" },
        { status: 409 } // 409 Conflict
      );
    }

    // Simulate insertion and generate a new role ID
    const newRoleId =
      mockRoles.length > 0
        ? Math.max(...mockRoles.map((r) => r.role_id)) + 1
        : 1;

    // Optionally, add the new role to mockRoles for consistency in subsequent requests
    mockRoles.push({ role_id: newRoleId, role_name });

    console.log(`Role ${newRoleId} added successfully (mock)`);

    return NextResponse.json(
      { message: "Role added successfully", id: newRoleId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
