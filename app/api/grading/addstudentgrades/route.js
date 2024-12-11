import { NextResponse } from "next/server";

// /api/grading/addstudentgrades
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("this is the body", body);
    const { class_id, subject_id, semester_id, user_id, grades } = body;

    if (
      !class_id ||
      !subject_id ||
      !semester_id ||
      !user_id ||
      !grades ||
      !grades.length
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock grading logic (replace with your actual mock implementation)
    const successfullyAddedGrades = [];
    const failedToAddGrades = [];

    for (const grade of grades) {
      const { student_id, class_score, exams_score, total_score } = grade;

      if (
        !student_id ||
        class_score === undefined ||
        exams_score === undefined ||
        !total_score
      ) {
        //Simulate some kind of error during processing. Add more fields here or adjust conditions as needed.

        failedToAddGrades.push({
          student_id: student_id,
          error: "Missing student id or scores",
        });
      } else {
        //Simulate success. Replace with your mocking logic.
        successfullyAddedGrades.push({ student_id: student_id });
      }
    }

    if (failedToAddGrades.length > 0) {
      // Some or all updates failed
      return NextResponse.json(
        {
          error: "Some grades failed to submit",
          successfullyAdded: successfullyAddedGrades,
          failed: failedToAddGrades,
        },
        { status: 400 } // Or another appropriate status code
      );
    }

    return NextResponse.json(
      {
        message: "Grades submitted successfully",
        successfullyAdded: successfullyAddedGrades,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in grade submission (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
