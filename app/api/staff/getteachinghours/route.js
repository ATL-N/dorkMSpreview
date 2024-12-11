import { NextResponse } from "next/server";

// /api/staff/getteachinghours?userId=12&semesterId=1

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const semesterId = searchParams.get("semesterId");

  if (!userId || !semesterId) {
    return NextResponse.json(
      { error: "Both userId and semesterId are required" },
      { status: 400 }
    );
  }

  try {
    // Mock data (expand this with more realistic data)
    const mockStaff = [
      {
        staff_id: 3,
        user_id: 12,
        first_name: "John",
        last_name: "Nyarkoh",
        middle_name: "Akwasikumah",
        date_of_birth: "2024-07-28",
        gender: "M",
        marital_status: "Single",
        address: "assemblies of god ghana",
        phone_number: "+233551577446",
        email: "atlcoccus@gmail123.com",
        emergency_contact: "0504238397",
        date_of_joining: "2024-08-13",
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
      // ... more staff
    ];

    const mockUsers = [
      {
        user_id: 12,
        user_email: "atlcoccus@gmail123.com",
      },
      // ... more users
    ];

    const mockHealthRecords = [
      {
        user_id: 12,
        medical_conditions: null,
        allergies: null,
        vaccination_status: null,
        last_physical_exam_date: null,
      },
      // ... more health records
    ];

    const mockTimetable = [
      {
        teacher_id: 3,
        day_of_week: "Friday",
        start_time: "08:00",
        end_time: "09:00",
        class_id: 1, // Example class ID
        semester_id: 1,
      },
      {
        teacher_id: 3,
        day_of_week: "Thursday",
        start_time: "08:00",
        end_time: "09:00",
        class_id: 2, // Example class ID
        semester_id: 1,
      },
      {
        teacher_id: 3,
        day_of_week: "Tuesday",
        start_time: "08:00",
        end_time: "09:00",
        class_id: 1, // Example class ID
        semester_id: 1,
      },
      {
        teacher_id: 4,
        day_of_week: "Tuesday",
        start_time: "08:00",
        end_time: "09:00",
        class_id: 1, // Example class ID
        semester_id: 1,
      },
      // ... more timetable entries
    ];

    const mockStudents = [
      {
        student_id: 1,
        class_id: 1,
        status: "active",
      },
      {
        student_id: 2,
        class_id: 2,
        status: "active",
      },
      {
        student_id: 3,
        class_id: 2,
        status: "active",
      },
      {
        student_id: 4,
        class_id: 2,
        status: "inactive",
      },
      // ... more students
    ];

    // Find the staff member by user_id
    const staffMember = mockStaff.find(
      (staff) => staff.user_id === parseInt(userId)
    );

    if (!staffMember) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    // Find the associated user
    const user = mockUsers.find((u) => u.user_id === staffMember.user_id);

    // Find the associated health record
    const healthRecord = mockHealthRecords.find(
      (hr) => hr.user_id === staffMember.user_id
    );

    // Filter timetable entries for the staff member and semester
    const teacherSchedule = mockTimetable.filter(
      (entry) =>
        entry.teacher_id === staffMember.staff_id &&
        entry.semester_id === parseInt(semesterId)
    );
    // Calculate total hours per week, total students, total classes, and total periods per week
    let totalHoursPerWeek = 0;
    const weeklySchedule = [];
    teacherSchedule.forEach((entry) => {
      const startTime = new Date(`1970-01-01T${entry.start_time}`);
      const endTime = new Date(`1970-01-01T${entry.end_time}`);
      const hoursPerDay = (endTime - startTime) / (1000 * 60 * 60); // Calculate hours
      totalHoursPerWeek += hoursPerDay;

      weeklySchedule.push({
        day: entry.day_of_week,
        startTime: entry.start_time,
        endTime: entry.end_time,
        hoursPerDay: hoursPerDay,
      });
    });

    const studentCount = new Set();
    const classCount = new Set();

    teacherSchedule.forEach((entry) => {
      mockStudents.forEach((student) => {
        if (
          student.class_id === entry.class_id &&
          student.status === "active"
        ) {
          studentCount.add(student.student_id);
        }
      });
      classCount.add(entry.class_id); // Count unique class IDs
    });

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
      total_hours_per_week: totalHoursPerWeek.toFixed(2),
      total_students: studentCount.size,
      total_classes: classCount.size,
      total_periods_per_week: teacherSchedule.length, // Total periods is the count of schedule entries
      weekly_schedule: weeklySchedule,
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

export const dynamic = "force-dynamic";
