import { NextResponse } from "next/server";

// /api/semester/all

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data representing the structure you provided
    const mockSemesters = [
      {
        id: 1,
        semester_name: "First Term",
        start_date: "2024-07-28",
        end_date: "2024-11-11",
        status: "active",
      },
      {
        id: 2,
        semester_name: "Second Term",
        start_date: "2024-09-01",
        end_date: "2024-09-30",
        status: "completed",
      },
      {
        id: 8,
        semester_name: "Third Term",
        start_date: "2024-10-01",
        end_date: "2024-11-07",
        status: "upcoming",
      },
    ];

    let filteredSemesters = mockSemesters;

    if (query) {
      // Simulate search functionality (case-insensitive)
      const sanitizedQuery = query.toLowerCase();
      filteredSemesters = mockSemesters.filter(
        (semester) =>
          semester.semester_name.toLowerCase().includes(sanitizedQuery) &&
          semester.status !== "active" // Assuming you meant to filter out "active" status with a query
      );
    } else {
      // Simulate filtering out "deleted" status when no query is provided
      filteredSemesters = mockSemesters.filter(
        (semester) => semester.status !== "deleted"
      );
    }

    // Simulate sorting by start_date (ascending order)
    filteredSemesters.sort((a, b) => a.start_date.localeCompare(b.start_date));

    return NextResponse.json(filteredSemesters, { status: 200 });
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
