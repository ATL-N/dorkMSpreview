// app/api/rolesandpermissions/[role_id]/route.js
import { NextResponse } from "next/server";

// Mock data for permissions
const mockPermissions = {
  1: [
    { permission_id: 1, permission_name: "Add Staff" },
    { permission_id: 2, permission_name: "Add Student" },
    { permission_id: 3, permission_name: "Add Subject" },
    { permission_id: 4, permission_name: "Add Invoice" },
    { permission_id: 5, permission_name: "Add Fees" },
    { permission_id: 6, permission_name: "Add Class" },
    { permission_id: 7, permission_name: "Add Grade Scheme" },
    { permission_id: 8, permission_name: "Add event" },
    { permission_id: 9, permission_name: "add timetable" },
    { permission_id: 10, permission_name: "view invoice" },
    { permission_id: 11, permission_name: "view health record" },
    { permission_id: 12, permission_name: "add supplier" },
    { permission_id: 13, permission_name: "update supplier" },
    { permission_id: 14, permission_name: "send notification" },
    { permission_id: 15, permission_name: "add permission" },
    { permission_id: 16, permission_name: "update inventory" },
    { permission_id: 17, permission_name: "add inventory" },
    { permission_id: 18, permission_name: "take attendance" },
    { permission_id: 19, permission_name: "update grades" },
    { permission_id: 20, permission_name: "add grades" },
    { permission_id: 21, permission_name: "update remarks" },
    { permission_id: 22, permission_name: "add remarks" },
    { permission_id: 23, permission_name: "view students" },
    { permission_id: 24, permission_name: "view student profile" },
    { permission_id: 25, permission_name: "view staff" },
    { permission_id: 26, permission_name: "update evaluation" },
    { permission_id: 27, permission_name: "add evaluation" },
    { permission_id: 28, permission_name: "edit attendance" },
    { permission_id: 29, permission_name: "delete event" },
    { permission_id: 30, permission_name: "view subjects" },
    { permission_id: 31, permission_name: "delete subject" },
    { permission_id: 32, permission_name: "view masters sheet" },
    { permission_id: 33, permission_name: "delete grading scheme" },
    { permission_id: 34, permission_name: "view users" },
    { permission_id: 39, permission_name: "view classes" },
  ],
  2: [
    // Example: Different permissions for role_id 2
    { permission_id: 10, permission_name: "view invoice" },
    { permission_id: 11, permission_name: "view health record" },
  ],
  // ... Add more role_id and permissions as needed
};

// /api/rolesandpermissions/[role_id]
export async function GET(request, { params }) {
  const { role_id } = params;

  try {
    // Convert role_id to a number for consistency with mock data keys
    const numericRoleId = parseInt(role_id);

    // Retrieve permissions for the given role_id from mock data
    const permissions = mockPermissions[numericRoleId] || [];

    return NextResponse.json(
      { permissions },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching role permissions (mock):", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
