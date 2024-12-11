import { NextResponse } from "next/server";

// /api/attendance/getattendanceanalytics/[class_id]/[semester_id]
export async function GET(req, { params }) {
  try {
    // Generate more extensive dummy data
    const dummyData = {
      averageAttendanceRate: 88,
      totalClasses: 20,
      totalStudents: 30,
      presentCount: 450,
      absentCount: 50,
      lateCount: 20,
      dailyAttendance: [
        {
          date: "2024-08-26",
          attendanceRate: 95,
          presentCount: 28,
          absentCount: 1,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-08-27",
          attendanceRate: 90,
          presentCount: 27,
          absentCount: 3,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-08-28",
          attendanceRate: 85,
          presentCount: 25,
          absentCount: 4,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-08-29",
          attendanceRate: 93,
          presentCount: 27,
          absentCount: 1,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-08-30",
          attendanceRate: 100,
          presentCount: 30,
          absentCount: 0,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-09-02",
          attendanceRate: 97,
          presentCount: 29,
          absentCount: 0,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-09-03",
          attendanceRate: 88,
          presentCount: 26,
          absentCount: 3,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-09-04",
          attendanceRate: 85,
          presentCount: 25,
          absentCount: 3,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-05",
          attendanceRate: 92,
          presentCount: 27,
          absentCount: 1,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-06",
          attendanceRate: 90,
          presentCount: 26,
          absentCount: 2,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-09",
          attendanceRate: 93,
          presentCount: 28,
          absentCount: 2,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-09-10",
          attendanceRate: 80,
          presentCount: 24,
          absentCount: 6,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-09-11",
          attendanceRate: 75,
          presentCount: 22,
          absentCount: 6,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-12",
          attendanceRate: 88,
          presentCount: 26,
          absentCount: 2,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-13",
          attendanceRate: 95,
          presentCount: 28,
          absentCount: 1,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-09-16",
          attendanceRate: 90,
          presentCount: 27,
          absentCount: 3,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-09-17",
          attendanceRate: 85,
          presentCount: 25,
          absentCount: 4,
          lateCount: 1,
          totalStudents: 30,
        },
        {
          date: "2024-09-18",
          attendanceRate: 93,
          presentCount: 27,
          absentCount: 1,
          lateCount: 2,
          totalStudents: 30,
        },
        {
          date: "2024-09-19",
          attendanceRate: 100,
          presentCount: 30,
          absentCount: 0,
          lateCount: 0,
          totalStudents: 30,
        },
        {
          date: "2024-09-20",
          attendanceRate: 97,
          presentCount: 29,
          absentCount: 0,
          lateCount: 1,
          totalStudents: 30,
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
