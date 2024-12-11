import { NextResponse } from "next/server";

// /api/parents/getactiveparents
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data representing the structure you provided
    const mockParentsData = [
      {
        id: 3,
        name: "Akwasikumah Cecilia",
        phone: "0249760060",
        active_students_count: 2,
      },
      {
        id: 2,
        name: "Attah 3 Edward 23",
        phone: "0249760060",
        active_students_count: 3,
      },
      {
        id: 1,
        name: "Gyato christiana",
        phone: "0244024457",
        active_students_count: 2,
      },
      {
        id: 9,
        name: "Nimo Kofi",
        phone: "0551544776",
        active_students_count: 1,
      },
      {
        id: 6,
        name: "Nooyoo Yaa",
        phone: "0551544776",
        active_students_count: 2,
      },
      { id: 7, name: "Yaa Yaa", phone: "054575686", active_students_count: 1 },
    ];

    let filteredData = mockParentsData;

    if (query) {
      // Simulate search functionality (case-insensitive)
      const lowerCaseQuery = query.toLowerCase();
      filteredData = mockParentsData.filter(
        (parent) =>
          parent.name.toLowerCase().includes(lowerCaseQuery) ||
          parent.phone.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return NextResponse.json(filteredData, { status: 200 });
  } catch (error) {
    console.error("Mock data error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
