import { NextResponse } from "next/server";

// Helper function to check if two time periods overlap (mock)
function doPeriodsOverlap(start1, end1, start2, end2) {
  return start1 < end2 && start2 < end1;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { classId, semesterId, timetable, periods } = body;

    if (!classId || !semesterId || !timetable || !periods) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock database - in-memory object to store timetable data
    const mockTimetableDB = {};

    // Simulate transaction BEGIN
    console.log("Mock Transaction BEGIN");

    // Mock data for staff and classes (for clash detection)
    const mockStaff = {
      1: { staff_id: 1, first_name: "John", last_name: "Doe" },
      2: { staff_id: 2, first_name: "Jane", last_name: "Smith" },
      // ... add more staff
    };

    const mockClasses = {
      1: { class_id: 1, class_name: "Class A" },
      2: { class_id: 2, class_name: "Class B" },
      // ... add more classes
    };

    // Get the class name for the current class (mock)
    const currentClassName =
      mockClasses[classId]?.class_name || "Unknown Class";

    // Check for clashes (mock)
    for (const day in timetable) {
      for (const periodNumber in timetable[day]) {
        const entry = timetable[day][periodNumber];
        const period = periods.find((p) => p.number === parseInt(periodNumber));

        for (const existingClassId in mockTimetableDB) {
          for (const existingSemesterId in mockTimetableDB[existingClassId]) {
            for (const existingDay in mockTimetableDB[existingClassId][
              existingSemesterId
            ]) {
              for (const existingPeriodNumber in mockTimetableDB[
                existingClassId
              ][existingSemesterId][existingDay]) {
                const existingEntry =
                  mockTimetableDB[existingClassId][existingSemesterId][
                    existingDay
                  ][existingPeriodNumber];
                const existingPeriod = periods.find(
                  (p) => p.number === parseInt(existingPeriodNumber)
                );

                if (
                  entry.teacher === existingEntry.teacher_id &&
                  day === existingDay &&
                  semesterId.toString() === existingSemesterId &&
                  doPeriodsOverlap(
                    period.startTime,
                    period.endTime,
                    existingPeriod.startTime,
                    existingPeriod.endTime
                  )
                ) {
                  const clashTeacher =
                    mockStaff[existingEntry.teacher_id] || {};
                  const clashClassName =
                    mockClasses[existingClassId]?.class_name || "Unknown Class";
                  // Simulate transaction ROLLBACK
                  console.log("Mock Transaction ROLLBACK");
                  return NextResponse.json(
                    {
                      error: `Clash detected for ${
                        clashTeacher.first_name || "Unknown"
                      } ${
                        clashTeacher.last_name || "Teacher"
                      } on ${day} between ${period.startTime}-${
                        period.endTime
                      } and ${existingPeriod.startTime}-${
                        existingPeriod.endTime
                      }. Classes involved: ${currentClassName} and ${clashClassName}`,
                    },
                    { status: 400 }
                  );
                }
              }
            }
          }
        }
      }
    }

    // Delete existing timetable entries for the class and semester (mock)
    if (!mockTimetableDB[classId]) {
      mockTimetableDB[classId] = {};
    }
    mockTimetableDB[classId][semesterId] = {};
    console.log(
      `Mock Deleted existing timetable entries for class ${classId}, semester ${semesterId}`
    );

    // Insert new timetable entries (mock)
    for (const day in timetable) {
      if (!mockTimetableDB[classId][semesterId][day]) {
        mockTimetableDB[classId][semesterId][day] = {};
      }
      for (const periodNumber in timetable[day]) {
        const entry = timetable[day][periodNumber];
        const period = periods.find((p) => p.number === parseInt(periodNumber));

        mockTimetableDB[classId][semesterId][day][periodNumber] = {
          subject_id: entry.subject,
          teacher_id: entry.teacher,
          room_id: entry.room,
          start_time: period.startTime,
          end_time: period.endTime,
        };
      }
    }

    // Simulate transaction COMMIT
    console.log("Mock Transaction COMMIT");

    console.log(
      `Timetable for class ${classId} and semester ${semesterId} added successfully (mock)`
    );

    return NextResponse.json(
      { message: "Timetable added successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Simulate transaction ROLLBACK
    console.log("Mock Transaction ROLLBACK");
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
