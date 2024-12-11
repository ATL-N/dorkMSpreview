import { NextResponse } from "next/server";

// /api/finance/updateexpense/[expense_id]/route.js

export async function PUT(req, { params }) {
  try {
    const { expense_id } = params;
    const body = await req.json();
    console.log("Updating expense:", expense_id, body);

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

    // Mock data (replace with your actual mock data or logic)
    let mockExpense = {
      expense_id: expense_id,
      expense_category: expense_category,
      recipient_name: recipient_name,
      description: description,
      amount: amount,
      expense_date: expense_date,
      invoice_number: invoice_number,
      supplier_id: supplier_id,
      staff_id: staff_id,
      user_id: user_id,

      // ... other fields ...
    };

    // Simulate checking for duplicate invoice number (excluding the current expense)
    if (invoice_number && invoice_number.toLowerCase() === "duplicate123") {
      return NextResponse.json(
        { error: "Another expense with this invoice number already exists" },
        { status: 409 } // Conflict status code
      );
    }

    // Simulate a database update. Replace with your actual mock logic
    if (expense_id === "999") {
      //Simulate expense not found error
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: `Expense in category ${mockExpense.expense_category} updated successfully`,
        id: mockExpense.expense_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating expense (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
