import { NextResponse } from "next/server";

// /api/semester/addsemester/route.js
export async function POST(req) {
  try {
    // Mock database - in-memory object to store semesters
    const mockSemestersDB = {};

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    const body = await req.json();
    console.log("body in addsemesterapi", body);

    const { semester_name, start_date, end_date, status } = body;

    if (!semester_name || !start_date || !end_date || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if start_date is before end_date
    if (new Date(start_date) >= new Date(end_date)) {
      return NextResponse.json(
        { error: "Start date must be before end date" },
        { status: 400 }
      );
    }

    // Check for overlapping dates
    const isOverlapping = Object.values(mockSemestersDB).some((semester) => {
      return (
        (new Date(start_date) >= new Date(semester.start_date) &&
          new Date(start_date) <= new Date(semester.end_date)) ||
        (new Date(end_date) >= new Date(semester.start_date) &&
          new Date(end_date) <= new Date(semester.end_date)) ||
        (new Date(semester.start_date) >= new Date(start_date) &&
          new Date(semester.start_date) <= new Date(end_date)) ||
        (new Date(semester.end_date) >= new Date(start_date) &&
          new Date(semester.end_date) <= new Date(end_date))
      );
    });

    if (isOverlapping) {
      // Simulate transaction ROLLBACK
      console.log("Mock Transaction ROLLBACK");
      return NextResponse.json(
        { error: "The new semester dates overlap with an existing semester" },
        { status: 409 }
      );
    }

    // Check if there's an active semester and update if necessary
    const activeSemester = Object.values(mockSemestersDB).find(
      (semester) => semester.status === "active"
    );
    if (activeSemester && status === "active") {
      activeSemester.status = "completed";
      console.log(
        `Mock Updated existing active semester ${activeSemester.semester_id} to completed`
      );
    }

    // Check if semester_name already exists (case-insensitive)
    const semesterNameExists = Object.values(mockSemestersDB).some(
      (semester) =>
        semester.semester_name.toLowerCase() === semester_name.toLowerCase()
    );

    if (semesterNameExists) {
      // Simulate transaction ROLLBACK
      console.log("Mock Transaction ROLLBACK");
      return NextResponse.json(
        { error: "Semester name already exists. Try adding another semester" },
        { status: 409 }
      );
    }

    // If all checks pass, simulate insertion
    const newSemesterId =
      Object.keys(mockSemestersDB).length > 0
        ? Math.max(...Object.keys(mockSemestersDB).map(Number)) + 1
        : 1;

    mockSemestersDB[newSemesterId] = {
      semester_id: newSemesterId,
      semester_name,
      start_date,
      end_date,
      status,
    };

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");
    console.log(`Semester ${newSemesterId} added successfully (mock)`);

    return NextResponse.json(
      { message: "Semester added successfully", id: newSemesterId },
      { status: 201 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.log("Mock Transaction ROLLBACK");
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
