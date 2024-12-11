import { NextResponse } from "next/server";

// /api/statistics/academicperformancedata
export async function GET(req) {
  try {
    // Generate mock academic performance data
    const mockData = generateMockAcademicPerformanceData();

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock academic performance data
function generateMockAcademicPerformanceData() {
  const subjects = [
    "Mathematics",
    "English",
    "Science",
    "Social Studies",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "French",
    "Art",
    "Music",
  ];

  const mockData = subjects.map((subject) => ({
    subject: subject,
    averageScore: parseFloat((Math.random() * 60 + 40).toFixed(2)), // Generates a random average score between 40 and 100
  }));

  return mockData;
}

export const dynamic = "force-dynamic";
