import { NextResponse } from "next/server";

//localhost:3000/api/permission/all

export async function GET(req) {
  try {
    // Mock data representing the structure you provided
    const mockPermissions = [
      { permission_id: 6, permission_name: "Add Class" },
      { permission_id: 5, permission_name: "Add Fees" },
      { permission_id: 7, permission_name: "Add Grade Scheme" },
      { permission_id: 4, permission_name: "Add Invoice" },
      { permission_id: 1, permission_name: "Add Staff" },
      { permission_id: 2, permission_name: "Add Student" },
      { permission_id: 3, permission_name: "Add Subject" },
      { permission_id: 8, permission_name: "Add event" },
      { permission_id: 46, permission_name: "add bills" },
      { permission_id: 27, permission_name: "add evaluation" },
      { permission_id: 41, permission_name: "add expense" },
      { permission_id: 20, permission_name: "add grades" },
      { permission_id: 48, permission_name: "add grading scheme" },
      { permission_id: 52, permission_name: "add health incident" },
      { permission_id: 17, permission_name: "add inventory" },
      { permission_id: 53, permission_name: "add items" },
      { permission_id: 61, permission_name: "add new procurements" },
      { permission_id: 15, permission_name: "add permission" },
      { permission_id: 22, permission_name: "add remarks" },
      { permission_id: 66, permission_name: "add role" },
      { permission_id: 12, permission_name: "add supplier" },
      { permission_id: 9, permission_name: "add timetable" },
      { permission_id: 54, permission_name: "assign class items" },
      { permission_id: 68, permission_name: "assign permissions" },
      { permission_id: 67, permission_name: "assign roles" },
      { permission_id: 29, permission_name: "delete event" },
      { permission_id: 33, permission_name: "delete grading scheme" },
      { permission_id: 31, permission_name: "delete subject" },
      { permission_id: 57, permission_name: "delete supply items" },
      { permission_id: 28, permission_name: "edit attendance" },
      { permission_id: 60, permission_name: "edit procurements" },
      { permission_id: 65, permission_name: "manage system backup" },
      { permission_id: 63, permission_name: "move items" },
      { permission_id: 14, permission_name: "send notification" },
      { permission_id: 62, permission_name: "supply items" },
      { permission_id: 18, permission_name: "take attendance" },
      { permission_id: 26, permission_name: "update evaluation" },
      { permission_id: 19, permission_name: "update grades" },
      { permission_id: 16, permission_name: "update inventory" },
      { permission_id: 55, permission_name: "update item" },
      { permission_id: 21, permission_name: "update remarks" },
      { permission_id: 13, permission_name: "update supplier" },
      { permission_id: 37, permission_name: "view attendance" },
      { permission_id: 36, permission_name: "view attendance analysis" },
      { permission_id: 35, permission_name: "view attendance report" },
      { permission_id: 49, permission_name: "view class analytics" },
      { permission_id: 51, permission_name: "view class grade analytics" },
      { permission_id: 39, permission_name: "view classes" },
      { permission_id: 40, permission_name: "view events" },
      { permission_id: 47, permission_name: "view examinations" },
      { permission_id: 42, permission_name: "view fees" },
      { permission_id: 45, permission_name: "view finances" },
      { permission_id: 11, permission_name: "view health record" },
      { permission_id: 10, permission_name: "view invoice" },
      { permission_id: 32, permission_name: "view masters sheet" },
      { permission_id: 69, permission_name: "view parents" },
      { permission_id: 50, permission_name: "view report card" },
      { permission_id: 64, permission_name: "view semesters" },
      { permission_id: 25, permission_name: "view staff" },
      { permission_id: 59, permission_name: "view stock items" },
      { permission_id: 24, permission_name: "view student profile" },
      { permission_id: 44, permission_name: "view student's payment history" },
      { permission_id: 23, permission_name: "view students" },
      { permission_id: 30, permission_name: "view subjects" },
      { permission_id: 58, permission_name: "view supply items" },
      { permission_id: 34, permission_name: "view users" },
    ];

    // Sort mock data by permission_name (ascending order)
    mockPermissions.sort((a, b) =>
      a.permission_name.localeCompare(b.permission_name)
    );

    return NextResponse.json(mockPermissions, {
      status: 200,
      message: "permissions fetched successfully",
    });
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
