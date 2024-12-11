import { NextResponse } from "next/server";

// /api/health/addhealthincident/

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addsemesterapi", body);

    const { incident_date, incident_description, treatmentprovided } = body;

    if (!incident_date || !incident_description || !treatmentprovided) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate adding a health incident (replace with your mock logic or data)
    const newincidentId = Math.floor(Math.random() * 1000) + 1; // Generate a mock ID

    return NextResponse.json(
      { message: "incident added successfully", id: newincidentId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding health incident (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
