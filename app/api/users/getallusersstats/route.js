import { NextResponse } from "next/server";

// /api/users/getallusersstats/route.js

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    const mockData = {
      data: [
        {
          id: 2,
          user_name: "John ",
          user_email: "jhon@gmail.com",
          role: "user",
          status: "active",
        },
        {
          id: 26,
          user_name: "adminadmin",
          user_email: "admin@admin",
          role: "admin",
          status: "active",
        },
        {
          id: 39,
          user_name: "edward 23 attah 3",
          user_email: "parent2@gmail.com",
          role: "parent",
          status: "active",
        },
        {
          id: 3,
          user_name: "emefa",
          user_email: "emefa@gmail.com",
          role: "user",
          status: "active",
        },
        {
          id: 38,
          user_name: "emmanuel  foli ",
          user_email: "atlcoccus@gmail.com53535",
          role: "student",
          status: "active",
        },
        {
          id: 22,
          user_name: "ernest nelson ",
          user_email: "atlcoccus123@gmail.com25",
          role: "admin",
          status: "active",
        },
        {
          id: 14,
          user_name: "ernest owusunelson ",
          user_email: "atlcoccus@gmail549.com",
          role: "user",
          status: "active",
        },
        {
          id: 12,
          user_name: "john nyarkohakwasikumah",
          user_email: "atlcoccus@gmail123.com",
          role: "user",
          status: "active",
        },
        {
          id: 45,
          user_name: "kofi nimo",
          user_email: "kofinimo@gmail.com",
          role: "parent",
          status: "active",
        },
        {
          id: 31,
          user_name: "matilda attah ",
          user_email: "emefa@emefa.com",
          role: "student",
          status: "active",
        },
        {
          id: 9,
          user_name: "matilda attah emefa",
          user_email: "atlcoccus@gmail2.com",
          role: "user",
          status: "active",
        },
        {
          id: 6,
          user_name: "nel",
          user_email: "nel@gmail.com",
          role: "admin",
          status: "active",
        },
        {
          id: 1,
          user_name: "nelson",
          user_email: "atlcoccus@gmail.com",
          role: "user",
          status: "active",
        },
        {
          id: 4,
          user_name: "nelson 2",
          user_email: "nelson@gmail.com",
          role: "user",
          status: "active",
        },
        {
          id: 13,
          user_name: "nelson1dorkordiakwasikumah",
          user_email: "atlcoccus@gmail586.com",
          role: "user",
          status: "active",
        },
        {
          id: 29,
          user_name: "nelsondorkordi",
          user_email: "atlcoccus@gmail.comme",
          role: "student",
          status: "active",
        },
        {
          id: 32,
          user_name: "patience  enyaah  araba",
          user_email: "enyaahpat@gmail.com",
          role: "student",
          status: "active",
        },
        {
          id: 35,
          user_name: "patience  enyaah maame araba",
          user_email: "enyaahpat1@gmail.com",
          role: "teaching staff",
          status: "active",
        },
        {
          id: 36,
          user_name: "richmond adasu  ",
          user_email: "",
          role: "student",
          status: "active",
        },
        {
          id: 33,
          user_name: "yaa nooyoo",
          user_email: "yaanooyoo@gmail.com",
          role: "parent",
          status: "active",
        },
        {
          id: 34,
          user_name: "yaa yaa",
          user_email: "atlfrt@gmail.com",
          role: "parent",
          status: "active",
        },
      ],
      stats: [
        {
          name: "admin",
          count: 3,
        },
        {
          name: "parent",
          count: 4,
        },
        {
          name: "student",
          count: 5,
        },
        {
          name: "teaching staff",
          count: 1,
        },
        {
          name: "user",
          count: 8,
        },
      ],
      total: 21,
      studentstotal: 6,
      totalparentcount: 6,
      totalstaffcount: 8,
    };

    // If query is provided, filter the data
    if (query) {
      const filteredData = mockData.data.filter(
        (user) =>
          user.user_name.toLowerCase().includes(query.toLowerCase()) ||
          user.user_email.toLowerCase().includes(query.toLowerCase()) ||
          user.role.toLowerCase().includes(query.toLowerCase())
      );

      return NextResponse.json(
        {
          data: filteredData,
          stats: mockData.stats,
          total: filteredData.length,
          studentstotal: mockData.studentstotal,
          totalparentcount: mockData.totalparentcount,
          totalstaffcount: mockData.totalstaffcount,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
