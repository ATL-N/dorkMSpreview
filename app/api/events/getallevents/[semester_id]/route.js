import { NextResponse } from "next/server";

// /api/events/getallevents/[semester_id]
export async function GET(req, { params }) {
  try {
    const dummyData = {
      events: [
        {
          event_id: 1,
          event_title: "School Opening Ceremony",
          event_date: "2025-09-05",
          start_time: "08:00",
          end_time: "10:00",
          location: "School Auditorium",
          description: "Welcome back to school!",
          event_type: "School Event",
          target_audience: "All",
          created_at: "2024-08-15",
          status: "active",
          user_id: 1,
          updated_at: "2024-08-20",
          id: 1,
          title: "School Opening Ceremony",
          date: "2024-09-05",
          type: "School Event",
        },
        {
          event_id: 2,
          event_title: "Parent-Teacher Meeting",
          event_date: "2025-02-20",
          start_time: "14:00",
          end_time: "16:00",
          location: "Classrooms",
          description: "Discuss student progress.",
          event_type: "Meeting",
          target_audience: "Parents",
          created_at: "2024-09-01",
          status: "active",
          user_id: 2,
          updated_at: "2024-09-05",
          id: 2,
          title: "Parent-Teacher Meeting",
          date: "2024-09-20",
          type: "Meeting",
        },
        {
          event_id: 3,
          event_title: "Sports Day",
          event_date: "2025-10-12",
          start_time: "09:00",
          end_time: "13:00",
          location: "School Field",
          description: "Annual sports competition.",
          event_type: "Sports",
          target_audience: "Students",
          created_at: "2024-09-20",
          status: "active",
          user_id: 3,
          updated_at: "2024-09-25",
          id: 3,
          title: "Sports Day",
          date: "2024-10-12",
          type: "Sports",
        },
        {
          // New Event
          event_id: 4,
          event_title: "Science Fair",
          event_date: "2025-1-25",
          start_time: "10:00",
          end_time: "14:00",
          location: "School Lab",
          description: "Student science projects exhibition.",
          event_type: "Academic",
          target_audience: "Students",
          created_at: "2024-10-01",
          status: "active",
          user_id: 4,
          updated_at: "2024-10-05",
          id: 4,
          title: "Science Fair",
          date: "2024-10-25",
          type: "Academic",
        },
        {
          // New Event
          event_id: 5,
          event_title: "Cultural Day",
          event_date: "2024-12-08",
          start_time: "09:00",
          end_time: "15:00",
          location: "School Auditorium",
          description: "Celebrating our diverse cultures.",
          event_type: "Cultural",
          target_audience: "All",
          created_at: "2024-10-15",
          status: "active",
          user_id: 5,
          updated_at: "2024-10-20",
          id: 5,
          title: "Cultural Day",
          date: "2024-11-08",
          type: "Cultural",
        },
        {
          // New Event
          event_id: 6,
          event_title: "Music Concert",
          event_date: "2024-12-22",
          start_time: "18:00",
          end_time: "20:00",
          location: "School Hall",
          description: "Student musical performances.",
          event_type: "Concert",
          target_audience: "All",
          created_at: "2024-10-29",
          status: "active",
          user_id: 6,
          updated_at: "2024-11-05",
          id: 6,
          title: "Music Concert",
          date: "2024-11-22",
          type: "Concert",
        },
        {
          // New Event
          event_id: 7,
          event_title: "Prize-Giving Day",
          event_date: "2024-12-10",
          start_time: "10:00",
          end_time: "13:00",
          location: "School Auditorium",
          description: "Award ceremony for outstanding students.",
          event_type: "School Event",
          target_audience: "Students and Parents",
          created_at: "2024-11-20",
          status: "active",
          user_id: 1, // Example user ID
          updated_at: "2024-11-25",
          id: 7,
          title: "Prize-Giving Day",
          date: "2024-12-10",
          type: "School Event",
        },
      ],
      stats: {
        totalEvents: 7, // Updated count
        upcomingEvents: 6, // Example: Adjust as needed
        eventsThisMonth: 2, // Example: Adjust as needed
        eventsThisWeek: 0, // Example: Adjust as needed
      },
    };

    return NextResponse.json(dummyData, { status: 200 });
  } catch (error) {
    console.error("Error generating dummy event data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
