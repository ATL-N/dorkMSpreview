import { NextResponse } from "next/server";

const RECIPIENT_TYPES = {
  ALL_USERS: "all users",
  STAFF: "staff",
  STUDENTS: "students",
  PARENTS: "parents",
};

// Mock functions to simulate database operations
const getMockRecipientIds = (recipientType) => {
  const mockRecipients = {
    [RECIPIENT_TYPES.ALL_USERS]: [1, 2, 3, 4, 5],
    [RECIPIENT_TYPES.STAFF]: [1, 2, 3],
    [RECIPIENT_TYPES.STUDENTS]: [4, 5, 6, 7],
    [RECIPIENT_TYPES.PARENTS]: [8, 9, 10],
  };
  return mockRecipients[recipientType] || [];
};

const insertMockNotification = async (notificationData) => {
  const { notification_title, notification_message } = notificationData;
  // Generate a mock notification ID (you can use a counter or a random ID generator)
  const notification_id = Math.floor(Math.random() * 1000) + 1;
  return {
    notification_id,
    notification_title,
    notification_message, // Include notification_message
  };
};

const linkMockNotificationToRecipients = async (
  notificationId,
  recipientIds,
  recipientType
) => {
  // In a real database, this would be an INSERT operation
  console.log(
    `Mock linking notification ${notificationId} to recipients:`,
    recipientIds,
    `of type:`,
    recipientType
  );
  return;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      notification_title,
      notification_message,
      notification_type,
      priority,
      sender_id,
      recipient_type,
    } = body;

    if (
      !notification_title ||
      !notification_message ||
      !notification_type ||
      !sender_id
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate transaction start (not needed in mock environment, but for demonstration)
    // await db.query("BEGIN");

    const recipientIds = getMockRecipientIds(recipient_type);
    if (recipientIds.length === 0) {
      throw new Error(
        `Invalid or unsupported recipient type: ${recipient_type}`
      );
    }

    const insertedNotification = await insertMockNotification(body);
    const { notification_id } = insertedNotification;

    await linkMockNotificationToRecipients(
      notification_id,
      recipientIds,
      recipient_type
    );

    // Simulate transaction commit (not needed in mock environment)
    // await db.query("COMMIT");

    console.log(`Mock notification ${notification_id} added successfully`);
    return NextResponse.json(
      {
        message: `Notification (${notification_id}) added successfully`,
        id: notification_id,
        // Include other relevant data if needed for testing
        ...insertedNotification,
      },
      { status: 201 }
    );
  } catch (error) {
    // Simulate transaction rollback (not needed in mock environment)
    // await db.query("ROLLBACK");
    console.error(
      "Error in mock POST /api/notification/sendnotification:",
      error
    );
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
