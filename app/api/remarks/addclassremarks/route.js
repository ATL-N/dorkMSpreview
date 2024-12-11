import { NextResponse } from "next/server";

// /api/remarks/addclassremarks

export async function POST(req) {
  try {
    const body = await req.json();
    const { students, class_id, semester_id, user_id } = body;

    // Mock database - in-memory object to store remarks
    const mockRemarksDB = {};

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    for (const student of students) {
      const { id, teacherRemark, headteacherRemark } = student;

      // Construct a unique key for each student's remark
      const remarkKey = `${id}-${class_id}-${semester_id}`;

      if (mockRemarksDB[remarkKey]) {
        // Update existing remark
        mockRemarksDB[remarkKey] = {
          ...mockRemarksDB[remarkKey],
          class_teachers_remark: teacherRemark,
          headteachers_remark: headteacherRemark,
          user_id: user_id,
        };
        console.log(`Mock Updated remark for student ${id}`);
      } else {
        // Insert new remark
        mockRemarksDB[remarkKey] = {
          student_id: id,
          class_id: class_id,
          semester_id: semester_id,
          class_teachers_remark: teacherRemark,
          headteachers_remark: headteacherRemark,
          user_id: user_id,
        };
        console.log(`Mock Inserted remark for student ${id}`);
      }
    }

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    return NextResponse.json(
      { message: "Remarks saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.error(
      "Mock Transaction ROLLBACK - Error saving student remarks:",
      error
    );
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
