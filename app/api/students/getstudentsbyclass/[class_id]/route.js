import { NextResponse } from "next/server";

// /api/students/getstudentsbyclass/[class_id]

export async function GET(req, { params }) {
  const { class_id } = params;

  try {
    if (!class_id) {
      return NextResponse.json(
        { error: "Missing required class ID" },
        { status: 400 }
      );
    }

    // Mock data for students
    const mockStudents = {
      1: [
        {
          student_id: 1,
          first_name: "John",
          last_name: "Doe",
          other_names: "Kofi",
          date_of_birth: "2005-03-15T00:00:00.000Z",
          gender: "Male",
          national_id: "1234567890",
        },
        {
          student_id: 2,
          first_name: "Jane",
          last_name: "Smith",
          other_names: "",
          date_of_birth: "2006-01-20T00:00:00.000Z",
          gender: "Female",
          national_id: "0987654321",
        },
      ],
      2: [
        {
          student_id: 3,
          first_name: "Alice",
          last_name: "Johnson",
          other_names: "Ama",
          date_of_birth: "2004-11-02T00:00:00.000Z",
          gender: "Female",
          national_id: "5678901234",
        },
      ],
      // ... add more class_id and students as needed
    };

    // Get students for the given class_id
    const students = mockStudents[class_id];

    if (!students || students.length === 0) {
      return NextResponse.json(
        { error: "No students found for the given class" },
        { status: 404 }
      );
    }

    // Format the student data
    const formattedStudents = students.map((student) => ({
      student_id: student.student_id,
      student_name: `${student.last_name} ${student.first_name} ${
        student.other_names ? student.other_names : ""
      }`.trim(),
      date_of_birth: student.date_of_birth,
      gender: student.gender,
      national_id: student.national_id,
    }));

    return NextResponse.json(formattedStudents, { status: 200 });
  } catch (error) {
    console.error("Error fetching students (mock):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
