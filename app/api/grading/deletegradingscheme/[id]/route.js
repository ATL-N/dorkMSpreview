import { NextResponse } from "next/server";

//  /api/grading/deletegradingscheme/[id]/route.js
export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    const { user_id } = body;

    // Mock data and logic. Replace with your actual data/logic.
    let mockGradeName = "";

    if (id === "1") {
      mockGradeName = "Grade A"; // Example: Replace with the actual grade name you want to mock
    } else if (id === "2") {
      mockGradeName = "Grade B";
    } else {
      // Handle cases where the ID is not found
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: `${mockGradeName} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing grading scheme (simulated):", error);
    return NextResponse.json(
      { error: "Failed to remove Event" },
      { status: 500 }
    );
  }
}
