import { NextResponse } from "next/server";

// /api/students/getstudents
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    let mockStudentsData;

    if (query) {
      // Search functionality (filter the mock data based on the query)
      mockStudentsData = generateMockStudentsData().filter((student) => {
        const searchableFields = [
          student.first_name,
          student.last_name,
          student.other_names,
          student.phone,
          student.class,
        ];
        return searchableFields.some(
          (field) => field && field.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      // Complete student list
      mockStudentsData = generateMockStudentsData();
    }

    return NextResponse.json(mockStudentsData, { status: 200 });
  } catch (error) {
    console.error("Mock data generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock student data
function generateMockStudentsData() {
  const mockData = [];
  for (let i = 1; i <= 5; i++) {
    mockData.push({
      student_id: i,
      photo: `https://example.com/student${i}.jpg`,
      first_name: `FirstName${i}`,
      last_name: `LastName${i}`,
      other_names: i % 2 === 0 ? `OtherName${i}` : "",
      date_of_birth: `0${i}/0${i}/200${i}`,
      gender: i % 2 === 0 ? "Female" : "Male",
      class_id: (i % 3) + 1, // Example: 3 classes
      amountowed: `${100 * i}.00`,
      residential_address: `Address ${i}`,
      phone: `0555${i}000`,
      email: `student${i}@example.com`,
      enrollment_date: "2023-09-01T00:00:00.000Z",
      national_id: `NID${i}`,
      birth_cert_id: `BCID${i}`,
      role: "student",
      user_id: i + 100,
      status: "active",
      class_promoted_to: (i % 3) + 2, // Example: promotion logic
      id: i,
      name: `FirstName${i} LastName${i}`,
      class: `Class ${(i % 3) + 1}`,
      grade: `Class ${(i % 3) + 1}`,
      count: `${(i % 2) + 1}`, // Example: 1 or 2 students per class
      transportation_method: i % 3 === 0 ? "Bus" : null,
      pick_up_point: i % 3 === 0 ? `Point ${i}` : null,
      feeding_fee: i % 2 === 0 ? "50.00" : null,
      transport_fee: i % 3 === 0 ? "75.00" : null,
      medical_conditions: i % 4 === 0 ? "None" : "Mild Asthma",
      allergies: i % 5 === 0 ? "None" : "Peanuts",
      blood_group: i % 2 === 0 ? "O+" : "AB+",
      vaccination_status: "Up-to-date",
      health_insurance_id: `HI${i}`,
    });
  }
  return mockData;
}

export const dynamic = "force-dynamic";
