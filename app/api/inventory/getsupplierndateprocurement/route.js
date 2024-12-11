import { NextResponse } from "next/server";

// /api/inventory/getsupplierndateprocurement
// GET /api/inventory/getsupplierndateprocurement?supplier_id=1&selected_date=2023-06-01

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const supplier_id = searchParams.get("supplier_id");
    const selected_date = searchParams.get("selected_date");

    if (!supplier_id || !selected_date) {
      return NextResponse.json(
        { error: "Missing required fields: supplier id and selected date" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockProcurementData = {
      supplier_id: 1,
      supplier_name: "Test Supplier",
      selected_date: "2024-03-15",
      procured_items: [
        {
          procurement_id: 1,
          item_id: 1,
          item_name: "Item A",
          category: "Category A",
          unit_cost: 10,
          unit_price: 12,
          quantity: 50,
          total_cost: 500,
        },
        {
          procurement_id: 2,
          item_id: 2,
          item_name: "Item B",
          category: "Category B",
          unit_cost: 20,
          unit_price: 25,
          quantity: 25,
          total_cost: 500,
        },
      ],
      received_by: {
        staff_id: 1,
        first_name: "John",
        last_name: "Doe",
      },
    };

    if (supplier_id === "1" && selected_date === "2024-03-15") {
      return NextResponse.json(mockProcurementData, { status: 200 });
    } else {
      // Handle other supplier/date combinations (e.g., return different mock data or 404)
      return NextResponse.json(
        { message: "No procurements found for the given supplier and date" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
