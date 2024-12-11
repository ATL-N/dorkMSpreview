import { NextResponse } from "next/server";

// /api/semester/updatesemester

export async function PUT(req, { params }) {
  const { semester_id } = params;

  try {
    const body = await req.json();
    const { semester_name, start_date, end_date, status } = body;

    if (!semester_id || !semester_name || !start_date || !end_date || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock data for semesters (you'll need to adjust and expand this)
    const mockSemesters = [
      {
        semester_id: 1,
        semester_name: "First Term",
        start_date: "2024-01-15",
        end_date: "2024-05-15",
        status: "active",
      },
      {
        semester_id: 2,
        semester_name: "Second Term",
        start_date: "2024-07-01",
        end_date: "2024-11-30",
        status: "completed",
      },
    ];

    // 1. Check if the semester exists
    const currentSemesterIndex = mockSemesters.findIndex(
      (s) => s.semester_id === parseInt(semester_id)
    );

    if (currentSemesterIndex === -1) {
      return NextResponse.json(
        { error: "Semester not found" },
        { status: 404 }
      );
    }

    const currentSemester = mockSemesters[currentSemesterIndex];

    // 2. Check if start_date is before end_date
    if (new Date(start_date) >= new Date(end_date)) {
      return NextResponse.json(
        { error: "Start date must be before end date" },
        { status: 400 }
      );
    }

    // 3. Check for overlapping dates (excluding the current semester)
    const overlappingSemesters = mockSemesters.filter((sem) => {
      if (sem.semester_id === parseInt(semester_id)) return false; // Exclude current semester

      const newStart = new Date(start_date);
      const newEnd = new Date(end_date);
      const semStart = new Date(sem.start_date);
      const semEnd = new Date(sem.end_date);

      return (
        (newStart >= semStart && newStart <= semEnd) ||
        (newEnd >= semStart && newEnd <= semEnd) ||
        (semStart >= newStart && semStart <= newEnd) ||
        (semEnd >= newStart && semEnd <= newEnd)
      );
    });

    if (overlappingSemesters.length > 0) {
      const overlapMessage = overlappingSemesters
        .map(
          (sem) =>
            `${sem.semester_name} (${new Date(
              sem.start_date
            ).toLocaleDateString()} - ${new Date(
              sem.end_date
            ).toLocaleDateString()})`
        )
        .join(", ");
      return NextResponse.json(
        {
          error: `The updated semester dates overlap with existing semesters: ${overlapMessage}`,
          overlappingSemesters: overlappingSemesters,
        },
        { status: 409 }
      );
    }

    // 4. Check if semester_name already exists (excluding the current semester)
    const duplicateName = mockSemesters.some(
      (sem) =>
        sem.semester_id !== parseInt(semester_id) &&
        sem.semester_name.toLowerCase() === semester_name.toLowerCase()
    );

    if (duplicateName) {
      return NextResponse.json(
        { error: "Semester name already exists. Choose a different name." },
        { status: 409 }
      );
    }

    // 5. Handle status changes (mock logic)
    if (status === "active" && currentSemester.status !== "active") {
      // Set all others to completed
      mockSemesters.forEach((sem) => {
        if (sem.status === "active") {
          sem.status = "completed";
        }
      });
    } else if (status !== "active" && currentSemester.status === "active") {
      // Check if there's another active semester
      const hasAnotherActive = mockSemesters.some(
        (sem) =>
          sem.semester_id !== parseInt(semester_id) && sem.status === "active"
      );

      if (!hasAnotherActive) {
        return NextResponse.json(
          {
            error:
              "Cannot change the only active semester to inactive. There must always be an active semester.",
          },
          { status: 400 }
        );
      }
    }

    // 6. Update the semester (mock the update)
    const updatedSemester = {
      ...currentSemester,
      semester_name,
      start_date,
      end_date,
      status,
    };

    mockSemesters[currentSemesterIndex] = updatedSemester; // Update in the mock data

    return NextResponse.json(
      {
        message: "Semester updated successfully",
        semester: updatedSemester,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
