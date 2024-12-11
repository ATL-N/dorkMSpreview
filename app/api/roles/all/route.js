import { NextResponse } from "next/server";

//localhost:3000/api/roles/all

export async function GET(req) {
  try {
    // Mock data representing the structure you provided
    const mockRoles = [
      {
        role_id: 1,
        role_name: "Admin",
      },
      {
        role_id: 2,
        role_name: "Head Teacher",
      },
      {
        role_id: 3,
        role_name: "Teaching Staff",
      },
    ];

    // Simulate sorting by role_name (ascending order)
    mockRoles.sort((a, b) => a.role_name.localeCompare(b.role_name));

    return NextResponse.json(
      mockRoles,
      { status: 200, message: "roles fetched successfully" } // Include the message in the options
    );
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
