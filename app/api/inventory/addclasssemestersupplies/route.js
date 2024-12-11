import { NextResponse } from "next/server";

// /api/inventory/addclasssemestersupplies

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { user_id, class_id, semester_id, supplies } = body;

    if (!class_id || !semester_id || !supplies || supplies.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields or no supplies" },
        { status: 400 }
      );
    }

    // Mock authorization (replace with your actual authorization logic)
    if (user_id !== "authorized_user_id") {
      // Replace "authorized_user_id" with the actual ID or condition
      return NextResponse.json(
        { error: "User not authorized to perform this operation" },
        { status: 401 }
      );
    }

    const itemsToRestock = []; // Keep track of items that need restocking (for the mock response)

    // Mock Data for items
    const mockItems = {
      1: { itemName: "Pen", quantityAvailable: 100, restockLevel: 20 },
      2: { itemName: "Pencil", quantityAvailable: 50, restockLevel: 10 },
      3: { itemName: "Notebook", quantityAvailable: 25, restockLevel: 5 },
    };

    for (const supply of supplies) {
      const { student_id, item_id, quantity: newQuantity } = supply;

      if (!student_id || !item_id || newQuantity === undefined) {
        return NextResponse.json(
          { error: "Missing required fields in supply item" },
          { status: 400 }
        );
      }

      // Mock checking for sufficient quantity (replace with actual logic if using mock database)
      const mockItem = mockItems[item_id];

      if (!mockItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }
      if (mockItem.quantityAvailable < newQuantity) {
        // Simulated insufficient quantity error

        return NextResponse.json(
          {
            error: "Insufficient quantity available",
            item: mockItem.itemName,
            available: mockItem.quantityAvailable,
            requested: newQuantity,
          },
          { status: 400 }
        );
      }

      // Simulate updating quantity. If you have a mock database, update it here.
      mockItem.quantityAvailable -= newQuantity;

      if (mockItem.quantityAvailable <= mockItem.restockLevel) {
        itemsToRestock.push(mockItem.itemName);
      }
    }

    return NextResponse.json(
      {
        message: "Class semester supplies updated successfully",
        itemsToRestock: itemsToRestock.length > 0 ? itemsToRestock : null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Error in updating class semester supplies (simulated):",
      error
    );
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
