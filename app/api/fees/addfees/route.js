import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      student_id,
      payment_date,
      amount_received,
      fee_type,
      payment_mode,
      received_by,
      new_balance,
      comments,
    } = body;

    if (!payment_date || !amount_received) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate fetching student details (replace with actual logic if needed)
    const student = {
      first_name: "John",
      last_name: "Doe",
      other_names: "Kwame",
    };

    // Simulate fetching receiver details (replace with actual logic if needed)
    const receiver = {
      first_name: "Jane",
      last_name: "Smith",
    };

    // Simulate fetching old balance and calculating new balance
    const old_balance = 1000; // Replace with actual logic to fetch from a database
    // const new_balance = Math.max(0, old_balance - parseFloat(amount_received));

    // Simulate successful insertion and return mock data
    const collection_id = Math.floor(Math.random() * 1000) + 1; // Generate random ID

    return NextResponse.json(
      {
        message: "Fee collection recorded successfully.",
        collection_id: collection_id,
        new_balance: new_balance,
        receipt_data: {
          student_name: `${student.first_name} ${student.last_name} ${student.other_names}`,
          payment_date,
          amount_received,
          old_balance,
          new_balance,
          fee_type,
          payment_mode,
          receiver_name: `${receiver.first_name} ${receiver.last_name}`,
          comments,
          collection_id: collection_id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error simulating fee collection:", error);
    return NextResponse.json(
      { error: "Failed to record fee collection" },
      { status: 500 }
    );
  }
}
