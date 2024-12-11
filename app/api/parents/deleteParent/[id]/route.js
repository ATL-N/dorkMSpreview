import { NextResponse } from "next/server";

// /api/parents/deleteParent/[id]
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { user_id } = body;

  try {
    // Simulate transaction start
    // await db.query("BEGIN");

    // Mock data and functions to simulate database operations
    const mockParents = {
      1: {
        parent_id: 1,
        other_names: "Mock",
        last_name: "Parent1",
        status: "active",
      },
      2: {
        parent_id: 2,
        other_names: "Mock",
        last_name: "Parent2",
        status: "active",
      },
      3: {
        parent_id: 3,
        other_names: "Mock",
        last_name: "Parent3",
        status: "deleted",
      }, // Already deleted
    };

    const mockStudentParent = {
      1: [{ student_id: 1 }, { student_id: 2 }], // Parent 1 has two students
      2: [], // Parent 2 has no students
    };

    const mockStudents = {
      1: { student_id: 1, status: "active" },
      2: { student_id: 2, status: "active" },
      3: { student_id: 3, status: "inactive" },
    };

    // Check if the parent exists and is not already deleted
    if (!mockParents[id] || mockParents[id].status === "deleted") {
      // Simulate transaction rollback
      // await db.query("ROLLBACK");
      return NextResponse.json(
        { error: "Parent not found or already deleted" },
        { status: 404 }
      );
    }

    // Check for associated active students
    let studentCount = 0;
    if (mockStudentParent[id]) {
      studentCount = mockStudentParent[id].filter(
        (sp) => mockStudents[sp.student_id]?.status === "active"
      ).length;
    }

    if (studentCount > 0) {
      // Simulate transaction rollback
      // await db.query("ROLLBACK");
      return NextResponse.json(
        {
          error: `Cannot delete parent as they currently have ${studentCount} active student${
            studentCount === 1 ? "" : "s"
          } associated with them. Please remove all student associations before deleting the parent.`,
        },
        { status: 400 }
      );
    }

    // Simulate updating parent status to 'deleted'
    mockParents[id].status = "deleted";
    const { other_names, last_name } = mockParents[id];

    // Simulate creating a notification
    const notification_title = `Parent Removed`;
    const notification_message = `Parent ${other_names} ${last_name} has been removed from the system.`;

    console.log("Mock Notification Created:", {
      notification_title,
      notification_message,
      notification_type: "general",
      priority: "normal",
      sender_id: user_id,
    });

    // Simulate transaction commit
    // await db.query("COMMIT");
    return NextResponse.json(
      {
        message: `${other_names} ${last_name} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction rollback
    // await db.query("ROLLBACK");
    console.error("Mock database error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to process parent deletion request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
