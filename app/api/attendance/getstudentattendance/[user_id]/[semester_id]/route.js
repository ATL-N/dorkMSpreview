import { NextResponse } from "next/server";

// /api/attendance/getstudentattendance/[user_id]/[semester_id]
export async function GET(req, { params }) {
  try {
    const dummyData = {
      studentInfo: {
        student_id: 1,
        first_name: "Nelson",
        last_name: "Dorkordi",
        date_of_birth: "2003-02-23T00:00:00.000Z",
        gender: "Male",
        enrollment_date: "2024-08-21T00:00:00.000Z",
        class_name: "Class 2B",
        class_id: 2,
      },
      gradeData: [
        { subject: "Mathematics", grade: 92 },
        { subject: "Science", grade: 85 },
        { subject: "English", grade: 78 },
        { subject: "History", grade: 88 },
        { subject: "Geography", grade: 75 },
        { subject: "Art", grade: 95 },
        { subject: "Music", grade: 80 },
      ],
      attendanceData: {
        overallRate: 88.5,
        monthlyData: [
          { month: "Aug", attendance: 95 },
          { month: "Sep", attendance: 92 },
          { month: "Oct", attendance: 85 },
          { month: "Nov", attendance: 90 },
        ],
      },
      averagePerformance: 86.14,
      scheduleData: {
        weeklySchedule: [
          {
            day: "Monday",
            startTime: "08:00",
            endTime: "09:00",
            subject: "Mathematics",
            teacher: "Mr. Smith",
          },
          {
            day: "Tuesday",
            startTime: "09:00",
            endTime: "10:00",
            subject: "Science",
            teacher: "Ms. Johnson",
          },
          {
            day: "Wednesday",
            startTime: "10:00",
            endTime: "11:00",
            subject: "English",
            teacher: "Mr. Brown",
          },
          {
            day: "Thursday",
            startTime: "11:00",
            endTime: "12:00",
            subject: "History",
            teacher: "Mrs. Davis",
          },
          {
            day: "Friday",
            startTime: "12:00",
            endTime: "13:00",
            subject: "Geography",
            teacher: "Mr. Wilson",
          },
        ],
        totalWeeklyHours: 15, // Example: 5 days a week, 3 hours/day
      },
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
