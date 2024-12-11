import { NextResponse } from "next/server";

// /api/users/deleteuser/[user_id]

// Mock data and functions for simulating database operations
const mockDatabase = {
  users: [
    { user_id: 1, user_name: "John Doe", status: "active" },
    { user_id: 2, user_name: "Jane Smith", status: "active" },
    { user_id: 3, user_name: "Peter Jones", status: "active" },
    { user_id: 4, user_name: "Alice Brown", status: "active" }, // New user
    // ... add more users as needed
  ],
  students: [
    { student_id: 101, user_id: 1, status: "active" },
    { student_id: 103, user_id: 3, status: "active" },
    { student_id: 104, user_id: 4, status: "active" }, // New student
    // ... add more students as needed
  ],
  parents: [
    { parent_id: 201, user_id: 2, status: "active" },
    { parent_id: 202, user_id: 4, status: "active" }, // Parent for the new student
    // ... add more parents as needed
  ],
  staff: [
    // { staff_id: 301, user_id: 3, status: "active" }, // Example staff member, uncomment and adjust if needed
    // ... add more staff as needed
  ],
  user_health_record: [
    { user_id: 1, status: "active" },
    { user_id: 2, status: "active" },
    { user_id: 3, status: "active" },
    { user_id: 4, status: "active" }, // New record
    // ... add more records as needed
  ],
  student_parent: [
    { student_id: 101, parent_id: 201, status: "active" },
    { student_id: 104, parent_id: 202, status: "active" }, // New relationship
    // ... add more relationships as needed
  ],
  notifications: [],
};

const mockQuery = async (query, params) => {
  // Simulate database queries with basic logic
  if (query === "BEGIN" || query === "COMMIT" || query === "ROLLBACK") {
    return; // No-op for transaction control statements
  }

  if (query.startsWith("SELECT CASE WHEN EXISTS")) {
    // Determine user type
    const user_id = params[0];
    if (mockDatabase.students.some((s) => s.user_id === user_id)) {
      return { rows: [{ user_type: "students" }] };
    } else if (mockDatabase.parents.some((p) => p.user_id === user_id)) {
      return { rows: [{ user_type: "parents" }] };
    } else if (mockDatabase.staff.some((s) => s.user_id === user_id)) {
      return { rows: [{ user_type: "staff" }] };
    } else {
      return { rows: [{ user_type: null }] };
    }
  } else if (query.startsWith("UPDATE")) {
    // Update status in specific tables
    const tableName = query.match(/UPDATE (\w+)/)[1];
    const user_id = params[0];
    if (mockDatabase[tableName]) {
      const recordIndex = mockDatabase[tableName].findIndex(
        (record) =>
          record.user_id === user_id ||
          record.student_id === user_id ||
          record.parent_id === user_id
      );
      if (recordIndex !== -1) {
        mockDatabase[tableName][recordIndex].status = "deleted";
        // If updating the 'users' table, return the user_name for the notification
        if (tableName === "users") {
          return {
            rows: [
              { user_name: mockDatabase[tableName][recordIndex].user_name },
            ],
          };
        } else {
          return { rows: [mockDatabase[tableName][recordIndex]] }; // Return the updated record
        }
      } else {
        return { rows: [] }; // Record not found
      }
    }
  } else if (query.startsWith("SELECT 1 FROM")) {
    // Check if a user exists in a specific table
    const tableName = query.match(/FROM (\w+)/)[1];
    const user_id = params[0];
    return {
      rows: mockDatabase[tableName].some((record) => record.user_id === user_id)
        ? [{ exists: true }]
        : [],
    };
  } else if (query.startsWith("SELECT parent_id FROM student_parent")) {
    // Get parent IDs for a student
    const student_id = params[0];
    const parentIds = mockDatabase.student_parent
      .filter((sp) => sp.student_id === student_id && sp.status === "active")
      .map((sp) => ({ parent_id: sp.parent_id }));
    return { rows: parentIds };
  } else if (query.startsWith("SELECT COUNT(*) FROM student_parent")) {
    // Check if parents have other active students
    const parent_id = params[0];
    const student_id = params[1];
    const otherStudentsCount = mockDatabase.student_parent.filter(
      (sp) =>
        sp.parent_id === parent_id &&
        sp.status === "active" &&
        mockDatabase.students.some(
          (s) =>
            s.student_id === sp.student_id &&
            s.status === "active" &&
            s.student_id !== student_id
        )
    ).length;
    return { rows: [{ count: otherStudentsCount }] };
  } else if (query.startsWith("INSERT INTO notifications")) {
    // Insert a new notification
    const newNotification = {
      notification_id: mockDatabase.notifications.length + 1,
      notification_title: params[0],
      notification_message: params[1],
      notification_type: params[2],
      priority: params[3],
      sender_id: params[4],
    };
    mockDatabase.notifications.push(newNotification);
    return { rows: [newNotification] };
  }

  // Default: return empty result for unsupported queries
  return { rows: [] };
};

