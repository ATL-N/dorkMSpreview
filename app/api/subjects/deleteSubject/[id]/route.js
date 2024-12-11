import { NextResponse } from "next/server";

// localhost:3000/api/subjects/deleteSubject/[id]

export async function PUT(req, { params }) {
  const { id } = params;

  const body = await req.json();
  console.log("body in addsubjectapi", body);

  const { user_id } = body;

  try {
    // Mock database - in-memory object to store subjects
    const mockSubjectsDB = {
      1: { subject_id: 1, subject_name: "Mathematics", status: "active" },
      2: { subject_id: 2, subject_name: "English", status: "active" },
      3: { subject_id: 3, subject_name: "Science", status: "active" },
      // ... add more subjects as needed
    };

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    // Check if the subject exists and is not already deleted
    if (!mockSubjectsDB[id] || mockSubjectsDB[id].status === "deleted") {
      // Simulate transaction ROLLBACK
      console.log("Mock Transaction ROLLBACK");
      return NextResponse.json({ error: "subject not found" }, { status: 404 });
    }

    const subject_name = mockSubjectsDB[id].subject_name;

    // Update subject status to 'deleted' (mock)
    mockSubjectsDB[id].status = "deleted";

    // Create a notification (mock)
    const notification_title = "subject Removed";
    const notification_message = `subject ${subject_name} has been removed from the system.`;
    const notification_type = "general";
    const priority = "normal";

    console.log("Mock Notification Created:", {
      notification_title,
      notification_message,
      notification_type,
      priority,
      sender_id: user_id, // Or a mock user ID for testing
    });

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    return NextResponse.json(
      {
        message: `${subject_name} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.log("Mock Transaction ROLLBACK");
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Failed to remove subject" },
      { status: 500 }
    );
  }
}
