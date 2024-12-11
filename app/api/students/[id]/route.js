import { NextResponse } from "next/server";

// GET /api/students/[id]
export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Generate mock student data based on ID
    const mockStudentData = generateMockStudentData(parseInt(id));

    return NextResponse.json(mockStudentData, { status: 200 });
  } catch (error) {
    console.error("Mock data generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock student data
function generateMockStudentData(id) {
  return {
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
    user_name: `user${id}`,
    user_email: `user${id}@example.com`,
    transportation_method: id % 3 === 0 ? "Bus" : null,
    pick_up_point: id % 3 === 0 ? `Point ${id}` : null,
    feeding_fee: id % 2 === 0 ? "50.00" : null,
    transport_fee: id % 3 === 0 ? "75.00" : null,
    medical_conditions: id % 4 === 0 ? "None" : "Mild Asthma",
    allergies: id % 5 === 0 ? "None" : "Peanuts",
    blood_group: id % 2 === 0 ? "O+" : "AB+",
    vaccination_status: "Up-to-date",
    last_physical_exam_date: "2023-12-15",
    created_at: "2023-09-01T08:00:00.000Z",
    updated_at: "2024-03-15T10:00:00.000Z",
    health_insurance_id: `HI${id}`,
    parent1: {
      parent_id: id * 2,
      other_names: `Parent1FirstName${id}`,
      last_name: `Parent1LastName${id}`,
      phone: `+1555${id * 2}000`,
      email: `parent1_${id}@example.com`,
      address: `Parent1 Address ${id}`,
      status: "active",
      user_id: id * 2 + 100,
      relationship: "Mother",
    },
    parent2: {
      parent_id: id * 2 + 1,
      other_names: `Parent2FirstName${id}`,
      last_name: `Parent2LastName${id}`,
      phone: `+1555${id * 2 + 1}000`,
      email: `parent2_${id}@example.com`,
      address: `Parent2 Address ${id}`,
      status: "active",
      user_id: id * 2 + 101,
      relationship: "Father",
    },
  };
}

// PUT /api/students/[id] - You can add a mock PUT handler if needed,
// but it's often more complex to simulate updates realistically.
// Consider just returning a success message for testing.
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  console.log("Mock PUT request received for student ID:", id);
  console.log("Request body:", body);

  try {
    // Simulate a successful update
    return NextResponse.json(
      {
        message: `Mock update successful for student ID: ${id}`,
        updatedData: body, // You can optionally return the received body as updated data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock update error:", error);
    return NextResponse.json({ error: "Mock Update Failed" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
