import { NextResponse } from "next/server";

// /api/staff/userstaffdetails/[id]
export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Generate mock data based on the user ID
    const mockStaffData = generateMockStaffData(parseInt(id));

    return NextResponse.json(mockStaffData, { status: 200 });
  } catch (error) {
    console.error("Mock data generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock staff data
function generateMockStaffData(userId) {
  const staffId = userId + 5; // Example logic to make staff ID related to user ID

  const mockStaffData = {
    staff_id: staffId,
    user_id: userId,
    first_name: `John ${userId}`,
    last_name: `Doe ${staffId}`,
    middle_name: "Middle",
    date_of_birth: "1990-05-15",
    gender: userId % 2 === 0 ? "M" : "F",
    marital_status: "Single",
    address: "123 Main St",
    phone_number: "+15551234567",
    email: `john.doe${userId}@example.com`,
    emergency_contact: "+15557654321",
    date_of_joining: "2022-01-10",
    designation: "Teacher",
    department: "Science",
    salary: "60000.00",
    account_number: "1234567890",
    contract_type: "Full-time",
    employment_status: "Active",
    qualification: "Master's Degree",
    experience: "5 years",
    blood_group: "O+",
    national_id: "123456789",
    passport_number: "AB1234567",
    photo: null,
    teaching_subject: "Physics",
    class_teacher: null,
    subject_in_charge: null,
    house_in_charge: null,
    bus_in_charge: null,
    library_in_charge: null,
    status: "active",
    role: "teaching staff",
    user_email: `john.doe${userId}@example.com`,
    medical_conditions: null,
    allergies: null,
    vaccination_status: null,
    last_physical_exam_date: null,
    evaluations: [
      {
        status: "active",
        comments: "Excellent performance",
        evaluator_id: 1,
        evaluation_id: 1,
        overall_rating: 5,
        evaluation_date: "2023-12-01",
        professionalism: 5,
        student_engagement: 5,
        years_of_experience: 5,
        classroom_management: 5,
        teaching_effectiveness: 5,
      },
      {
        status: "active",
        comments: "Good performance, needs improvement in classroom management",
        evaluator_id: 2,
        evaluation_id: 2,
        overall_rating: 4,
        evaluation_date: "2024-03-15",
        professionalism: 4,
        student_engagement: 4,
        years_of_experience: 5,
        classroom_management: 3,
        teaching_effectiveness: 4,
      },
    ],
    schedule: [
      {
        day: "Monday",
        room: "101",
        class: "Class 10A",
        endTime: "10:00",
        subject: "Physics",
        startTime: "09:00",
      },
      {
        day: "Tuesday",
        room: "102",
        class: "Class 9B",
        endTime: "11:30",
        subject: "Physics",
        startTime: "10:30",
      },
      {
        day: "Wednesday",
        room: "101",
        class: "Class 10A",
        endTime: "10:00",
        subject: "Physics",
        startTime: "09:00",
      },
      {
        day: "Thursday",
        room: "103",
        class: "Class 8C",
        endTime: "14:00",
        subject: "Science",
        startTime: "13:00",
      },
      {
        day: "Friday",
        room: "102",
        class: "Class 9B",
        endTime: "11:30",
        subject: "Physics",
        startTime: "10:30",
      },
    ],
  };

  return mockStaffData;
}

export const dynamic = "force-dynamic";
