import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// /api/students/addstudent
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    // Generate a unique ID for the student (you might want to use a better ID generation strategy in a real app)
    const student_id = Math.floor(Math.random() * 10000) + 1; // Example: random number between 1 and 10000
    const student_user_id = Math.floor(Math.random() * 10000) + 10001; // Example: another random number for user_id

    // Simulate creating a user (simplified for the mock)
    const createUser = (username, email, phone, role) => {
      console.log(
        `Simulating user creation: ${username}, ${email}, ${phone}, ${role}`
      );
      return student_user_id;
    };

    // Simulate creating a parent (simplified for the mock)
    const createParent = (other_names, last_name, phone, email, address) => {
      const parent_id = Math.floor(Math.random() * 1000) + 1; // Example: random parent ID
      console.log(
        `Simulating parent creation: ${other_names} ${last_name}, ${parent_id}`
      );
      return parent_id;
    };

    // Simulate inserting student into users table
    const studentUsername =
      `${body.first_name} ${body.last_name} ${body.other_names}`.toLowerCase();
    const created_student_user_id = createUser(
      studentUsername,
      body.email,
      body.phone,
      "student"
    );

    // Simulate inserting into students table
    console.log(
      `Simulating student insertion: ${student_id}, ${created_student_user_id}`
    );

    // Simulate inserting into user_health_record table
    console.log(
      `Simulating health record insertion for user: ${created_student_user_id}`
    );

    // Simulate inserting into feeding_transport_fees table
    console.log(
      `Simulating feeding/transport insertion for student: ${student_id}`
    );

    // Simulate handling parent1
    let parent1_id = body.parent1_selection;
    if (!parent1_id) {
      parent1_id = createParent(
        body.parent1_other_names,
        body.parent1_last_name,
        body.parent1_phone,
        body.parent1_email,
        body.parent1_address
      );
    }

    // Simulate handling parent2
    let parent2_id = body.parent2_selection;
    if (!parent2_id) {
      parent2_id = createParent(
        body.parent2_other_names,
        body.parent2_last_name,
        body.parent2_phone,
        body.parent2_email,
        body.parent2_address
      );
    }

    // Simulate linking students and parents
    console.log(
      `Simulating linking student ${student_id} with parents ${parent1_id} and ${parent2_id}`
    );

    // Simulate notification
    console.log(`Simulating notification for student: ${student_id}`);

    return NextResponse.json(
      {
        message: `${body.first_name} ${body.last_name} added successfully as a student (mock).`,
        student_id: student_id,
        user_id: created_student_user_id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Failed to add student (mock)" },
      { status: 500 }
    );
  }
}
