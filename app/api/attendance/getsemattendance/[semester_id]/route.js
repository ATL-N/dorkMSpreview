import { NextResponse } from "next/server";

// /api/attendance/getsemattendance/1

export async function GET(req, { params }) {
  try {
    const dummyData = {
      totalActiveStudents: 150,
      totalPresentToday: 120,
      totalAbsentToday: 30,
      averageAttendanceForSemester: 85.5,
      attendanceData: [
        {
          id: 1,
          class: "Class 1A",
          class_count: 25,
          present: 22,
          absent: 3,
          attendanceRate: 88,
        },
        {
          id: 2,
          class: "Class 1B",
          class_count: 24,
          present: 20,
          absent: 4,
          attendanceRate: 83.33,
        },
        {
          id: 3,
          class: "Class 2A",
          class_count: 28,
          present: 25,
          absent: 3,
          attendanceRate: 89.29,
        },
        {
          id: 4,
          class: "Class 2B",
          class_count: 22,
          present: 18,
          absent: 4,
          attendanceRate: 81.82,
        },
        {
          id: 5,
          class: "Class 3A",
          class_count: 26,
          present: 23,
          absent: 3,
          attendanceRate: 88.46,
        },
        {
          id: 6,
          class: "Class 3B",
          class_count: 25,
          present: 22,
          absent: 3,
          attendanceRate: 88,
        },
      ],
    };

    return NextResponse.json(dummyData, { status: 200 });
  } catch (error) {
    console.error("Error generating dummy data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
