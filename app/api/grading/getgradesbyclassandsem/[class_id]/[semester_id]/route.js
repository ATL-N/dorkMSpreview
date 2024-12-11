import { NextResponse } from "next/server";

// /api/grading/getgradesbyclassandsem/[class_id]/[semester_id]/route.js
export async function GET(req, { params }) {
  try {
    const { class_id, semester_id } = params;

    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing class_id or semester_id parameter" },
        { status: 400 }
      );
    }

    // Mock Data - Replace this with your actual mock data
    const mockData = {
      subjects: [],
      students: [],
      classAverage: {},
    };

    if (class_id === "1" && semester_id === "1") {
      mockData.subjects = [
        "Biology 1",
        "Chemistry",
        "Fante",
        "French",
        "Mathematics",
        "Social Studies",
      ];
      mockData.students = [
        {
          id: 1,
          name: "nelson1 Dorkordi",
          grades: {
            "Biology 1": 30,
            Chemistry: 41,
            Fante: 83,
            French: 54,
            Mathematics: 90,
            "Social Studies": 75,
          },
          teacherRemark: "student details  \nclass teachers remark2",
          headteacherRemark: "head teachers remark",
        },
        {
          id: 2,
          name: "John Nyarkoh",
          grades: {
            "Biology 1": 30,
            Chemistry: 50,
            Fante: 91,
            French: 60,
            Mathematics: 87,
            "Social Studies": 0,
          },
          teacherRemark: "",
          headteacherRemark: "this is the headteachers remarks for nyarko",
        },
      ];
      mockData.classAverage = {
        "Biology 1": 30,
        Chemistry: 45.5,
        Fante: 87,
        French: 57,
        Mathematics: 89,
        "Social Studies": 75,
      };
    } else {
      // Handle other class/semester combinations (e.g., different mock data or 404 error)
      return NextResponse.json(
        { error: "No data found for the specified class and semester" },
        { status: 404 }
      );
    }

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error fetching grades (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