export async function PUT(req, { params }) {
  const { user_id } = params;
  const { sender_id } = await req.json();

  try {
    await mockQuery("BEGIN");

    // Step 1: Check which table the user belongs to
    const userTypeResult = await mockQuery(
      `
      SELECT 
        CASE
          WHEN EXISTS (SELECT 1 FROM students WHERE user_id = $1) THEN 'students'
          WHEN EXISTS (SELECT 1 FROM parents WHERE user_id = $1) THEN 'parents'
          WHEN EXISTS (SELECT 1 FROM staff WHERE user_id = $1) THEN 'staff'
          ELSE NULL
        END AS user_type
    `,
      [parseInt(user_id)]
    );

    if (!userTypeResult.rows[0].user_type) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userType = userTypeResult.rows[0].user_type;

    // Step 2: Update status in the specific table (students, parents, or staff)
    const updateSpecificTableQuery = `
      UPDATE ${userType} SET status = 'deleted' WHERE ${
      userType === "students"
        ? "student_id"
        : userType === "parents"
        ? "parent_id"
        : "user_id"
    } = $1 RETURNING *;
    `;

    const updateResult = await mockQuery(updateSpecificTableQuery, [
      userType === "students"
        ? mockDatabase.students.find((s) => s.user_id === parseInt(user_id))
            ?.student_id
        : userType === "parents"
        ? mockDatabase.parents.find((p) => p.user_id === parseInt(user_id))
            ?.parent_id
        : parseInt(user_id),
    ]);

    if (updateResult.rows.length === 0) {
      return NextResponse.json(
        { error: `${userType} not found` },
        { status: 404 }
      );
    }

    // Step 3: Update status in users table
    const updateUserQuery = `
      UPDATE users SET status = 'deleted' WHERE user_id = $1 RETURNING user_name;
    `;
    const userResult = await mockQuery(updateUserQuery, [parseInt(user_id)]);
    const deletedUserName = userResult.rows[0].user_name;

    // Step 4: Update status in user_health_record table
    const updateHealthRecordQuery = `
      UPDATE user_health_record SET status = 'deleted' WHERE user_id = $1;
    `;
    await mockQuery(updateHealthRecordQuery, [parseInt(user_id)]);

    // Step 5: If the user is a student, handle parent relationships
    if (userType === "students") {
      const student_id = mockDatabase.students.find(
        (s) => s.user_id === parseInt(user_id)
      )?.student_id;

      // Get parent IDs for the student
      const getParentIdsQuery = `
        SELECT parent_id FROM student_parent WHERE student_id = $1;
      `;
      const parentResult = await mockQuery(getParentIdsQuery, [student_id]);
      const parentIds = parentResult.rows.map((row) => row.parent_id);

      // Check if parents have other active students and update status if not
      for (const parent_id of parentIds) {
        const checkOtherStudentsQuery = `
          SELECT COUNT(*) FROM student_parent sp
          JOIN students s ON sp.student_id = s.student_id
          WHERE sp.parent_id = $1 AND s.status = 'active' AND s.student_id != $2;
        `;
        const otherStudentsResult = await mockQuery(checkOtherStudentsQuery, [
          parent_id,
          student_id,
        ]);
        const otherStudentsCount = parseInt(otherStudentsResult.rows[0].count);

        if (otherStudentsCount === 0) {
          const updateParentQuery = `
            UPDATE parents SET status = 'deleted' WHERE parent_id = $1;
          `;
          await mockQuery(updateParentQuery, [parent_id]);
        }
      }

      // Update status in student_parent table
      const updateStudentParentQuery = `
        UPDATE student_parent SET status = 'deleted' WHERE student_id = $1;
      `;
      await mockQuery(updateStudentParentQuery, [student_id]);
    }

    // Step 6: Send a notification
    const notificationQuery = `
      INSERT INTO notifications (
        notification_title,
        notification_message,
        notification_type,
        priority,
        sender_id
      ) VALUES (
        $1, $2, $3, $4, $5
      ) RETURNING notification_id;
    `;
    const notificationValues = [
      "User Deleted",
      `User ${deletedUserName} (ID: ${user_id}) has been soft deleted from the system.`,
      "alert",
      "high",
      sender_id,
    ];
    const notificationResult = await mockQuery(
      notificationQuery,
      notificationValues
    );

    await mockQuery("COMMIT");

    return NextResponse.json(
      {
        message: `User with ID ${user_id} has been successfully soft deleted.`,
        notification_id: notificationResult.rows[0].notification_id,
      },
      { status: 200 }
    );
  } catch (error) {
    await mockQuery("ROLLBACK");
    console.error("Mock database error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
