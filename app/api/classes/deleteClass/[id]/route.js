import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { user_id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Class ID is required" },
        { status: 400 }
      );
    }

    if (id == 1) {
      return NextResponse.json(
        {
          error:
            "Cannot delete the completed class as it is essential for the system",
        },
        { status: 400 }
      );
    }

    // Simulate checking for active students (replace with DB logic later)
    const hasActiveStudents = false; // Set to true for testing that condition

    if (hasActiveStudents) {
      return NextResponse.json(
        {
          error: `Cannot delete class as it currently has active students. Please reassign or remove all students before deleting the class.`,
        },
        { status: 400 }
      );
    }

    // Simulate successful deletion (replace with DB logic later)
    const className = "Example Class Name"; // Replace with a way to get the class name
    console.log(
      `Simulating deletion of class ${className} (ID: ${id}) by user ${user_id}`
    );

    return NextResponse.json(
      {
        message: `${className} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error simulating class deletion:", error);
    return NextResponse.json(
      {
        error:
          "Failed to process class deletion request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
