import { NextResponse } from "next/server";

//localhost:3000/api/fees/getfees/[student_id]

export async function GET(req, { params }) {
  const { student_id } = params;

  try {
    // Mock data based on the provided example
    const mockStudentData = {
      photo:
        "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FdorkordiChannel.jpeg2024-08-21T22%3A50%3A58.566Z?alt=media&token=c4c32613-7f02-4936-84ad-fcb2e4b85767",
      first_name: "nelson1",
      last_name: "Dorkordi",
      other_names: "coccus",
      date_of_birth: "1999-02-23",
      gender: "Male",
      old_balance: "400.00",
      enrollment_date: "2024-08-21",
    };

    if (student_id === "1") {
      return NextResponse.json(mockStudentData, { status: 200 });
    } else {
      return NextResponse.json({ error: "student not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { student_id } = params;
  const body = await req.json();

  try {
    const {
      first_name,
      last_name,
      date_of_birth,
      gender,
      address,
      phone,
      email,
      hire_date,
      salary,
      qualification,
      subject_specialization,
      image_upload,
      role,
      // employee_id,
    } = body;

    // Mock updated data (modify as needed)
    const updatedTeacher = {
      teacher_id: student_id,
      first_name: first_name,
      last_name: last_name,
      date_of_birth: date_of_birth,
      gender: gender,
      address: address,
      phone: phone,
      email: email,
      hire_date: hire_date,
      salary: salary,
      qualification: qualification,
      subject_specialization: subject_specialization,
      image_upload: image_upload,
      role: role,
    };

    if (student_id === "1") {
      // Simulate successful update
      return NextResponse.json(updatedTeacher, { status: 200 });
    } else {
      return NextResponse.json({ error: "student not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
