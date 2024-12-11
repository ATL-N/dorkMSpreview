import { NextResponse } from "next/server";

// /api/subjects/updatesubject/[id]

export async function PUT(req, { params }) {
  const { id } = params;

  console.log("id", id);

  try {
    const body = await req.json();
    console.log("body in updateSubjectApi", body);

    const { subject_name, user_id } = body;

    if (!id || !subject_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock database - in-memory object to store subjects
    const mockSubjectsDB = {
      1: { subject_id: 1, subject_name: "Mathematics", status: "active" },
      2: { subject_id: 2, subject_name: "English", status: "active" },
      3: { subject_id: 3, subject_name: "Science", status: "active" },
      // ... add more subjects as needed
    };

    // Check if the subject exists
    if (!mockSubjectsDB[id]) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    // Check if the new subject name already exists (excluding the current subject)
    const subjectNameExists = Object.values(mockSubjectsDB).some(
      (subject) =>
        subject.subject_name.toLowerCase() === subject_name.toLowerCase() &&
        subject.subject_id !== parseInt(id) // Ensure comparison with number
    );

    if (subjectNameExists) {
      return NextResponse.json(
        {
          error: "Subject name already exists. Choose a different name.",
        },
        { status: 409 } // 409 Conflict
      );
    }

    // If checks pass, proceed with the update (mock)
    mockSubjectsDB[id].subject_name = subject_name;

    console.log(`Subject ${id} updated successfully (mock)`);

    return NextResponse.json(
      {
        message: "Subject updated successfully",
        subject: mockSubjectsDB[id],
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
