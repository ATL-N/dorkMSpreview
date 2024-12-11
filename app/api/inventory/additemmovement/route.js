import { NextResponse } from "next/server";

// /api/inventory/additemmovement

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { user_id, formData, inventory_items } = body;

    if (!formData || !inventory_items || inventory_items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields or no items" },
        { status: 400 }
      );
    }

    const {
      staff_id,
      recipient_name,
      recipient_phone,
      comments,
      movement_type,
    } = formData;

    if (staff_id) {
      if (!staff_id || !movement_type) {
        return NextResponse.json(
          { error: "Missing required fields in staff name or movement type" },
          { status: 400 }
        );
      }
    } else {
      if (!recipient_name || !movement_type) {
        return NextResponse.json(
          {
            error:
              "Missing required fields in recipient name, recipient phone or movement type",
          },
          { status: 400 } // Corrected status code to 400
        );
      }
    }

    const itemsToRestock = [];

    // Mock item data (replace with your actual mock data or a mock database)
    const mockItems = {
      1: { itemName: "Pen", quantityAvailable: 100, restockLevel: 20 },
      2: { itemName: "Pencil", quantityAvailable: 50, restockLevel: 10 },
      // ... more items
    };

    for (const item of inventory_items) {
      const { item_id, quantity } = item;

      if (!item_id || quantity === undefined) {
        return NextResponse.json(
          { error: "Missing required fields in inventory item" },
          { status: 400 }
        );
      }

      const mockItem = mockItems[item_id];

      if (!mockItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }

      // Mock checking for sufficient quantity (replace with your actual logic if needed)
      if (mockItem.quantityAvailable < quantity) {
        return NextResponse.json(
          {
            error: "Insufficient quantity available",
            item: mockItem.itemName,
            available: mockItem.quantityAvailable,
            requested: quantity,
          },
          { status: 400 }
        );
      }

      // Simulate updating the quantity (if you have a mock database, update it here)
      mockItem.quantityAvailable -= quantity;

      if (mockItem.quantityAvailable <= mockItem.restockLevel) {
        itemsToRestock.push(mockItem.itemName);
      }
    }

    return NextResponse.json(
      {
        message: "Item movement recorded successfully",
        itemsToRestock: itemsToRestock.length > 0 ? itemsToRestock : null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in recording item movement (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
