import { NextResponse } from "next/server";

// /api/notification/allnotifications

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data based on the provided format
    const mockData = [
      {
        notification_id: 1,
        notification_title: "Mock Student Information Updated",
        notification_message:
          "Student John Doe's information has been updated.",
        notification_type: "student",
        priority: "normal",
        sender_id: 1,
        sent_at: "2024-10-28T10:00:00.000Z",
        is_read: false,
        status: "active",
        created_at: "2024-10-28T10:00:00.000Z",
      },
      {
        notification_id: 2,
        notification_title: "Mock New Event Created",
        notification_message: "A new event 'School Fair' has been created.",
        notification_type: "general",
        priority: "high",
        sender_id: 2,
        sent_at: "2024-10-27T14:30:00.000Z",
        is_read: true,
        status: "active",
        created_at: "2024-10-27T14:30:00.000Z",
      },
      {
        notification_id: 3,
        notification_title: "Mock Item Removed",
        notification_message:
          "Item Excercise Books note 1 has been removed the system.",
        notification_type: "inventory",
        priority: "normal",
        sender_id: null,
        sent_at: "2024-10-26T09:15:00.000Z",
        is_read: false,
        status: "active",
        created_at: "2024-10-26T09:15:00.000Z",
      },
      // ... add more mock notifications as needed ...
    ];

    // Filter mock data based on the query (if provided)
    let filteredMockData = mockData;
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filteredMockData = mockData.filter(
        (notification) =>
          notification.notification_title
            .toLowerCase()
            .includes(lowerCaseQuery) ||
          notification.notification_type
            .toLowerCase()
            .includes(lowerCaseQuery) ||
          notification.priority.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Limit to 30 if no query is provided
    if (!query) {
      filteredMockData = filteredMockData.slice(0, 30);
    }

    return NextResponse.json(filteredMockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
