import { NextResponse } from "next/server";

// /api/permission/addpermission

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addpermissionapi", body);

    const { permission_name } = body;

    if (!permission_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock data to simulate existing permissions
    const mockPermissions = [
      { permission_id: 1, permission_name: "edit_profile" },
      { permission_id: 2, permission_name: "view_reports" },
      { permission_id: 3, permission_name: "manage_users" },
    ];

    // Check if permission_name already exists (case-insensitive)
    const permissionExists = mockPermissions.some(
      (permission) =>
        permission.permission_name.toLowerCase() ===
        permission_name.toLowerCase()
    );

    if (permissionExists) {
      return NextResponse.json(
        {
          error:
            "Permission name already exists. Try adding another Permission",
        },
        { status: 409 } // 409 Conflict
      );
    }

    // If Permission doesn't exist, simulate insertion
    const newPermissionId =
      mockPermissions.length > 0
        ? Math.max(...mockPermissions.map((p) => p.permission_id)) + 1
        : 1;

    // You can optionally add the new permission to the mockPermissions array
    // to keep the mock data consistent for subsequent requests:
    mockPermissions.push({
      permission_id: newPermissionId,
      permission_name: permission_name,
    });

    console.log(`Permission ${newPermissionId} added successfully (mock)`);

    return NextResponse.json(
      { message: "Permission added successfully", id: newPermissionId },
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
