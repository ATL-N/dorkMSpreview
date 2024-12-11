import { NextResponse } from "next/server";

// /api/grading/getreportcardbyclassandsem/[class_id]/[semester_id]
export async function GET(req, { params }) {
  try {
    const { class_id, semester_id } = params;

    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Class ID and Semester ID are required" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockReportCardData = {
      students: [],
      totalStudents: 0,
      totalSemesterAttendance: 0,
      className: "",
    };

    if (class_id === "1" && semester_id === "1") {
      mockReportCardData.students = [
        {
          id: 1,
          name: "nelson1 Dorkordi",
          email: "atlcoccus@gmail.comme",
          historicalClassName: "Completed",
          currentClassName: "class 2b",
          promotedToClass: "class 2b",
          average: 66.14,
          total: 463,
          overallPosition: 1,
          grades: {
            "Biology 1": {
              class_score: "-",
              exams_score: "20.00",
              grade: "30.00",
              remark: "EXCELLENT",
              position: "1",
            },
            Chemistry: {
              class_score: "-",
              exams_score: "41.00",
              grade: "41.00",
              remark: "-",
              position: "2",
            },
            Fante: {
              class_score: "40.00",
              exams_score: "43.00",
              grade: "83.00",
              remark: "-",
              position: "2",
            },
            French: {
              class_score: "47.00",
              exams_score: "7.00",
              grade: "54.00",
              remark: "-",
              position: "2",
            },
            Mathematics: {
              class_score: "45.00",
              exams_score: "45.00",
              grade: "90.00",
              remark: "EXCELLENT",
              position: "1",
            },
            "Social Studies": {
              class_score: "40.00",
              exams_score: "35.00",
              grade: "75.00",
              remark: "GOOD",
              position: "1",
            },
          },
          remarks: {
            classTeacherRemark: "student details  \nclass teachers remark2",
            headTeacherRemark: "head teachers remark",
          },
          attendance: {
            studentAttendance: 5,
            totalSemesterAttendance: 8,
          },
        },
        {
          id: 2,
          name: "John Nyarkoh",
          email: "atlcoccus@gmail23.com",
          historicalClassName: "Completed",
          currentClassName: "class 2b",
          promotedToClass: "class 2b",
          average: 63.6,
          total: 318,
          overallPosition: 2,
          grades: {
            "Biology 1": {
              class_score: "-",
              exams_score: "30.00",
              grade: "30.00",
              remark: "-",
              position: "1",
            },
            Chemistry: {
              class_score: "-",
              exams_score: "50.00",
              grade: "50.00",
              remark: "-",
              position: "1",
            },
            Fante: {
              class_score: "47.00",
              exams_score: "44.00",
              grade: "91.00",
              remark: "EXCELLENT",
              position: "1",
            },
            French: {
              class_score: "25.00",
              exams_score: "35.00",
              grade: "60.00",
              remark: "-",
              position: "1",
            },
            Mathematics: {
              class_score: "-",
              exams_score: "-",
              grade: "-",
              remark: "-",
              position: "-",
            },
            "Social Studies": {
              class_score: "-",
              exams_score: "-",
              grade: "-",
              remark: "-",
              position: "-",
            },
          },
          remarks: {
            classTeacherRemark: null,
            headTeacherRemark: "this is the headteachers remarks for nyarko",
          },
          attendance: {
            studentAttendance: 6,
            totalSemesterAttendance: 8,
          },
        },
      ];
      mockReportCardData.totalStudents = 2;
      mockReportCardData.totalSemesterAttendance = 8;
      mockReportCardData.className = "Completed";
    } else {
      // Handle other class/semester combinations (e.g., return 404 or other data)
      return NextResponse.json(
        { error: "No data found for this class and semester" },
        { status: 404 }
      );
    }

    return NextResponse.json(mockReportCardData, { status: 200 });
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
