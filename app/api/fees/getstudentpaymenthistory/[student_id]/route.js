import { NextResponse } from "next/server";

// /api/fees/getstudentpaymenthistory

export async function GET(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const { student_id } = params;

    if (!student_id) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    let mockData;

    if (student_id === "1") {
      // Mock data for student_id 1
      mockData = [
        {
          collection_id: 5,
          student_id: 1,
          payment_date: "2024-08-24",
          amount_received: "-50.00",
          old_balance: "0.00",
          new_balance: "-50.00",
          fee_type: null,
          payment_mode: null,
          status: "active",
          created_at: "2024-08-24T00:02:45.215Z",
          received_by: 26,
          comment: null,
          student_name: "nelson1 Dorkordi",
          staff_name: "admin admin",
          class_name: "class 2b",
          semester_name: "First Term",
        },
        {
          collection_id: 4,
          student_id: 1,
          payment_date: "2024-08-23",
          amount_received: "40.00",
          old_balance: "32.00",
          new_balance: "0.00",
          fee_type: null,
          payment_mode: null,
          status: "active",
          created_at: "2024-08-23T23:59:51.816Z",
          received_by: 26,
          comment: null,
          student_name: "nelson1 Dorkordi",
          staff_name: "admin admin",
          class_name: "class 2b",
          semester_name: "First Term",
        },
        {
          collection_id: 3,
          student_id: 1,
          payment_date: "2024-08-23",
          amount_received: "-32.00",
          old_balance: "0.00",
          new_balance: "32.00",
          fee_type: null,
          payment_mode: null,
          status: "active",
          created_at: "2024-08-23T23:56:33.864Z",
          received_by: 26,
          comment: null,
          student_name: "nelson1 Dorkordi",
          staff_name: "admin admin",
          class_name: "class 2b",
          semester_name: "First Term",
        },
        {
          collection_id: 2,
          student_id: 1,
          payment_date: "2024-08-23",
          amount_received: "50.00",
          old_balance: "30.00",
          new_balance: "0.00",
          fee_type: null,
          payment_mode: null,
          status: "active",
          created_at: "2024-08-23T23:48:53.982Z",
          received_by: 26,
          comment: null,
          student_name: "nelson1 Dorkordi",
          staff_name: "admin admin",
          class_name: "class 2b",
          semester_name: "First Term",
        },
        {
          collection_id: 1,
          student_id: 1,
          payment_date: "2024-08-23",
          amount_received: "50.00",
          old_balance: "80.00",
          new_balance: "30.00",
          fee_type: null,
          payment_mode: null,
          status: "active",
          created_at: "2024-08-23T22:52:06.443Z",
          received_by: 26,
          comment: null,
          student_name: "nelson1 Dorkordi",
          staff_name: "admin admin",
          class_name: "class 2b",
          semester_name: "First Term",
        },
      ];

      if (query) {
        const lowerQuery = query.toLowerCase();
        mockData = mockData.filter((payment) => {
          return (
            payment.student_name.toLowerCase().includes(lowerQuery) ||
            payment.staff_name.toLowerCase().includes(lowerQuery) ||
            payment.class_name.toLowerCase().includes(lowerQuery) ||
            payment.semester_name.toLowerCase().includes(lowerQuery) ||
            payment.payment_date.includes(query) // Directly check date string for query
          );
        });
      }
    } else {
      // Handle other student_id values (e.g., return an empty array or mock data for a different student)
      mockData = [];
    }

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
