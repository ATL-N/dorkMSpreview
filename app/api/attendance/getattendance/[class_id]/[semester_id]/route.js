import { NextResponse } from "next/server";

// /api/attendance/getattendance/1/1

export async function GET(req, { params }) {
  try {
    // Generate dummy data
    const dummyData = {
      attendanceData: [
        { status: "present", count: 15 },
        { status: "absent", count: 2 },
        { status: "late", count: 1 },
      ],
      attendancePercentage: 85,
      performanceData: [
        { subject: "Mathematics", averageScore: 92 },
        { subject: "English", averageScore: 85 },
        { subject: "Science", averageScore: 78 },
        { subject: "History", averageScore: 70 },
        { subject: "Geography", averageScore: 88 },
      ],
      averagePerformance: 82.6,
      className: "10A",
      totalStudents: 25,
      totalSubjects: 8,
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
