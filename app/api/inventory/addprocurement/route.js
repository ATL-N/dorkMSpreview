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
        { error: "Missing required fields or no procured item items" },
        { status: 400 }
      );
    }

    // Mock authorization (replace with your actual authorization logic)

    if (user_id !== "authorized_user_id") {
      return NextResponse.json(
        { error: "User not authorized to perform this operation" },
        { status: 401 }
      );
    }

    for (const procured_item of procured_items) {
      const { item_id, unit_price, unit_cost, quantity } = procured_item;

      if (!item_id || !quantity || !unit_cost) {
        return NextResponse.json(
          { error: "Missing required fields in procured item item" },
          { status: 400 } // Corrected status code
        );
      }

      // You can add any additional mock logic or validation here.
      // For example:
      // - Check if item_id exists
      // - Check if the supplier exists
      // - Update mock inventory quantities
    }

    return NextResponse.json(
      {
        message: "Procured items added successfully and item prices updated",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in procurement addition:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
