// app/api/rolesandpermissions/userrole
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { user_id, roles } = await request.json();
    console.log("body", user_id, roles);

    // Mock database - in-memory object to store user_roles
    const mockUserRolesDB = {}; // Initialize an empty object

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    // Simulate deleting existing roles for the user
    mockUserRolesDB[user_id] = []; // Reset roles for this user
    console.log(`Mock Deleted existing roles for user_id: ${user_id}`);

    // Simulate inserting new roles
    for (let role_id of roles) {
      if (!mockUserRolesDB[user_id]) {
        mockUserRolesDB[user_id] = [];
      }
      mockUserRolesDB[user_id].push(role_id);
      console.log(`Mock Inserted role_id: ${role_id} for user_id: ${user_id}`);
    }

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    return NextResponse.json(
      { message: "roles updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.error(
      "Mock Transaction ROLLBACK - Error updating user roles:",
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
