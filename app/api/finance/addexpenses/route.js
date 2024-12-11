import { NextResponse } from "next/server";

// /api/finance/addexpenses

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);

    const {
      expense_category,
      recipient_name,
      description,
      amount,
      expense_date,
      invoice_number,
      supplier_id,
      staff_id,
      user_id,
    } = body;

    // Check for required fields
    if (!expense_category || !amount || !expense_date || !user_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate checking for duplicate invoice number (replace with actual logic if needed)
    if (invoice_number && invoice_number.toLowerCase() === "duplicate123") {
      return NextResponse.json(
        { error: "An expense with this invoice number already exists" },
        { status: 409 } // Conflict status code
      );
    }

    // Simulate successful insertion and return mock data
    const newExpenseId = Math.floor(Math.random() * 1000) + 1; // Generate random ID

    return NextResponse.json(
      {
        message: `Expense in category ${expense_category} added successfully`,
        id: newExpenseId,
      },
      { status: 201 } // Created status code
    );
  } catch (error) {
    console.error("Error adding expense (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
