import { NextResponse } from "next/server";

// /api/finance/viewinvoice/[class_id]/[semester_id]

export async function GET(req, { params }) {
  const { class_id, semester_id } = params;

  try {
    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock Invoice Data - Replace with your actual mock data
    const mockInvoiceData = {
      invoiceNumber: "",
      class: "",
      semester: "",
      invoiceItems: [],
      totalAmount: 0,
      dateIssued: "",
    };

    if (class_id === "1" && semester_id === "1") {
      mockInvoiceData.invoiceNumber = "BIL-1-1";
      mockInvoiceData.class = "Class 1A";
      mockInvoiceData.semester = "First Term";
      mockInvoiceData.invoiceItems = [
        { description: "Feeding fee", amount: 200 },
        { description: "Tuition Fee", amount: 200 },
        { description: "Maintenance", amount: 50 },
      ];
      mockInvoiceData.totalAmount = 450;
      mockInvoiceData.dateIssued = "2024-12-08";
    } else {
      // Return a 404 or a different mock object for other class/semester combinations
      return NextResponse.json(
        { error: "No invoices found for the given class and semester" },
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
