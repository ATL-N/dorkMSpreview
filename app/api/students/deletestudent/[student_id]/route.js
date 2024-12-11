import { NextResponse } from "next/server";

// /api/students/deletestudent/[student_id]
export async function PUT(req, { params }) {
  const { student_id } = params;

  try {
    // Simulate getting user_id for the student
    console.log(`Simulating retrieval of user_id for student: ${student_id}`);
    const user_id = Math.floor(Math.random() * 1000) + 1; // Example: random user ID

    // Check if the student exists (mock)
    if (student_id > 100) {
      // Example: Simulate student not found for IDs > 100
      return NextResponse.json(
        { error: "Student not found (mock)" },
        { status: 404 }
      );
    }

    // Simulate updating status in students table
    console.log(`Simulating student status update for student: ${student_id}`);

    // Simulate updating status in users table
    console.log(`Simulating user status update for user: ${user_id}`);

    // Simulate updating status in user_health_record table
    console.log(`Simulating health record status update for user: ${user_id}`);

    // Simulate getting parent IDs for the student
    console.log(
      `Simulating retrieval of parent IDs for student: ${student_id}`
    );
    const parentIds = [
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 101,
    ]; // Example: random parent IDs

    // Simulate checking if parents have other active students and updating status if not
    for (const parent_id of parentIds) {
      console.log(
        `Simulating check for other active students for parent: ${parent_id}`
      );
      const otherStudentsCount = 0; // Example: Simulate no other active students

      if (otherStudentsCount === 0) {
        console.log(`Simulating parent status update for parent: ${parent_id}`);
      }
    }

    // Simulate updating status in student_parent table
    console.log(
      `Simulating student-parent status update for student: ${student_id}`
    );

    return NextResponse.json(
      {
        message: `Student with ID ${student_id} has been successfully deactivated (mock).`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Failed to delete student (mock)" },
      { status: 500 }
    );
  }
}
