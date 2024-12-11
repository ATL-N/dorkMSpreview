import { NextResponse } from "next/server";

// localhost:3000/api/events/deleteevent/[id]/route.js

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { user_id } = body;

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Event ID is required" },
        { status: 400 }
      );
    }

    // Simulate retrieving event title (replace with DB logic later)
    const event_title = "Example Event Title"; // Replace with a way to get the actual event title

    // Simulate successful deletion and notification (replace with DB logic later)
    console.log(
      `Simulating deletion of event ${event_title} (ID: ${id}) by user ${user_id}`
    );

    return NextResponse.json(
      {
        message: `${event_title} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error simulating event deletion:", error);
    return NextResponse.json(
      { error: "Failed to remove event" },
      { status: 500 }
    );
  }
}
