// app/api/rolesandpermissions/addroleandpermission
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { role_id, permissions } = await request.json();

    // Mock database - in-memory object to store role_permissions
    const mockRolePermissionsDB = {}; // Initialize an empty object

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    // Simulate deleting existing permissions for the role
    mockRolePermissionsDB[role_id] = []; // Reset permissions for this role
    console.log(`Mock Deleted existing permissions for role_id: ${role_id}`);

    // Simulate inserting new permissions
    for (let permissionId of permissions) {
      if (!mockRolePermissionsDB[role_id]) {
        mockRolePermissionsDB[role_id] = [];
      }
      mockRolePermissionsDB[role_id].push(permissionId);
      console.log(
        `Mock Inserted permission_id: ${permissionId} for role_id: ${role_id}`
      );
    }

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    return NextResponse.json(
      { message: "Permissions updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.error(
      "Mock Transaction ROLLBACK - Error updating role permissions:",
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
