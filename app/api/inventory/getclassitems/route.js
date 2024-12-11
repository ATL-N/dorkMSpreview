import { NextResponse } from "next/server";

// GET /api/inventory/getclassitems?class_id=1&semester_id=1
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const class_id = searchParams.get("class_id");
    const semester_id = searchParams.get("semester_id");

    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing required fields: class_id and semester_id" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockClassItems = {
      class_id: 1,
      semester_id: 1,
      items: [
        {
          item_id: 3,
          item_name: "Aki Ola Social Studies for Jhs ",
          category: "supply",
          description: null,
          unit_price: 3,
          quantity_per_student: 2,
          supplied_by: "admin admin",
          assigned_at: "2024-10-04T21:46:04.024Z",
        },
        {
          item_id: 1,
          item_name: "integrated science for class 2",
          category: "supply",
          description: null,
          unit_price: 10,
          quantity_per_student: 1,
          supplied_by: "admin admin",
          assigned_at: "2024-10-04T21:46:04.024Z",
        },
        {
          item_id: 2,
          item_name: "integrated science for class 3",
          category: "supply",
          description: null,
          unit_price: 30,
          quantity_per_student: 5,
          supplied_by: "admin admin",
          assigned_at: "2024-10-04T21:46:04.024Z",
        },
      ],
    };

    if (class_id === "1" && semester_id === "1") {
      // You can customize the mock data returned based on the class_id and semester_id
      return NextResponse.json(mockClassItems, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No items found for the given class and semester" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
