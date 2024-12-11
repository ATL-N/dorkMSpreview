import { NextResponse } from "next/server";

// /api/inventory/addiclasssemesteritems
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { class_id, semester_id, user_id, inventory_items } = body;

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
      const { item_id, quantity_per_student, unit_price } = inventory; // total price is not required. calculate on the frontend

      if (!item_id || !quantity_per_student || !unit_price) {
        return NextResponse.json(
          { error: "Missing required fields in Class item" },
          { status: 400 } // Should be a 400 Bad Request
        );
      }

      // You can add more validation or mock logic here if needed
      // For example, you could check if item_id exists in a mock inventory
      // or simulate different error conditions
    }

    return NextResponse.json(
      { message: "Class items deleted and new items added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in Class item deletion and addition:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
