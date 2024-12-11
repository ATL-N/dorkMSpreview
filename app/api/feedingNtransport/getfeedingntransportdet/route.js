import { NextResponse } from "next/server";

//localhost:3000/api/feedingNtransport/getfeedingntransportdet

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    console.log("query", query);

    let mockData = [];

    if (query) {
      // Mock data for search (matching the query)
      const lowerQuery = query.toLowerCase();

      mockData = [
        {
          student_id: 6,
          full_name: "Foli Emmanuel  ",
          class_name: "Class 3",
          class_id: 7,
          feeding_fee: "5.00",
          transport_fee: "3.00",
          total_fees_due: "8.00",
          previous_balance: "680.00",
          total_amount_due: "688.00",
        },
        {
          student_id: 1,
          full_name: "Dorkordi nelson coccus",
          class_name: "class 2b",
          class_id: 2,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "400.00",
          total_amount_due: null,
        },
        {
          student_id: 2,
          full_name: "Nyarkoh John Yaw",
          class_name: "class 2b",
          class_id: 2,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "450.00",
          total_amount_due: null,
        },
      ].filter(
        (student) =>
          student.full_name.toLowerCase().includes(lowerQuery) ||
          student.class_name.toLowerCase().includes(lowerQuery)
      );
    } else {
      // Mock data for the complete list (no query)
      mockData = [
        {
          student_id: 5,
          full_name: "Adasu  Richmond ",
          class_name: "Class 3",
          class_id: 7,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "350.00",
          total_amount_due: null,
        },
        {
          student_id: 3,
          full_name: "Attah  Matilda  Emefa ",
          class_name: "JHS 2",
          class_id: 4,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "871.50",
          total_amount_due: null,
        },
        {
          student_id: 1,
          full_name: "Dorkordi nelson coccus",
          class_name: "class 2b",
          class_id: 2,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "400.00",
          total_amount_due: null,
        },
        {
          student_id: 4,
          full_name: "Enyaah  Patience  Araba",
          class_name: "Completed",
          class_id: 1,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "-100.00",
          total_amount_due: null,
        },
        {
          student_id: 6,
          full_name: "Foli Emmanuel  ",
          class_name: "Class 3",
          class_id: 7,
          feeding_fee: "5.00",
          transport_fee: "3.00",
          total_fees_due: "8.00",
          previous_balance: "680.00",
          total_amount_due: "688.00",
        },
        {
          student_id: 2,
          full_name: "Nyarkoh John Yaw",
          class_name: "class 2b",
          class_id: 2,
          feeding_fee: null,
          transport_fee: null,
          total_fees_due: null,
          previous_balance: "450.00",
          total_amount_due: null,
        },
      ];
    }

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
