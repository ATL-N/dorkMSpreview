import { NextResponse } from "next/server";

// /api/attendance/getattendancesheet/[class_id]/[semester_id]

export async function GET(req, { params }) {
  try {
    // Generate dummy data
    const dummyData = {
      classStatistics: {
        totalStudents: 15,
        totalDays: 15,
        totalPresent: 155,
        totalAbsent: 35,
        totalLate: 25,
        averageAttendanceRate: 75, // Adjust based on totalPresent, totalAbsent, totalLate
      },
      attendanceData: [
        {
          student_id: 1,
          name: "Alice Smith",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Late" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Late" },
            { date: "2024-10-24", status: "Present" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 2,
          name: "Bob Johnson",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Absent" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Late" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Absent" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Late" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Present" },
            { date: "2024-10-26", status: "Absent" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 3,
          name: "Charlie Brown",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Absent" },
            { date: "2024-09-14", status: "Late" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Absent" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 4,
          name: "Diana Lee",
          attendance: [
            { date: "2024-09-08", status: "Late" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Absent" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Absent" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Late" },
            { date: "2024-10-24", status: "Present" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 5,
          name: "Ethan Kim",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Absent" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Late" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 6,
          name: "Fiona Chen",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Late" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Absent" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 7,
          name: "George Davis",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Late" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Absent" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 8,
          name: "Hannah Wilson",
          attendance: [
            { date: "2024-09-08", status: "Late" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Absent" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Absent" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Late" },
            { date: "2024-10-24", status: "Present" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 9,
          name: "Ian Rodriguez",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Absent" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Late" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 10,
          name: "Julia Martinez",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Late" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Absent" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 11,
          name: "Kevin Taylor",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Late" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Absent" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 12,
          name: "Linda Thomas",
          attendance: [
            { date: "2024-09-08", status: "Late" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Absent" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Absent" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Late" },
            { date: "2024-10-24", status: "Present" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 13,
          name: "Michael Jackson",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Absent" },
            { date: "2024-09-11", status: "Present" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Late" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Absent" },
          ],
        },
        {
          student_id: 14,
          name: "Nancy Anderson",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Present" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Late" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Absent" },
            { date: "2024-10-17", status: "Present" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Absent" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
        {
          student_id: 15,
          name: "Oliver White",
          attendance: [
            { date: "2024-09-08", status: "Present" },
            { date: "2024-09-10", status: "Present" },
            { date: "2024-09-11", status: "Absent" },
            { date: "2024-09-13", status: "Present" },
            { date: "2024-09-14", status: "Late" },
            { date: "2024-09-20", status: "Present" },
            { date: "2024-10-10", status: "Present" },
            { date: "2024-10-12", status: "Present" },
            { date: "2024-10-15", status: "Present" },
            { date: "2024-10-17", status: "Absent" },
            { date: "2024-10-19", status: "Present" },
            { date: "2024-10-22", status: "Present" },
            { date: "2024-10-24", status: "Late" },
            { date: "2024-10-26", status: "Present" },
            { date: "2024-10-29", status: "Present" },
          ],
        },
      ],
      semesterDates: {
        start_date: "2024-08-01T00:00:00.000Z",
        end_date: "2024-12-15T00:00:00.000Z",
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
