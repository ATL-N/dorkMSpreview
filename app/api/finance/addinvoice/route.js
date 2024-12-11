import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { class_id, semester_id, invoices } = body;

    if (!class_id || !semester_id || !invoices || invoices.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields or no invoice items" },
        { status: 400 }
      );
    }

    let newTotalAmount = 0;
    let oldTotalAmount = 0; // Initialize oldTotalAmount

    for (const invoice of invoices) {
      const { description, amount } = invoice;

      if (!description || !amount) {
        return NextResponse.json(
          { error: "Missing required fields in invoice item" },
          { status: 400 }
        ); // Return error immediately if invoice data is invalid.
      }
      newTotalAmount += parseFloat(amount);
    }

    // Simulate updating student balances. Replace with actual logic if needed
    const amountDifference = newTotalAmount - oldTotalAmount;
    const studentsAffected = 10; // Replace with the number of affected students

    return NextResponse.json(
      {
        message: "Invoices updated successfully",
        newTotalAmount,
        oldTotalAmount,
        amountDifference,
        studentsAffected,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in invoice update (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
