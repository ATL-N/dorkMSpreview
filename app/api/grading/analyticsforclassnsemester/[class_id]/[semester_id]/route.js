import { NextResponse } from "next/server";

// /api/grading/analyticsforclassnsemester/[class_id]/[semester_id]
export async function GET(req, { params }) {
  try {
    const { class_id, semester_id } = params;
    if (!semester_id || !class_id) {
      return NextResponse.json(
        { error: "Semester ID and Class ID are required" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockGradeAnalytics = {
      className: "",
      classLevel: "",
      classAverage: 0,
      highestGrade: 0,
      lowestGrade: 0,
      gradeDistribution: [],
      subjectAverages: {},
      studentPerformanceOverTime: [],
      topPerformers: [],
      lowPerformers: [],
      subjectPerformance: [],
    };

    // if (class_id === "2" && semester_id === "1") {
      // Populate mock data for class_id 2 and semester_id 1
      // ... (paste your data here)
      mockGradeAnalytics.className = "Completed";
      mockGradeAnalytics.classLevel = "Pre School";
      mockGradeAnalytics.classAverage = 65.0833333333333;
      mockGradeAnalytics.highestGrade = 91;
      mockGradeAnalytics.lowestGrade = 30;
      mockGradeAnalytics.gradeDistribution = [
        {
          grade: "A",
          count: 4,
          percentage: 80,
        },
        {
          grade: "B",
          count: 1,
          percentage: 20,
        },
      ];
      mockGradeAnalytics.subjectAverages = {
        "Biology 1": 30,
        Chemistry: 45.5,
        Fante: 87,
        French: 57,
        Mathematics: 89,
        "Social Studies": 75,
      };
      mockGradeAnalytics.studentPerformanceOverTime = [
        {
          month: "Sep",
          averageGrade: 65.0833333333333,
        },
      ];
      mockGradeAnalytics.topPerformers = [
        {
          id: 1,
          name: "nelson1 Dorkordi",
          averageGrade: 66.1428571428571,
        },
        {
          id: 2,
          name: "John Nyarkoh",
          averageGrade: 63.6,
        },
      ];
      mockGradeAnalytics.lowPerformers = [
        {
          id: 2,
          name: "John Nyarkoh",
          averageGrade: 63.6,
        },
        {
          id: 1,
          name: "nelson1 Dorkordi",
          averageGrade: 66.1428571428571,
        },
      ];
      mockGradeAnalytics.subjectPerformance = [
        {
          subject: "Biology 1",
          classAverage: 30,
          topStudentScore: 30,
          lowStudentScore: 30,
        },
        {
          subject: "Chemistry",
          classAverage: 45.5,
          topStudentScore: 50,
          lowStudentScore: 41,
        },
        {
          subject: "Fante",
          classAverage: 87,
          topStudentScore: 91,
          lowStudentScore: 83,
        },
        {
          subject: "French",
          classAverage: 57,
          topStudentScore: 60,
          lowStudentScore: 54,
        },
        {
          subject: "Mathematics",
          classAverage: 89,
          topStudentScore: 90,
          lowStudentScore: 87,
        },
        {
          subject: "Social Studies",
          classAverage: 75,
          topStudentScore: 75,
          lowStudentScore: 75,
        },
      ];
    // } else if (class_id === "1" && semester_id === "2") {
      // Populate mock data for class_id 1 and semester_id 2
      // ... (add your data here if needed)
    // } else {
    //   // Handle other combinations or return a 404
    //   return NextResponse.json(
    //     { error: "No data found for this class and semester" },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json(
      { gradeAnalytics: mockGradeAnalytics },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
