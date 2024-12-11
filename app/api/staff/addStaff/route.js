import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      middle_name,
      date_of_birth,
      gender,
      marital_status,
      address,
      phone_number,
      email,
      emergency_contact,
      date_of_joining,
      designation,
      department,
      salary,
      account_number,
      contract_type,
      employment_status,
      qualification,
      experience,
      blood_group,
      national_id,
      passport_number,
      photo,
      teaching_subject,
      role,
      medical_conditions,
      allergies,
      vaccination_status,
      last_physical_exam_date,
      sender_id,
    } = body;

    console.log("body", body);

    // Mock data for existing staff and users
    const mockStaff = []; // You'll need to populate this with existing staff data if you want to test duplicates
    const mockUsers = []; // Similarly, populate this with existing user data

    // 1. Check if staff already exists (mock check)
    const staffExists = mockStaff.some(
      (staff) =>
        staff.first_name === first_name &&
        staff.last_name === last_name &&
        staff.middle_name === middle_name &&
        staff.gender === gender &&
        staff.date_of_birth === date_of_birth &&
        staff.status === "active"
    );

    if (staffExists) {
      return NextResponse.json(
        { error: "Staff member already exists" },
        { status: 400 }
      );
    }

    // 2. Check if user with given email already exists (mock check)
    const userExists = mockUsers.some((user) => user.user_email === email);

    if (userExists) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // 3. Create user account (mock creation)
    const username = `${first_name} ${last_name} ${middle_name}`.toLowerCase();
    const hashedPassword = await bcrypt.hash(phone_number, 10); // You can keep bcrypt for password hashing

    const user_id = mockUsers.length + 1; // Generate a mock user_id
    mockUsers.push({
      user_id,
      user_name: username,
      user_email: email,
      password: hashedPassword,
      role,
    });

    // 4. Insert staff data (mock insertion)
    const staff_id = mockStaff.length + 1; // Generate a mock staff_id
    const newStaff = {
      staff_id,
      user_id,
      first_name,
      last_name,
      middle_name,
      date_of_birth,
      gender,
      marital_status,
      address,
      phone_number,
      email,
      emergency_contact,
      date_of_joining,
      designation,
      department,
      salary,
      account_number,
      contract_type,
      employment_status,
      qualification,
      experience,
      blood_group,
      national_id,
      passport_number,
      photo,
      teaching_subject,
      role,
      status: "active", // Assuming new staff are initially active
    };
    mockStaff.push(newStaff);

    const staff_first_name = newStaff.first_name;

    // 5. Insert health record data (mock insertion)
    // You'll need a mock array for health records as well
    const mockHealthRecords = [];
    mockHealthRecords.push({
      user_id, // Link to the user
      medical_conditions,
      allergies,
      blood_group,
      vaccination_status,
      last_physical_exam_date,
    });

    // 6. Mock notification (you might want to have a mock array for notifications too)
    const notification_title = "New Staff Added";
    const notification_message = `A new staff(${staff_first_name}) has joined the school.`;
    const notification_type = "general";
    const priority = "normal";
    // ... (Add to a mock notifications array if needed) ...

    // Return success response
    return NextResponse.json(
      {
        message: `${staff_first_name} added successfully as staff and user with health record`,
        staff_name: staff_first_name,
        user_id: user_id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json({ error: "Failed to add staff" }, { status: 500 });
  }
}
