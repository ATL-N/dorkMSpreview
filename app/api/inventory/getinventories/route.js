import { NextResponse } from "next/server";

// /api/inventory/getinventories

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock Data - Replace with your actual mock data
    let mockInventoryItems = [
      {
        inventory_id: 2,
        inventory_name: "Exercise Books ",
        unit_price: "5.00",
        quantity_per_student: 10,
        total_price: "50.00",
        restock_level: 10,
        status: "active",
      },
      {
        inventory_id: 3,
        inventory_name: "My 2nd copy book",
        unit_price: "15.00",
        quantity_per_student: 1,
        total_price: "15.00",
        restock_level: 5,
        status: "active",
      },
      {
        inventory_id: 1,
        inventory_name: "uniform",
        unit_price: "15.00",
        quantity_per_student: 3,
        total_price: "45.00",
        restock_level: 50,
        status: "active",
      },
    ];

    if (query) {
      // Mock search functionality (replace with your actual search logic if needed)
      const lowerCaseQuery = query.toLowerCase();
      mockInventoryItems = mockInventoryItems.filter(
        (item) => item.inventory_name.toLowerCase().includes(lowerCaseQuery) // You can adjust the filtering logic
      );
    }

    return NextResponse.json(mockInventoryItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching inventories (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
