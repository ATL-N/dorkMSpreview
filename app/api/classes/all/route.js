import { NextResponse } from "next/server";

// /api/classes/all
export async function GET(req) {
  try {
    const dummyData = {
      overall_statistics: {
        total_classes: 6,
        total_students: 150,
        total_subjects: 20,
        overall_avg_score: 78.5,
      },
      classes: [
        {
          class_id: 1,
          class_name: "Class 1A",
          class_level: "Primary 1",
          capacity: 30,
          room_name: "Room A1",
          staff_id: 101,
          staff_name: "John Smith",
          student_count: 25,
          attendance_percentage: 92,
          unique_subjects: 5,
          avg_score: 82.3,
        },
        {
          class_id: 2,
          class_name: "Class 1B",
          class_level: "Primary 1",
          capacity: 28,
          room_name: "Room A2",
          staff_id: 102,
          staff_name: "Alice Johnson",
          student_count: 22,
          attendance_percentage: 88,
          unique_subjects: 5,
          avg_score: 75.6,
        },
        {
          class_id: 3,
          class_name: "Class 2A",
          class_level: "Primary 2",
          capacity: 32,
          room_name: "Room B1",
          staff_id: 103,
          staff_name: "Bob Williams",
          student_count: 28,
          attendance_percentage: 95,
          unique_subjects: 6,
          avg_score: 85.1,
        },
        {
          class_id: 4,
          class_name: "Class 2B",
          class_level: "Primary 2",
          capacity: 30,
          room_name: "Room B2",
          staff_id: 104,
          staff_name: "Eva Brown",
          student_count: 26,
          attendance_percentage: 89,
          unique_subjects: 6,
          avg_score: 79.8,
        },
        {
          class_id: 5,
          class_name: "Class 3A",
          class_level: "Primary 3",
          capacity: 35,
          room_name: "Room C1",
          staff_id: 105,
          staff_name: "Michael Davis",
          student_count: 32,
          attendance_percentage: 91,
          unique_subjects: 7,
          avg_score: 88.5,
        },
        {
          class_id: 6,
          class_name: "Class 3B",
          class_level: "Primary 3",
          capacity: 33,
          room_name: "Room C2",
          staff_id: 106,
          staff_name: "Sarah Wilson",
          student_count: 30,
          attendance_percentage: 85,
          unique_subjects: 7,
          avg_score: 76.2,
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
