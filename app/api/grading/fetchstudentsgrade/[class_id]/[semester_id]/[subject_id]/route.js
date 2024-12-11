import { NextResponse } from "next/server";

// /api/grading/fetchstudentsgrade/[class_id]/[semester_id]/[subject_id]
export async function GET(req, { params }) {
  try {
    const { class_id, semester_id, subject_id } = params;

    if (!class_id || !semester_id || !subject_id) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Mock Grades Data - Replace with your actual mock data
    let mockGradesData = {
      class_id: "",
      subject_id: "",
      semester_id: "",
      user_id: null,
      grades: [],
    };

    if (class_id === "1" && semester_id === "1" && subject_id === "1") {
      mockGradesData = {
        class_id: "1",
        subject_id: "1",
        semester_id: "1",
        user_id: 26,
        grades: [
          {
            student_id: 1,
            class_score: "40.00",
            exams_score: "50.00",
            total_score: "90.00",
          },
        ],
      };
    } else if (class_id === "2" && semester_id === "2" && subject_id === "1") {
      // Add mock data for this combination
      mockGradesData = {
        class_id: "2",
        subject_id: "1",
        semester_id: "2",
        user_id: 27,
        grades: [
          {
            student_id: 2,
            class_score: "30.00",
            exams_score: "60.00",
            total_score: "90.00",
          },
          {
            student_id: 3,
            class_score: "50.00",
            exams_score: "40.00",
            total_score: "90.00",
          },
        ],
      };
    } else {
      // Return 404 or handle other combinations as needed
      return NextResponse.json({ error: "No grades found" }, { status: 404 });
    }

    return NextResponse.json(mockGradesData, { status: 200 });
  } catch (error) {
    console.error("Error fetching grades (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
