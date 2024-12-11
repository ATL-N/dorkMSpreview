import { NextResponse } from "next/server";

// /api/staff/staffdetails/[id]
export async function GET(req, { params }) {
  const { id } = params;

  try {
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
        user_email: "nelsodork@gmail24.com",
      },
      {
        staff_id: 1,
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
        user_email: "nelsodork@gmail24.com",
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
        vaccination_status: "none",
        last_physical_exam_date: null,
      },
      // ... more health records
    ];

    const mockEvaluations = [
      {
        evaluation_id: 3,
        evaluatee_id: 12, // Link to staff_id
        evaluation_date: "2024-09-10",
        teaching_effectiveness: 3,
        classroom_management: 4,
        student_engagement: 4,
        professionalism: 5,
        overall_rating: 4,
        comments: "",
        years_of_experience: 11,
        evaluator_id: null,
        status: "active",
      },
      {
        evaluation_id: 2,
        evaluatee_id: 12, // Link to staff_id
        evaluation_date: "2024-09-06",
        teaching_effectiveness: 5,
        classroom_management: 5,
        student_engagement: 4,
        professionalism: 3,
        overall_rating: 4.3,
        comments: "this is my second comment",
        years_of_experience: 10,
        evaluator_id: null,
        status: "active",
      },
      {
        evaluation_id: 3,
        evaluatee_id: 1, // Link to staff_id
        evaluation_date: "2024-09-10",
        teaching_effectiveness: 3,
        classroom_management: 4,
        student_engagement: 4,
        professionalism: 5,
        overall_rating: 4,
        comments: "",
        years_of_experience: 11,
        evaluator_id: null,
        status: "active",
      },
      {
        evaluation_id: 2,
        evaluatee_id: 1, // Link to staff_id
        evaluation_date: "2024-09-06",
        teaching_effectiveness: 5,
        classroom_management: 5,
        student_engagement: 4,
        professionalism: 3,
        overall_rating: 4.3,
        comments: "this is my second comment",
        years_of_experience: 10,
        evaluator_id: null,
        status: "active",
      },
      // ... more evaluations
    ];

    const mockTimetable = [
      // You can add mock timetable data here if you want to test the schedule part
      // Example:
      {
        timetable_id: 1,
        teacher_id: 12, // Link to staff_id
        day_of_week: "Monday",
        start_time: "08:00",
        end_time: "09:00",
        subject_id: 1,
        class_id: 1,
        room_id: 1,
      },
      {
        timetable_id: 1,
        teacher_id: 1, // Link to staff_id
        day_of_week: "Monday",
        start_time: "08:00",
        end_time: "09:00",
        subject_id: 1,
        class_id: 1,
        room_id: 1,
      },

      // ... more timetable entries
    ];

    const mockSubjects = [
      {
        subject_id: 1,
        subject_name: "Math",
      },
      // ... more subjects
    ];

    const mockClasses = [
      {
        class_id: 1,
        class_name: "Class 1",
      },
      // ... more classes
    ];

    const mockRooms = [
      {
        room_id: 1,
        room_name: "Room A",
      },
      // ... more rooms
    ];

    // Find the staff member by staff_id
    const staffMember = mockStaff.find(
      (staff) => staff.staff_id === parseInt(id)
    );

    //  const staffMember = mockStaff.find(
    //    (staff) => staff.staff_id === parseInt(id)
    //  );

    if (!staffMember) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    // Find associated user, health record, evaluations and timetable
    const user = mockUsers.find((u) => u.user_id === staffMember.user_id);
    const healthRecord = mockHealthRecords.find(
      (hr) => hr.user_id === staffMember.user_id
    );
    const evaluations = mockEvaluations.filter(
      (e) => e.evaluatee_id === staffMember.staff_id
    );
    const timetableEntries = mockTimetable.filter(
      (tt) => tt.teacher_id === staffMember.staff_id
    );

    // Build the schedule array based on timetable entries
    const schedule = [
      {
        day: "Monday",
        room: null,
        class: "JHS 2",
        endTime: "09:00",
        subject: "Social Studies",
        startTime: "08:00",
      },
      {
        day: "Thursday",
        room: null,
        class: "JHS 2",
        endTime: "09:00",
        subject: "Mathematics",
        startTime: "08:00",
      },
      {
        day: "Thursday",
        room: null,
        class: "JHS 2",
        endTime: "12:22",
        subject: "Social Studies",
        startTime: "09:00",
      },
    ];

    // Format the staff data
    const staffData = {
      ...staffMember,
      user_email: user ? user.user_email : null,
      medical_conditions: healthRecord ? healthRecord.medical_conditions : null,
      allergies: healthRecord ? healthRecord.allergies : null,
      vaccination_status: healthRecord ? healthRecord.vaccination_status : null,
      last_physical_exam_date: healthRecord
        ? healthRecord.last_physical_exam_date
        : null,
      evaluations: evaluations || [],
      schedule: schedule || [],
    };

    return NextResponse.json(staffData, { status: 200 });
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
