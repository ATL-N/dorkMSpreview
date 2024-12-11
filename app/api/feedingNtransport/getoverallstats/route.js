import { NextResponse } from "next/server";

// /api/feedingNtransport/getoverallstats?date=2024-03-15
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];

    let mockData;

    if (date === "2024-03-15") {
      // Mock data for the specific date
      mockData = {
        date: "2024-03-15",
        school_statistics: {
          daily_statistics: {
            students_paid_feeding: 1,
            students_paid_transport: 1,
            total_feeding_received: 5,
            total_transport_received: 3,
          },
          expected_statistics: {
            total_students: 6,
            students_with_feeding: 1,
            students_with_transport: 1,
            total_feeding_expected: 5,
            total_transport_expected: 3,
          },
          weekly_statistics: {
            total_feeding_received: 5,
            total_transport_received: 3,
          },
        },
        class_statistics: [
          {
            class_id: 1,
            class_name: "Completed",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 1,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 2,
            class_name: "class 2b",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 2,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 3,
            class_name: "class 1",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 0,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 4,
            class_name: "JHS 2",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 1,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 5,
            class_name: "Jhs 2c",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 0,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 6,
            class_name: "Nursery 1A",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 0,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 7,
            class_name: "Class 3",
            daily_statistics: {
              students_paid_feeding: 1,
              students_paid_transport: 1,
              total_feeding_received: 5,
              total_transport_received: 3,
            },
            expected_statistics: {
              total_students: 2,
              students_with_feeding: 1,
              students_with_transport: 1,
              total_feeding_expected: 5,
              total_transport_expected: 3,
            },
            weekly_statistics: {
              total_feeding_received: 5,
              total_transport_received: 3,
            },
          },
          {
            class_id: 9,
            class_name: "Class 4",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 0,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
          {
            class_id: 10,
            class_name: "class 5",
            daily_statistics: {
              students_paid_feeding: 0,
              students_paid_transport: 0,
              total_feeding_received: 0,
              total_transport_received: 0,
            },
            expected_statistics: {
              total_students: 0,
              students_with_feeding: 0,
              students_with_transport: 0,
              total_feeding_expected: 0,
              total_transport_expected: 0,
            },
            weekly_statistics: {
              total_feeding_received: 0,
              total_transport_received: 0,
            },
          },
        ],
      };
    } else {
      // Default mock data (for other dates)
      mockData = {
        date: date,
        school_statistics: {
          daily_statistics: {
            students_paid_feeding: 0,
            students_paid_transport: 0,
            total_feeding_received: 0,
            total_transport_received: 0,
          },
          expected_statistics: {
            total_students: 0,
            students_with_feeding: 0,
            students_with_transport: 0,
            total_feeding_expected: 0,
            total_transport_expected: 0,
          },
          weekly_statistics: {
            total_feeding_received: 0,
            total_transport_received: 0,
          },
        },
        class_statistics: [], // Empty array for other dates
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
