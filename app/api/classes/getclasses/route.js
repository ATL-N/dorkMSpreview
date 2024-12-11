import { NextResponse } from "next/server";

// /api/classes/getclasses
export async function GET(req) {
  try {
    const dummyData = {
      overall_statistics: {
        total_classes: 6,
        total_students: 120,
        total_subjects: 18,
        overall_avg_score: 75.2,
      },
      classes: [
        {
          class_id: 1,
          class_name: "Completed", // Matches attendance data
          class_level: "Pre School",
          capacity: 50,
          room_name: "Room A",
          staff_id: 101,
          staff_name: "John Smith",
          student_count: 20,
          attendance_percentage: 85,
          unique_subjects: 6,
          avg_score: 78.6,
        },
        {
          class_id: 2,
          class_name: "Class 1A", // Matches attendance data
          class_level: "Pre School",
          capacity: 60,
          room_name: "Room B",
          staff_id: 102,
          staff_name: "Alice Johnson",
          student_count: 20,
          attendance_percentage: 92,
          unique_subjects: 5,
          avg_score: 82.4,
        },
        {
          class_id: 3,
          class_name: "Class 1B", // Matches attendance data
          class_level: "Pre School",
          capacity: 60,
          room_name: "Room c",
          staff_id: 102,
          staff_name: "Alice Johnson",
          student_count: 20,
          attendance_percentage: 92,
          unique_subjects: 5,
          avg_score: 82.4,
        },

        {
          class_id: 4,
          class_name: "Class 2A", // Matches attendance data
          class_level: "JHS",
          capacity: 40,
          room_name: "Room D",
          staff_id: 103,
          staff_name: "Bob Williams",
          student_count: 20,
          attendance_percentage: 78,
          unique_subjects: 4,
          avg_score: 72.9,
        },
        {
          class_id: 5,
          class_name: "Class 2B", // Matches attendance data
          class_level: "Pre School",
          capacity: 33,
          room_name: "Room E",
          staff_id: 104,
          staff_name: "Eva Brown",
          student_count: 20,
          attendance_percentage: 88,
          unique_subjects: 3,
          avg_score: 68.5,
        },
        {
          class_id: 6,
          class_name: "Class 3A", // Matches attendance data
          class_level: "Pre School",
          capacity: 40,
          room_name: "Room F",
          staff_id: 105,
          staff_name: "Michael Davis",
          student_count: 20,
          attendance_percentage: 91,
          unique_subjects: 4,
          avg_score: 81.2,
        },
        {
          class_id: 7,
          class_name: "Class 3B", // Matches attendance data
          class_level: "Pre School",
          capacity: 40,
          room_name: "Room F",
          staff_id: 105,
          staff_name: "Michael Davis",
          student_count: 20,
          attendance_percentage: 91,
          unique_subjects: 4,
          avg_score: 81.2,
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
export const dynamic = "force-dynamic";
