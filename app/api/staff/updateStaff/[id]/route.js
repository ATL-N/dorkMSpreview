import { NextResponse } from "next/server";

// /api/staff/updateStaff/[id]

export async function PUT(req, { params }) {
  const { id } = params;

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
      class_teacher,
      subject_in_charge,
      house_in_charge,
      bus_in_charge,
      library_in_charge,
      role,
      status,
      medical_conditions,
      allergies,
      vaccination_status,
      last_physical_exam_date,
    } = body;

    // Mock data (expand this with more realistic data)
    const mockStaff = [
      {
        staff_id: 12,
        user_id: 21,
        first_name: "Ernest ",
        last_name: "Wilson",
        middle_name: "Ernest ",
        date_of_birth: "2024-08-20",
        gender: "M",
        marital_status: "Single",
        address: "newest staff",
        phone_number: "25844245",
        email: "nelsodork@gmail24.com",
        emergency_contact: "0551577446",
        date_of_joining: "2024-08-12",
        designation: "",
        department: "Music",
        salary: "200.00",
        account_number: "8040750",
        contract_type: "Full-time",
        employment_status: "On Leave",
        qualification: "HND ",
        experience: "5 years",
        blood_group: "AB-",
        national_id: "54246",
        passport_number: "584455",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FIMG-20230627-WA0051.jpg2024-09-06T14%3A33%3A46.907Z?alt=media&token=42b62bb9-db20-476d-a367-594f8ba1e5e5",
        teaching_subject: "",
        class_teacher: null,
        subject_in_charge: null,
        house_in_charge: null,
        bus_in_charge: null,
        library_in_charge: null,
        status: "deleted",
        role: "head teacher",
      },
      // ... more staff members
    ];

    const mockUsers = [
      {
        user_id: 21,
        user_email: "nelsodork@gmail24.com",
      },
      // ... more users
    ];

    const mockHealthRecords = [
      {
        user_id: 21,
        medical_conditions: "elephantiasis",
        allergies: "Banku",
        blood_group: "AB-", // Include blood_group in health records
        vaccination_status: "none",
        last_physical_exam_date: null,
      },
      // ... more health records
    ];

    // Find the staff member to update
    const staffIndex = mockStaff.findIndex(
      (staff) => staff.staff_id === parseInt(id)
    );

    if (staffIndex === -1) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    const staffMember = mockStaff[staffIndex];
    const { user_id } = staffMember;

    // Update staff data
    mockStaff[staffIndex] = {
      ...staffMember,
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
      class_teacher,
      subject_in_charge,
      house_in_charge,
      bus_in_charge,
      library_in_charge,
      role,
      status,
    };

    // Find the associated health record
    const healthRecordIndex = mockHealthRecords.findIndex(
      (hr) => hr.user_id === user_id
    );

    // Update health record data (or create a new one if it doesn't exist)
    if (healthRecordIndex !== -1) {
      mockHealthRecords[healthRecordIndex] = {
        ...mockHealthRecords[healthRecordIndex],
        medical_conditions,
        allergies,
        blood_group, // Update blood_group in health record
        vaccination_status,
        last_physical_exam_date,
      };
    } else {
      mockHealthRecords.push({
        user_id,
        medical_conditions,
        allergies,
        blood_group, // Add blood_group to new health record
        vaccination_status,
        last_physical_exam_date,
      });
    }

    // Update user email if it has changed
    const userIndex = mockUsers.findIndex((u) => u.user_id === user_id);
    if (userIndex !== -1 && mockUsers[userIndex].user_email !== email) {
      mockUsers[userIndex].user_email = email;
    }

    return NextResponse.json(
      {
        message: `${first_name}'s information updated successfully`,
        staff_name: first_name,
        user_id: user_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Failed to update staff information" },
      { status: 500 }
    );
  }
}
