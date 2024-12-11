import { NextResponse } from "next/server";

// GET /api/statistics/overallattendanceandacademicsdata
export async function GET(req) {
  try {
    // Generate mock school data
    const mockData = generateMockSchoolData();

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock school data
function generateMockSchoolData() {
  const studentCount = {
    total_students: "20",
    male_count: "12",
    female_count: "8",
  };

  const attendance = {
    overall: {
      average_attendance_rate: "85.50",
      average_daily_present: "17.1",
      average_daily_absent: "2.5",
      average_daily_late: "0.4",
      total_present: "171",
      total_absent: "25",
      total_late: "4",
      total_attendance_records: "200",
    },
    trend: [], // You can add mock trend data if needed
    byClass: [
      {
        class_name: "Class 1A",
        attendance_rate: "90.00",
        total_students: "5",
      },
      {
        class_name: "Class 2B",
        attendance_rate: "82.50",
        total_students: "7",
      },
      {
        class_name: "Class 3C",
        attendance_rate: "88.75",
        total_students: "8",
      },
    ],
  };

  const academic = {
    overall: {
      school_average_score: "78.55",
      lowest_average_score: "60.20",
      highest_average_score: "95.50",
      median_score: "78.90",
    },
    bySubject: [
      {
        subject_name: "Mathematics",
        average_score: "88.50",
        lowest_score: "70.00",
        highest_score: "98.00",
      },
      {
        subject_name: "English",
        average_score: "82.00",
        lowest_score: "65.00",
        highest_score: "92.00",
      },
      {
        subject_name: "Science",
        average_score: "75.50",
        lowest_score: "60.00",
        highest_score: "88.00",
      },
      {
        subject_name: "Social Studies",
        average_score: "72.80",
        lowest_score: "58.00",
        highest_score: "85.00",
      },
    ],
    byClass: [
      {
        class_name: "Class 1A",
        average_score: "85.20",
        lowest_score: "75.00",
        highest_score: "95.50",
      },
      {
        class_name: "Class 2B",
        average_score: "78.50",
        lowest_score: "68.00",
        highest_score: "88.00",
      },
      {
        class_name: "Class 3C",
        average_score: "72.10",
        lowest_score: "60.20",
        highest_score: "82.00",
      },
    ],
    gradeDistribution: [
      {
        grade_name: "A",
        count: "8",
        percentage: "40.00",
      },
      {
        grade_name: "B",
        count: "6",
        percentage: "30.00",
      },
      {
        grade_name: "C",
        count: "4",
        percentage: "20.00",
      },
      {
        grade_name: "D",
        count: "2",
        percentage: "10.00",
      },
    ],
  };

  return {
    studentCount: studentCount,
    attendance: attendance,
    academic: academic,
  };
}

export const dynamic = "force-dynamic";
