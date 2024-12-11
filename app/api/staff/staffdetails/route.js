import { NextResponse } from "next/server";

// /api/staff/staffdetails

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock staff data (expand this with more realistic data)
    const mockStaff = [
      {
        staff_id: 6,
        user_id: 15,
        first_name: "Ernest ",
        last_name: "Owusu ",
        middle_name: "",
        date_of_birth: "30/07/2023",
        gender: "M",
        marital_status: "Divorced",
        address: "assemblies of god ghana",
        phone_number: "+233551577446",
        email: "atlcoccus@gmail7885.com",
        emergency_contact: "0502109023",
        date_of_joining: "2024-01-08T00:00:00.000Z",
        designation: "",
        department: "English",
        salary: "806.00",
        account_number: "0702109023",
        contract_type: "Part-time",
        employment_status: "On Leave",
        qualification: "degree",
        experience: "worked with jsx",
        blood_group: "AB-",
        national_id: "50865769",
        passport_number: "20540244",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FANGEL%20PROJECT%202-01.png2024-09-06T14%3A15%3A53.326Z?alt=media&token=af21a9b5-6f99-4e1b-b39c-d4c8908df40c",
        teaching_subject: "social",
        class_teacher: null,
        subject_in_charge: null,
        house_in_charge: null,
        bus_in_charge: null,
        library_in_charge: null,
        status: "active",
        role: "non teaching",
      },
      {
        staff_id: 13,
        user_id: 22,
        first_name: "Ernest 1",
        last_name: "Nelson ",
        middle_name: "Tawiah",
        date_of_birth: "19/02/1996",
        gender: "M",
        marital_status: "Single",
        address: "jkhgjgg",
        phone_number: "25844245",
        email: "atlcoccus123@gmail.com25",
        emergency_contact: "0551577446",
        date_of_joining: "2024-08-19T00:00:00.000Z",
        designation: "",
        department: "Music",
        salary: "20.00",
        account_number: "502856",
        contract_type: "Full-time",
        employment_status: "Active",
        qualification: "HND ",
        experience: "5 years",
        blood_group: "AB+",
        national_id: "54246",
        passport_number: "584455",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2Fdownload.jpeg2024-08-19T15%3A32%3A09.961Z?alt=media&token=f9a1c6aa-e655-4460-bd08-cae23bc38c76",
        teaching_subject: "",
        class_teacher: null,
        subject_in_charge: null,
        house_in_charge: null,
        bus_in_charge: null,
        library_in_charge: null,
        status: "active",
        role: "admin",
      },
      {
        staff_id: 3,
        user_id: 12,
        first_name: "John ",
        last_name: "Nyarkoh",
        middle_name: "Akwasikumah",
        date_of_birth: "28/07/2024",
        gender: "M",
        marital_status: "Single",
        address: "assemblies of god ghana",
        phone_number: "+233551577446",
        email: "atlcoccus@gmail123.com",
        emergency_contact: "0504238397",
        date_of_joining: "2024-08-13T00:00:00.000Z",
        designation: "",
        department: "English",
        salary: "500.00",
        account_number: "0702109023",
        contract_type: "Full-time",
        employment_status: "Active",
        qualification: "degree",
        experience: "worked with js",
        blood_group: "AB+",
        national_id: "50865769",
        passport_number: "20540244",
        photo: null,
        teaching_subject: "English",
        class_teacher: null,
        subject_in_charge: null,
        house_in_charge: null,
        bus_in_charge: null,
        library_in_charge: null,
        status: "active",
        role: "teaching staff",
      },
      {
        staff_id: 15,
        user_id: 26,
        first_name: "admin",
        last_name: "admin",
        middle_name: "admin",
        date_of_birth: "20/08/2024",
        gender: "M",
        marital_status: "Single",
        address: "admin",
        phone_number: "0551577446",
        email: "admin@admin",
        emergency_contact: "0551577446",
        date_of_joining: "2024-08-20T00:00:00.000Z",
        designation: "Admin",
        department: "admin",
        salary: "50000.00",
        account_number: "8040750",
        contract_type: "Contract",
        employment_status: "Active",
        qualification: "HND ",
        experience: "5 years",
        blood_group: "O+",
        national_id: "54246",
        passport_number: "584455",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2Fphoto_2023-11-02_11-14-45.jpg2024-08-20T14%3A48%3A00.576Z?alt=media&token=922165c8-4b73-4878-bd36-338f04242ff2",
        teaching_subject: "",
        class_teacher: null,
        subject_in_charge: null,
        house_in_charge: null,
        bus_in_charge: null,
        library_in_charge: null,
        status: "active",
        role: "admin",
      },
      // ... add more staff members here
    ];

    let filteredStaff = mockStaff;

    if (query) {
      // Simulate search
      const lowerCaseQuery = query.toLowerCase();
      filteredStaff = mockStaff.filter(
        (staff) =>
          staff.first_name.toLowerCase().includes(lowerCaseQuery) ||
          staff.last_name.toLowerCase().includes(lowerCaseQuery) ||
          (staff.middle_name &&
            staff.middle_name.toLowerCase().includes(lowerCaseQuery)) ||
          staff.phone_number.toLowerCase().includes(lowerCaseQuery) ||
          staff.email.toLowerCase().includes(lowerCaseQuery) ||
          (staff.designation &&
            staff.designation.toLowerCase().includes(lowerCaseQuery)) ||
          staff.department.toLowerCase().includes(lowerCaseQuery) ||
          staff.role.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Simulate ordering (add more sort conditions as needed)
    filteredStaff.sort((a, b) => {
      const nameA = a.first_name.toLowerCase();
      const nameB = b.first_name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    // Mock overall staff statistics
    const stats = {
      total_count: filteredStaff.length.toString(),
      male_count: filteredStaff
        .filter((staff) => staff.gender === "M")
        .length.toString(),
      female_count: filteredStaff
        .filter((staff) => staff.gender === "F")
        .length.toString(),
      total_salary: filteredStaff
        .reduce((sum, staff) => sum + parseFloat(staff.salary), 0)
        .toFixed(2),
      teaching_staff_count: filteredStaff
        .filter((staff) => staff.role.toLowerCase() === "teaching staff")
        .length.toString(),
      non_teaching_staff_count: filteredStaff
        .filter((staff) => staff.role.toLowerCase() !== "teaching staff")
        .length.toString(),
    };

    // Mock staff count per department
    const departmentCounts = {};
    filteredStaff.forEach((staff) => {
      if (!departmentCounts[staff.department]) {
        departmentCounts[staff.department] = 0;
      }
      departmentCounts[staff.department]++;
    });

    const departmentBreakdown = Object.entries(departmentCounts).map(
      ([department, staff_count]) => ({
        department,
        staff_count: staff_count.toString(),
      })
    );

    // Sort department breakdown by staff count in descending order
    departmentBreakdown.sort((a, b) => b.staff_count - a.staff_count);

    // Combine staff list and statistics
    const responseData = {
      staff: filteredStaff.map((staff) => ({
        ...staff,
        id: staff.staff_id,
        name: `${staff.first_name} ${staff.last_name} ${
          staff.middle_name || ""
        }`.trim(),
        phone: staff.phone_number,
      })),
      stats: {
        ...stats,
        departmentBreakdown: departmentBreakdown,
      },
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
