import { NextResponse } from "next/server";

//  /api/inventory/additems/route.js

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { inventory_items } = body;

    if (!inventory_items || inventory_items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields or no inventory items" },
        { status: 400 }
      );
    }

    for (const inventory of inventory_items) {
      const {
        inventory_name,
        category,
        restock_level,
        quantity_available,
        quantity_desired,
        unit_price,
      } = inventory;

      if (
        !inventory_name ||
        !quantity_available ||
        !quantity_desired ||
        !unit_price
      ) {
        return NextResponse.json(
          { error: "Missing required fields in inventory item" },
          { status: 400 } // Corrected status code
        );
      }

      // Mock adding item to inventory (replace with your actual mock logic)
      // You could, for example, add the item to a mock inventory array here
    }

    return NextResponse.json(
      { message: "Items added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in inventory addition (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
