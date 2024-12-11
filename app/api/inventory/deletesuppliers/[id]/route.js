import { NextResponse } from "next/server";

// localhost:3000/api/supplier/deleteitem/[id]
//  /api/inventory/deletesuppliers/[id]/route.js

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    const { user_id } = body;

    // Mock data/logic (replace with your actual mock data or logic)
    let mockSupplierName = "";

    if (id === "1") {
      mockSupplierName = "Supplier A"; // Replace with actual supplier name
    } else {
      // Handle cases where the ID is not found
      return NextResponse.json(
        { error: "supplier not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `${mockSupplierName} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing supplier (simulated):", error);
    return NextResponse.json(
      { error: "Failed to remove supplier" },
      { status: 500 }
    );
  }
}
