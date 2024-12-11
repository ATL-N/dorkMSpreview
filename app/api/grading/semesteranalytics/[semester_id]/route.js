import { NextResponse } from "next/server";

// /api/grading/semesteranalytics/[semester_id]/route.js

export async function GET(req, { params }) {
  try {
    const { semester_id } = params;
    if (!semester_id) {
      return NextResponse.json(
        { error: "Semester ID is required" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockGradeAnalytics = {
      schoolAverage: 0,
      highestGrade: 0,
      lowestGrade: 0,
      gradeDistribution: [],
      subjectAverages: {},
      schoolPerformanceOverTime: [],
      topPerformingClasses: [],
      lowPerformingClasses: [],
      subjectPerformance: [],
      classesTableData: [],
      gradingScheme: [],
    };

    if (semester_id === "1") {
      // Populate mockGradeAnalytics with data for semester_id 1
      mockGradeAnalytics.schoolAverage = 66.5;
      mockGradeAnalytics.highestGrade = 93;
      mockGradeAnalytics.lowestGrade = 30;
      mockGradeAnalytics.gradeDistribution = [
        { grade: "A", count: "5" },
        { grade: "B", count: "3" },
      ];
      mockGradeAnalytics.subjectAverages = {
        "Biology 1": 43.3333333333333,
        Chemistry: 45.5,
        Fante: 71.3333333333333,
        French: 57,
        Mathematics: 89,
        RME: 93,
        "Social Studies": 77.5,
      };
      mockGradeAnalytics.schoolPerformanceOverTime = [
        { month: "Sep", averageGrade: "63.64" },
        { month: "Oct", averageGrade: "86.50" },
      ];
      mockGradeAnalytics.topPerformingClasses = [
        { id: 1, name: "Completed", level: "Pre School", averageGrade: 86.5 },
        {
          id: 2,
          name: "class 2b",
          level: "Pre School",
          averageGrade: 65.0833333333333,
        },
        { id: 4, name: "JHS 2", level: "JHS", averageGrade: 55 },
      ];
      mockGradeAnalytics.lowPerformingClasses = [
        { id: 4, name: "JHS 2", level: "JHS", averageGrade: 55 },
        {
          id: 2,
          name: "class 2b",
          level: "Pre School",
          averageGrade: 65.0833333333333,
        },
        { id: 1, name: "Completed", level: "Pre School", averageGrade: 86.5 },
      ];
      mockGradeAnalytics.subjectPerformance = [
        {
          subject: "Biology 1",
          schoolAverage: 43.3333333333333,
          topScore: 70,
          lowScore: 30,
        },
        {
          subject: "Chemistry",
          schoolAverage: 45.5,
          topScore: 50,
          lowScore: 41,
        },
        {
          subject: "Fante",
          schoolAverage: 71.3333333333333,
          topScore: 91,
          lowScore: 40,
        },
        {
          subject: "French",
          schoolAverage: 57,
          topScore: 60,
          lowScore: 54,
        },
        {
          subject: "Mathematics",
          schoolAverage: 89,
          topScore: 90,
          lowScore: 87,
        },
        {
          subject: "RME",
          schoolAverage: 93,
          topScore: 93,
          lowScore: 93,
        },
        {
          subject: "Social Studies",
          schoolAverage: 77.5,
          topScore: 80,
          lowScore: 75,
        },
      ];
      mockGradeAnalytics.classesTableData = [
        { id: 1, class_name: "Completed", class_average: "86.50" },
        { id: 4, class_name: "JHS 2", class_average: "55.00" },
        { id: 2, class_name: "class 2b", class_average: "65.08" },
      ];
      mockGradeAnalytics.gradingScheme = [
        { id: 1, grade: "A", maxMark: 100, minMark: 90, remark: "EXCELLENT" },
        { id: 2, grade: "B", maxMark: 80, minMark: 70, remark: "GOOD" },
      ];
    } else {
      // Handle other semester IDs (e.g., return mock data for a different semester, return an empty object, or a 404 error).
      return NextResponse.json(
        { error: "No data found for this semester" },
        { status: 404 }
      );
    }

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
