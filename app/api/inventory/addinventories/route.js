import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { class_id, semester_id, inventory_items } = body;

    if (
      !class_id ||
      !semester_id ||
      !inventory_items ||
      inventory_items.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields or no inventory items" },
        { status: 400 }
      );
    }

    for (const inventory of inventory_items) {
      const { inventory_name, restock_level, quantity, unit_price } = inventory;

      if (!inventory_name || !quantity || !unit_price) {
        return NextResponse.json(
          { error: "Missing required fields in inventory item" },
          { status: 400 }
        );
      }

      // You can add any additional mock logic or validation here
      // For example: check if inventory_name already exists, etc.
    }

    return NextResponse.json(
      { message: "inventory items added successfully" },
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
