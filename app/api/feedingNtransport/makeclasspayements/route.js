import { NextResponse } from "next/server";

//  /api/feedingNtransport/getSemesterSummary?semester_id=1
// /api/feedingNtransport/getStaffCollections?semester_id=1
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const semester_id = searchParams.get("semester_id");

    if (!semester_id) {
      return NextResponse.json(
        { error: "Missing required field: semester_id" },
        { status: 400 }
      );
    }

    let mockData = [];

    if (semester_id === "1") {
      // Mock data for semester_id = 1
      mockData = [
        {
          payment_date: "2024-03-15",
          day_of_week: "Friday",
          raw_date: "2024-03-15T00:00:00.000Z",
          class_id: 7,
          class_name: "Class 3",
          students_paid: 2,
          total_class_feeding_fee: 10,
          total_class_transport_fee: 3,
          total_class_amount: 13,
          percentage_of_semester: 36.11,
        },
        {
          payment_date: "2024-03-12",
          day_of_week: "Tuesday",
          raw_date: "2024-03-12T00:00:00.000Z",
          class_id: 7,
          class_name: "Class 3",
          students_paid: 1,
          total_class_feeding_fee: 5,
          total_class_transport_fee: 0,
          total_class_amount: 5,
          percentage_of_semester: 13.89,
        },
        {
          payment_date: "2024-03-08",
          day_of_week: "Friday",
          raw_date: "2024-03-08T00:00:00.000Z",
          class_id: 2,
          class_name: "Class 2b",
          students_paid: 3,
          total_class_feeding_fee: 0,
          total_class_transport_fee: 18,
          total_class_amount: 18,
          percentage_of_semester: 50.0,
        },
      ];
    } else {
      // Default mock data (for other semester_ids)
      mockData = []; // Empty array or you can add some default data if needed
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
