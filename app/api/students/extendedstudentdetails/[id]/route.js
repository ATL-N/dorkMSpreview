import { NextResponse } from "next/server";

// /api/students/extendedstudentdetails/[id]/route.js
export async function GET(req, { params }) {
  const { id } = params;
  try {
    // Generate mock extended student data based on ID
    const mockStudentData = generateMockExtendedStudentData(parseInt(id));

    return NextResponse.json(mockStudentData, { status: 200 });
  } catch (error) {
    console.error("Mock data generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock extended student data
function generateMockExtendedStudentData(id) {
  const mockStudentData = {
    student: {
      student_id: id,
      photo: `https://example.com/student${id}.jpg`,
      first_name: `FirstName${id}`,
      last_name: `LastName${id}`,
      other_names: `OtherNames${id}`,
      date_of_birth: "2005-04-15",
      gender: id % 2 === 0 ? "Male" : "Female",
      class_id: (id % 5) + 1, // Assuming 5 classes
      amountowed: `${100 * id}.00`,
      residential_address: `Address ${id}`,
      phone: `+1555${id}000`,
      email: `student${id}@example.com`,
      enrollment_date: "2023-09-01",
      national_id: `NID${id}`,
      birth_cert_id: `BCID${id}`,
      role: "student",
      user_id: id + 100,
      status: "active",
      class_promoted_to: (id % 5) + 2, // Assuming promotion logic
      class_name: `Class ${(id % 5) + 1}`,
      class_level: "Basic",
      capacity: 30,
      room_name: `Room ${(id % 5) + 1}`,
      staff_id: id + 5,
      created_at: "2023-09-01T08:00:00.000Z",
      updated_at: "2024-03-15T10:00:00.000Z",
    },
    healthRecord: {
      user_id: id + 100,
      medical_conditions: id % 4 === 0 ? "None" : "Mild Asthma",
      allergies: id % 5 === 0 ? "None" : "Peanuts",
      blood_group: id % 2 === 0 ? "O+" : "AB+",
      vaccination_status: "Up-to-date",
      last_physical_exam_date: "2023-12-15",
      created_at: "2023-09-01T08:00:00.000Z",
      updated_at: "2024-03-15T10:00:00.000Z",
      health_insurance_id: `HI${id}`,
      status: "active",
    },
    healthIncidents: [
      {
        incident_id: 1,
        user_id: id + 100,
        incident_date: "2024-01-10",
        description: "Minor injury during playtime",
        reported_by: "Teacher A",
        actions_taken: "First aid administered",
        status: "resolved",
      },
    ],
    attendanceData: {
      summary: {
        totalDays: 20,
        presentCount: 15,
        absentCount: 3,
        lateCount: 2,
        overallAttendance: 75,
      },
      records: [
        {
          attendance_id: 1,
          student_id: id,
          class_id: (id % 5) + 1,
          attendance_date: "2024-03-15",
          status: "present",
          semester_id: 1,
          staff_id: id + 5,
          semester_name: "First Term",
          class_name: `Class ${(id % 5) + 1}`,
        },
        {
          attendance_id: 2,
          student_id: id,
          class_id: (id % 5) + 1,
          attendance_date: "2024-03-14",
          status: "absent",
          semester_id: 1,
          staff_id: id + 5,
          semester_name: "First Term",
          class_name: `Class ${(id % 5) + 1}`,
        },
        {
          attendance_id: 3,
          student_id: id,
          class_id: (id % 5) + 1,
          attendance_date: "2024-03-13",
          status: "late",
          semester_id: 1,
          staff_id: id + 5,
          semester_name: "First Term",
          class_name: `Class ${(id % 5) + 1}`,
        },
        // ... more attendance records
      ],
    },
    academicReport: {
      semester: "First Term",
      courses: [
        {
          name: "Mathematics",
          grade: "A",
          class_score: "90.00",
          exams_score: "95.00",
          score: "92.00",
          teacher: "Teacher X",
          comments: "Excellent",
        },
        {
          name: "English",
          grade: "B+",
          class_score: "80.00",
          exams_score: "85.00",
          score: "82.00",
          teacher: "Teacher Y",
          comments: "Very Good",
        },
      ],
      teacherNote: "Good performance overall.",
      headTeacherNote: "Keep up the good work!",
    },
    transcript: {
      courses: [
        {
          year: "2023",
          semester: "First Term",
          name: "Mathematics",
          grade: "A",
          score: "92.00",
        },
        {
          year: "2023",
          semester: "Second Term",
          name: "English",
          grade: "B+",
          score: "82.00",
        },
      ],
    },
  };

  return mockStudentData;
}
