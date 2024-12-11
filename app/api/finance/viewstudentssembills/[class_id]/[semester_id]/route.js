import { NextResponse } from "next/server";

// /api/finance/viewstudentssembills/[class_id]/[semester_id]
// /api/finance/viewstudentssembills/

export async function GET(req, { params }) {
  const { class_id, semester_id } = params;

  try {
    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockInvoiceData = []; // Initialize as an empty array

    if (class_id === "1" && semester_id === "1") {
      mockInvoiceData.push({
        id: 4,
        firstName: "Patience ",
        lastName: "Enyaah ",
        invoiceNumber: "BIL-4-1-1",
        class: "Completed",
        semester: "First Term",
        invoiceItems: [
          {
            description: "Feeding fee",
            amount: 200,
          },
          {
            description: "Tuition Fee",
            amount: 200,
          },
          {
            description: "Maintenance",
            amount: 50,
          },
          {
            description: "Arrears",
            amount: -550,
          },
        ],
        totalAmountOwed: -100,
        dateIssued: "2024-12-08",
      });
    } else {
      // Handle other class_id/semester_id combinations (e.g., return different mock data or a 404)
      return NextResponse.json(
        {
          error:
            "No students or invoices found for the given class and semester",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(mockInvoiceData, { status: 200 });
  } catch (error) {
    console.error("Error fetching invoice data (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
