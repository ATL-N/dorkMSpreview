import { NextResponse } from "next/server";

// localhost:3000/api/semester/deleteSemester/[id]

export async function PUT(req, { params }) {
  const { id } = params;

  const body = await req.json();
  console.log("body in addsubjectapi", body);

  const { user_id } = body;

  try {
    // Mock database - in-memory object to store semesters
    const mockSemestersDB = {
      1: {
        semester_id: 1,
        semester_name: "First Term",
        status: "active",
      },
      2: {
        semester_id: 2,
        semester_name: "Second Term",
        status: "completed",
      },
      3: {
        semester_id: 3,
        semester_name: "Third Term",
        status: "upcoming",
      },
    };

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    // Check if the semester exists and is not already deleted
    if (!mockSemestersDB[id] || mockSemestersDB[id].status === "deleted") {
      // Simulate transaction ROLLBACK
      console.log("Mock Transaction ROLLBACK");
      return NextResponse.json(
        { error: "semester not found" },
        { status: 404 }
      );
    }

    // Update semester status to 'deleted' (mock)
    mockSemestersDB[id].status = "deleted";
    const { semester_name } = mockSemestersDB[id];

    // Create a notification (mock)
    const notification_title = `semester Removed`;
    const notification_message = `semester ${semester_name} has been removed from the system.`;
    const notification_type = "general";
    const priority = "normal";

    console.log("Mock Notification Created:", {
      notification_title,
      notification_message,
      notification_type,
      priority,
      sender_id: user_id,
    });

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    return NextResponse.json(
      {
        message: `${semester_name} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.log("Mock Transaction ROLLBACK");
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Failed to remove semester" },
      { status: 500 }
    );
  }
}
