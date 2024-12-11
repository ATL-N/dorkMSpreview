import { NextResponse } from "next/server";

// /api/semester/semesterdetails
export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Mock data for a semester
    const mockSemesterData = {
      id: parseInt(id), // Match the requested ID
      semester_name: "First Term",
      start_date: "2024-07-28",
      end_date: "2024-11-11",
      status: "active",
    };

    // Simulate a "not found" scenario if a specific ID is requested
    if (parseInt(id) !== 1) {
      // You can change '1' to any ID you want to treat as "not found" for testing
      return NextResponse.json(
        { error: "Semester not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(mockSemesterData, { status: 200 });
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    const { semester_name, user_id } = body; // Assuming you send semester_name in the body

    if (!id || !semester_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate checking if the semester exists (it would exist in mock data)
    if (parseInt(id) !== 1) {
      // Simulate "not found" for a different ID if needed
      return NextResponse.json(
        { error: "Semester not found" },
        { status: 404 }
      );
    }

    // Simulate checking for duplicate names (assuming "Second Term" is a duplicate)
    if (semester_name.toLowerCase() === "second term") {
      return NextResponse.json(
        {
          error: "Semester name already exists. Choose a different name.",
        },
        { status: 409 }
      );
    }

    // Mock the updated semester data
    const updatedSemester = {
      id: parseInt(id),
      semester_name: semester_name,
      // You might want to update other fields here based on your logic
    };

    return NextResponse.json(
      {
        message: "Semester updated successfully",
        semester: updatedSemester,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
