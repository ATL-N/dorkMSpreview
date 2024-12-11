import { NextResponse } from "next/server";

//localhost:3000/api/parents/getallparents

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data representing the structure you provided
    const mockParentsData = [
      {
        parent_id: 3,
        other_names: "Cecilia ",
        last_name: "Akwasikumah",
        phone: "0249760060",
        email: "parent@gmail.com",
        address: "Apam",
        status: "active",
        user_id: null,
      },
      {
        parent_id: 2,
        other_names: "Edward 23",
        last_name: "Attah 3",
        phone: "0249760060",
        email: "parent2@gmail.com",
        address: "apam church service",
        status: "active",
        user_id: 39,
      },
      {
        parent_id: 1,
        other_names: "christiana",
        last_name: "Gyato",
        phone: "0244024457",
        email: "parent@gmail.com",
        address: "apam church servicef",
        status: "active",
        user_id: null,
      },
      {
        parent_id: 9,
        other_names: "Kofi",
        last_name: "Nimo",
        phone: "0551544776",
        email: "kofinimo@gmail.com",
        address: "Ghana post gps 25634",
        status: "active",
        user_id: 45,
      },
      {
        parent_id: 6,
        other_names: "Yaa",
        last_name: "Nooyoo",
        phone: "0551544776",
        email: "yaanooyoo@gmail.com",
        address: "Ghana post gps 25634",
        status: "active",
        user_id: 33,
      },
      {
        parent_id: 7,
        other_names: "Yaa",
        last_name: "Yaa",
        phone: "054575686",
        email: "atlfrt@gmail.com",
        address: "Ghana post gps 25634",
        status: "active",
        user_id: 34,
      },
    ];

    let filteredData = mockParentsData;

    if (query) {
      // Simulate search functionality (case-insensitive)
      const lowerCaseQuery = query.toLowerCase();
      filteredData = mockParentsData.filter(
        (parent) =>
          parent.other_names.toLowerCase().includes(lowerCaseQuery) ||
          parent.last_name.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Simulate sorting by last_name and then parent_id in descending order
    filteredData.sort((a, b) => {
      const lastNameComparison = a.last_name.localeCompare(b.last_name);
      if (lastNameComparison !== 0) {
        return lastNameComparison;
      }
      return b.parent_id - a.parent_id; // Descending order of parent_id
    });

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
