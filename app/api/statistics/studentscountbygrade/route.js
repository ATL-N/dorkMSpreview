import { NextResponse } from "next/server";

// /api/statistics/studentscountbygrade
export async function GET(req) {
  try {
    // Generate mock data for student count by grade
    const mockData = generateMockStudentCountByGrade();

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock data for student count by grade
function generateMockStudentCountByGrade() {
  const classNames = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "JHS 1",
    "JHS 2",
    "JHS 3",
    "Nursery 1A",
    "Kindergarten",
    "Completed",
  ];

  const gradeDistribution = classNames.map((className) => ({
    class_name: className,
    students: Math.floor(Math.random() * 5), // Random number of students between 0 and 4
  }));

  const totalStudents = gradeDistribution.reduce(
    (sum, classData) => sum + classData.students,
    0
  );
  const totalStaff = Math.floor(Math.random() * 5) + 5; // Random number of staff between 5 and 9
  const totalParents = Math.floor(Math.random() * 10) + 10; // Random number of parents between 10 and 19
  const totalUsers = totalStudents + totalStaff + totalParents;

  return {
    gradeDistribution: gradeDistribution,
    totalStudents: totalStudents,
    totalStaff: totalStaff,
    totalParents: totalParents,
    totalUsers: totalUsers,
  };
}

export const dynamic = "force-dynamic";
