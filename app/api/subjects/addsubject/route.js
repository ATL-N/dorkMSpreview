import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addsubjectapi", body);

    const { subject_name } = body;

    if (!subject_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock database - in-memory object to store subjects
    const mockSubjectsDB = {}; // Start with an empty object

    // Check if subject_name already exists (case-insensitive)
    const subjectExists = Object.values(mockSubjectsDB).some(
      (subject) =>
        subject.subject_name.toLowerCase() === subject_name.toLowerCase()
    );

    if (subjectExists) {
      return NextResponse.json(
        {
          error: "Subject name already exists. Try adding another subject",
        },
        { status: 409 } // 409 Conflict
      );
    }

    // If subject doesn't exist, simulate insertion
    const newSubjectId =
      Object.keys(mockSubjectsDB).length > 0
        ? Math.max(...Object.keys(mockSubjectsDB).map(Number)) + 1
        : 1;

    mockSubjectsDB[newSubjectId] = {
      subject_id: newSubjectId,
      subject_name: subject_name,
    };

    console.log(`Subject ${newSubjectId} added successfully (mock)`);

    return NextResponse.json(
      { message: "Subject added successfully", id: newSubjectId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    console.log("body in updateSubjectApi", body);

    const { subject_id, subject_name } = body;

    if (!subject_id || !subject_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock database - in-memory object to store subjects
    const mockSubjectsDB = {
      1: { subject_id: 1, subject_name: "Mathematics" },
      2: { subject_id: 2, subject_name: "English" },
      3: { subject_id: 3, subject_name: "Science" },
    };

    // Check if the subject exists
    if (!mockSubjectsDB[subject_id]) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    // Check if the new subject name already exists (excluding the current subject)
    const subjectNameExists = Object.values(mockSubjectsDB).some(
      (subject) =>
        subject.subject_name.toLowerCase() === subject_name.toLowerCase() &&
        subject.subject_id !== subject_id
    );

    if (subjectNameExists) {
      return NextResponse.json(
        {
          error: "Subject name already exists. Choose a different name.",
        },
        { status: 409 } // 409 Conflict
      );
    }

    // If checks pass, simulate the update
    mockSubjectsDB[subject_id].subject_name = subject_name;

    console.log(`Subject ${subject_id} updated successfully (mock)`);

    return NextResponse.json(
      {
        message: "Subject updated successfully",
        subject: mockSubjectsDB[subject_id],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
