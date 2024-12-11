import { NextResponse } from "next/server";

// /api/feedingNtransport/getclassstats
// GET /api/feedingNtransport/getclassstats?class_id=1&date=2024-03-15
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const class_id = searchParams.get("class_id");
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];

    if (!class_id) {
      return NextResponse.json(
        { error: "Missing required field: class_id" },
        { status: 400 }
      );
    }

    // Mock data generation
    let mockData;
    if (class_id === "1" && date === "2024-03-15") {
      mockData = {
        date: "2024-03-15",
        class_id: "1",
        daily_statistics: {
          students_paid_feeding: "3",
          students_paid_transport: "2",
          total_feeding_received: 370,
          total_transport_received: 180,
          total_feeding_expected: 720,
          total_transport_expected: 230,
        },
        weekly_statistics: {
          total_feeding_received: 950,
          total_transport_received: 410,
        },
      };
    } else if (class_id === "2" && date === "2024-03-15") {
      mockData = {
        date: "2024-03-15",
        class_id: "2",
        daily_statistics: {
          students_paid_feeding: "1",
          students_paid_transport: "1",
          total_feeding_received: 170,
          total_transport_received: 50,
          total_feeding_expected: 120,
          total_transport_expected: 50,
        },
        weekly_statistics: {
          total_feeding_received: 170,
          total_transport_received: 50,
        },
      };
    } else {
      // Default mock data (for other class_ids or dates)
      mockData = {
        date,
        class_id,
        daily_statistics: {
          students_paid_feeding: "0",
          students_paid_transport: "0",
          total_feeding_received: 0,
          total_transport_received: 0,
          total_feeding_expected: 0,
          total_transport_expected: 0,
        },
        weekly_statistics: {
          total_feeding_received: 0,
          total_transport_received: 0,
        },
      };
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
