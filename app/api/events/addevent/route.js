import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      event_title,
      event_type,
      event_date,
      start_time,
      end_time,
      location,
      description,
      target_audience,
      user_id,
    } = body;

    // Basic validation (add more robust checks in real application)
    if (!event_title || !event_type || !event_date || !start_time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate checking for existing event (replace with DB logic later)
    const eventExists = event_title.toLowerCase() === "existing event"; // Example
    if (eventExists) {
      return NextResponse.json(
        {
          error:
            "Event name already exists on this date. Try adding another event.",
        },
        { status: 409 } // Conflict
      );
    }

    // Simulate database insertion (replace with DB logic later)
    const newEventId = Math.floor(Math.random() * 1000) + 1;
    console.log("Simulating adding new event:", { ...body, id: newEventId });

    return NextResponse.json(
      { message: `${event_title} added successfully`, id: newEventId },
      { status: 201 } // Created
    );
  } catch (error) {
    console.error("Error simulating event creation:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
