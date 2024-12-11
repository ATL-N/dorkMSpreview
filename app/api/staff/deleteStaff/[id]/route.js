import { NextResponse } from "next/server";

// localhost:3000/api/staff/deleteStaff/[id]

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    // Mock data for staff and users (expand this as needed)
    const mockStaff = [
      {
        staff_id: 1,
        user_id: 101,
        first_name: "John",
        last_name: "Doe",
        status: "active",
      },
      {
        staff_id: 2,
        user_id: 102,
        first_name: "Jane",
        last_name: "Smith",
        status: "active",
      },
      // ... more staff
    ];

    const mockUsers = [
      {
        user_id: 101,
        status: "active",
      },
      {
        user_id: 102,
        status: "active",
      },
      // ... more users
    ];

    const mockNotifications = []; // Array to store mock notifications

    // 1. Find the staff member to "delete"
    const staffIndex = mockStaff.findIndex(
      (staff) => staff.staff_id === parseInt(id)
    );

    if (staffIndex === -1) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    const staffMember = mockStaff[staffIndex];
    const { user_id, first_name, last_name } = staffMember;

    // 2. "Delete" the staff member (update status to 'deleted')
    mockStaff[staffIndex].status = "deleted";

    // 3. Find and "deactivate" the associated user
    const userIndex = mockUsers.findIndex((user) => user.user_id === user_id);

    if (userIndex !== -1) {
      mockUsers[userIndex].status = "inactive";
    }

    // 4. Create a mock notification
    const notification_title = "Staff Member Removed";
    const notification_message = `Staff member ${first_name} ${last_name} has been removed from the system.`;
    const notification_type = "general";
    const priority = "normal";
    const sender_id = 1; // You might want to change this in your testing

    mockNotifications.push({
      notification_id: mockNotifications.length + 1, // Simple ID generation
      notification_title,
      notification_message,
      notification_type,
      priority,
      sender_id,
    });

    return NextResponse.json(
      {
        message: `${first_name} ${last_name} has been successfully removed from the system.`,
        staff_id: parseInt(id),
        user_id: user_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Failed to remove staff member" },
      { status: 500 }
    );
  }
}
