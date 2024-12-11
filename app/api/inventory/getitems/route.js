import { NextResponse } from "next/server";

// /api/inventory/getitems/route.js

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data (replace with your actual mock data)
    let mockItems = [
      {
        item_id: 3,
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        description: null,
        unit_price: "3.00",
        quantity_desired: 30,
        quantity_available: 29,
        restock_level: 5,
        status: "active",
      },
      {
        item_id: 4,
        item_name: "Excercise Books note 1",
        category: "supply",
        description: null,
        unit_price: "3.00",
        quantity_desired: 1500,
        quantity_available: 842,
        restock_level: 50,
        status: "damaged",
      },
      {
        item_id: 5,
        item_name: "Fullscap Books Note 3",
        category: "supply",
        description: null,
        unit_price: "10.00",
        quantity_desired: 400,
        quantity_available: 187,
        restock_level: 20,
        status: "active",
      },
      {
        item_id: 1,
        item_name: "integrated science for class 2",
        category: "supply",
        description: null,
        unit_price: "10.00",
        quantity_desired: 100,
        quantity_available: 63,
        restock_level: 10,
        status: "active",
      },
      {
        item_id: 2,
        item_name: "integrated science for class 3",
        category: "supply",
        description: null,
        unit_price: "30.00",
        quantity_desired: 80,
        quantity_available: 13,
        restock_level: 8,
        status: "active",
      },
    ];

    if (query) {
      const lowerQuery = query.toLowerCase();
      mockItems = mockItems.filter((item) => {
        return (
          item.item_name.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery)
        );
      });
    }

    return NextResponse.json(mockItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching items (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
