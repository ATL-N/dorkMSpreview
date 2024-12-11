import { NextResponse } from "next/server";

// localhost:3000/api/item/deleteitem/[id]
//  /api/inventory/deleteitem/[item_id]/route.js

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    const { user_id } = body;

    // Mock data/logic (replace with your actual mock data or logic)
    let mockItemName = "";

    if (id === "1") {
      mockItemName = "Pen"; // Replace with the actual item name
    } else {
      // Handle cases where the ID is not found
      return NextResponse.json({ error: "item not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: `${mockItemName} has been successfully removed from the system.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing item (simulated):", error);
    return NextResponse.json(
      { error: "Failed to remove item" },
      { status: 500 }
    );
  }
}
