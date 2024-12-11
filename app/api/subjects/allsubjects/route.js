import { NextResponse } from "next/server";

//localhost:3000/api/subjects/allsubjects

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data for subjects
    const mockSubjects = [
      { id: 8, subject_name: "Biology 1" },
      { id: 5, subject_name: "Chemistry" },
      { id: 10, subject_name: "Ethics" },
      { id: 6, subject_name: "Fante" },
      { id: 7, subject_name: "French" },
      { id: 2, subject_name: "Mathematics" },
      { id: 9, subject_name: "Owop" },
      { id: 4, subject_name: "RME" },
      { id: 3, subject_name: "Social Studies" },
    ];

    let filteredSubjects = mockSubjects;

    if (query) {
      // Simulate search functionality (case-insensitive)
      const sanitizedQuery = query.toLowerCase();
      filteredSubjects = mockSubjects.filter((subject) =>
        subject.subject_name.toLowerCase().includes(sanitizedQuery)
      );
    }

    // Simulate sorting by subject_name (ascending order)
    filteredSubjects.sort((a, b) =>
      a.subject_name.localeCompare(b.subject_name)
    );

    return NextResponse.json(filteredSubjects, { status: 200 });
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
