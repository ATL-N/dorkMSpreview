import { NextResponse } from "next/server";

// /api/inventory/updateitem/[id]/route.js

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    console.log("body in updateSubjectApi", body);

    const {
      item_id,
      item_name,
      category,
      unit_price,
      quantity_desired,
      quantity_available,
      restock_level,
      status,
      user_id,
    } = body;

    if (!id || !item_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (id != item_id && user_id) {
      return NextResponse.json(
        {
          error:
            "You are not authorised to perform this update. Contact the administrator",
        },
        { status: 400 }
      );
    }

    // Mock data (replace with your actual mock data or logic)
    const existingItems = [
      {
        item_id: "1", // Ensure this is a string to match the route parameter type
        item_name: "Existing Item A",
        category: "Category A",
        unit_price: "10.00",
        quantity_desired: 100,
        quantity_available: 50,
        restock_level: 10,
        status: "active",
      },
      {
        item_id: "2",
        item_name: "Existing Item B",
        category: "Category B",
        unit_price: "20.00",
        quantity_desired: 200,
        quantity_available: 75,
        restock_level: 15,
        status: "active",
      },
      // Add more mock items as needed
    ];

    // Simulate checking if the item exists
    const itemIndex = existingItems.findIndex((item) => item.item_id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Simulate checking for duplicate item name
    const isDuplicate = existingItems.some(
      (item) =>
        item.item_id !== id &&
        item.item_name.toLowerCase() === item_name.toLowerCase()
    );

    if (isDuplicate) {
      return NextResponse.json(
        { error: "Item name already exists. Choose a different name." },
        { status: 409 } // 409 Conflict
      );
    }

    // Simulate updating the item
    const updatedItem = {
      ...existingItems[itemIndex], // Copy existing data
      // Update with new values from request body
      item_name,
      category,
      unit_price,
      quantity_desired,
      quantity_available,
      restock_level,
      status,
    };

    // Update the mock item in the array
    existingItems[itemIndex] = updatedItem;

    return NextResponse.json(
      {
        message: `Item (${item_name}) updated successfully`,
        Item: item_name,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating item (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
