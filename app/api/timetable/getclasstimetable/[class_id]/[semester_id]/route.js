import { NextResponse } from "next/server";

// /api/timetable/getclasstimetable/[class_id]/[semester_id]

export async function GET(req, { params }) {
  try {
    const { class_id, semester_id } = params;

    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing class_id or semester_id parameter" },
        { status: 400 }
      );
    }

    // Mock data for timetable, subjects, staff, and rooms
    const mockTimetable = {
      4: {
        // class_id
        1: {
          // semester_id
          Friday: {
            1: { subject: 1, teacher: 3, room: null },
          },
          Monday: {
            1: { subject: 3, teacher: 1, room: null },
          },
          Thursday: {
            1: { subject: 1, teacher: 3, room: null },
          },
          Tuesday: {
            1: { subject: 2, teacher: 3, room: null },
          },
          Wednesday: {
            1: { subject: 3, teacher: 2, room: null },
          },
        },
      },
    };

    const mockSubjects = {
      1: { subject_id: 1, subject_name: "Mathematics" },
      2: { subject_id: 2, subject_name: "Mathematics" },
      3: { subject_id: 3, subject_name: "Social Studies" },
    };

    const mockStaff = {
      1: { staff_id: 1, first_name: "Nelson", last_name: "Dorkordi" },
      2: { staff_id: 2, first_name: "Matilda", last_name: "Attah" },
      3: { staff_id: 3, first_name: "John", last_name: "Nyarkoh" },
    };

    const mockRooms = {}; // No rooms in this example

    // Get timetable data for the given class_id and semester_id
    const timetableData = mockTimetable[class_id]?.[semester_id];

    if (!timetableData) {
      return NextResponse.json(
        {
          class_id,
          timetable: {
            Monday: {},
            Tuesday: {},
            Wednesday: {},
            Thursday: {},
            Friday: {},
          },
          periods: [],
          daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        { status: 200 }
      );
    }

    // Transform the data into the desired format
    const timetable = {};
    const periods = [];
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    for (const day in timetableData) {
      timetable[day] = {};
      for (const periodNumber in timetableData[day]) {
        const entry = timetableData[day][periodNumber];
        timetable[day][periodNumber] = {
          subject: entry.subject,
          teacher: entry.teacher,
          room: entry.room,
          subjectName: mockSubjects[entry.subject]?.subject_name || null,
          teacherName: `${mockStaff[entry.teacher]?.first_name || ""} ${
            mockStaff[entry.teacher]?.last_name || ""
          }`.trim(),
          roomName: mockRooms[entry.room]?.room_name || null,
        };

        // Add period if it doesn't exist
        if (!periods.some((p) => p.number === parseInt(periodNumber))) {
          periods.push({
            number: parseInt(periodNumber),
            startTime: "08:00:00", // You might want to adjust mock start/end times
            endTime: "09:00:00",
          });
        }
      }
    }

    // Sort periods by number
    periods.sort((a, b) => a.number - b.number);

    // Ensure all days are present in the timetable
    daysOfWeek.forEach((day) => {
      if (!timetable[day]) {
        timetable[day] = {};
      }
    });

    return NextResponse.json(
      {
        class_id,
        timetable,
        periods,
        daysOfWeek,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
