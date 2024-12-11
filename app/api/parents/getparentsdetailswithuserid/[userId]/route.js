import { NextResponse } from "next/server";

// /api/parents/getparentsdetailswithparentid/[parentId]
export async function GET(req, { params }) {
  try {
    const parentId = params.parentId;

    // Mock data to simulate database results
    const mockStudents = [
      {
        id: 1,
        name: "Nelson Dorkordi",
        class: "Class 2B",
        amount_owed: "400.00",
      },
      {
        id: 5,
        name: "Richmond Adasu",
        class: "Class 3",
        amount_owed: "350.00",
      },
    ];

    const mockChildrenPerformance = [
      {
        name: "Richmond Adasu",
        subjects: {
          "Social Studies": 80,
          Mathematics: 75,
          RME: 90,
          Fante: 65,
          Chemistry: 85,
          French: 70,
          Owop: 95,
          "Biology 1": 88,
          Ethics: 78,
        },
        average: 80.67,
      },
      {
        name: "Nelson Dorkordi",
        subjects: {
          "Social Studies": 70,
          Mathematics: 65,
          RME: 80,
          Fante: 55,
          Chemistry: 75,
          French: 60,
          Owop: 85,
          "Biology 1": 78,
          Ethics: 68,
        },
        average: 70.67,
      },
    ];

    const mockOverallAverage = "75.67";

    const mockAttendanceData = [
      {
        month: "Aug",
        attendance: { "Nelson Dorkordi": 95.0, "Richmond Adasu": 88.5 },
      },
      {
        month: "Sep",
        attendance: { "Nelson Dorkordi": 90.0, "Richmond Adasu": 92.3 },
      },
      {
        month: "Oct",
        attendance: { "Nelson Dorkordi": 85.5, "Richmond Adasu": 90.0 },
      },
      {
        month: "Nov",
        attendance: { "Nelson Dorkordi": 92.7, "Richmond Adasu": 87.6 },
      },
      {
        month: "Dec",
        attendance: { "Nelson Dorkordi": 96.2, "Richmond Adasu": 94.1 },
      },
    ];

    const mockOverallAttendanceRate = "91.2";

    const mockUpcomingEvents = [
      { date: "2024-03-15", event: "PTA Meeting" },
      { date: "2024-03-22", event: "Science Fair" },
      { date: "2024-04-05", event: "Inter-Class Debate" },
    ];

    // Filter mock data based on parentId (not necessary with this specific mock data,
    // but you would filter in a real scenario with data for multiple parents)
    const students = mockStudents; // In a real scenario, you'd filter based on parentId
    const childrenPerformance = mockChildrenPerformance;
    const overallAverage = mockOverallAverage;
    const attendanceData = mockAttendanceData;
    const overallAttendanceRate = mockOverallAttendanceRate;
    const totalFeesOwed = students.reduce(
      (sum, student) => sum + parseFloat(student.amount_owed),
      0
    );
    const upcomingEvents = mockUpcomingEvents;

    return NextResponse.json(
      {
        students,
        childrenPerformance,
        overallAverage,
        attendanceData,
        overallAttendanceRate,
        totalFeesOwed,
        upcomingEvents,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock data error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
