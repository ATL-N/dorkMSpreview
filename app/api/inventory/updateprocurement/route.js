import { NextResponse } from "next/server";

// /api/inventory/addprocurement

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { user_id, supplier_id, selected_date, procured_items } = body;

    if (
      !supplier_id ||
      !selected_date ||
      !procured_items ||
      procured_items.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields or no procured items" },
        { status: 400 }
      );
    }

    // Mock authorization check (replace with your actual authorization logic)
    if (user_id !== "authorized_user") {
      return NextResponse.json(
        { error: "User not authorized to perform this operation" },
        { status: 401 }
      );
    }

    // Mock existing procurements for the given supplier and date
    const existingProcurements = {
      "supplier1_2024-12-08": {
        1: { procurement_id: 101, item_id: 1, quantity: 5, unit_cost: 10 }, // Existing item
        2: { procurement_id: 102, item_id: 2, quantity: 8, unit_cost: 15 }, // Will be deleted
      },
    };

    const existingItems =
      existingProcurements[`${supplier_id}_${selected_date}`] || {};

    // Mock item data (replace with your actual data or logic)
    const mockItems = {
      1: { quantity_available: 100 },
      2: { quantity_available: 150 },
      3: { quantity_available: 200 }, // New item
    };

    for (const procured_item of procured_items) {
      const { item_id, unit_price, unit_cost, quantity } = procured_item;

      if (!item_id || !quantity || !unit_cost) {
        return NextResponse.json(
          { error: "Missing required fields in procured item" },
          { status: 400 }
        );
      }

      if (existingItems[item_id]) {
        // Simulate updating existing procurement and item quantity
        const quantityDiff = quantity - existingItems[item_id].quantity;

        if (mockItems[item_id]) {
          mockItems[item_id].quantity_available += quantityDiff;
        }

        // Remove this item from existingItems
        delete existingItems[item_id];
      } else {
        // Simulate inserting new procurement and updating item quantity
        if (mockItems[item_id]) {
          mockItems[item_id].quantity_available += quantity;
        }
      }
    }

    // Simulate deleting removed procurements and updating quantities
    for (const itemId in existingItems) {
      if (mockItems[itemId]) {
        mockItems[itemId].quantity_available -= existingItems[itemId].quantity;
      }
    }

    // Simulate notification (replace with your actual notification logic)
    console.log(
      `Notification: Procurement updated for supplier ${supplier_id} on ${selected_date}`
    );

    return NextResponse.json(
      {
        message:
          "Procurement updated successfully and item quantities adjusted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in procurement update (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
