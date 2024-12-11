import { NextResponse } from "next/server";

// /api/inventory/getitemmovements
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const recipient_name = searchParams.get("recipient_name");
    const staff_id = searchParams.get("staff_id");

    // Mock data (replace with your actual mock data)
    let mockItemMovements = [
      {
        supply_id: 1,
        staff_id: null,
        staff_name: null,
        recipient_name: "John Doe",
        recipient_phone: "123-456-7890",
        comments: "Some comments",
        item_id: 1,
        item_name: "Item A",
        quantity: 10,
        supplied_by: 1, // User ID of the supplier
        movement_type: "out",
        supplied_at: "2024-12-10T10:00:00Z",
      },
      {
        supply_id: 2,
        staff_id: 10, // Example staff ID
        staff_name: "Jane Smith", // Example staff name
        recipient_name: null,
        recipient_phone: null,
        comments: null,
        item_id: 2,
        item_name: "Item B",
        quantity: 5,
        supplied_by: 2, // User ID of the supplier
        movement_type: "out",
        supplied_at: "2024-12-11T12:00:00Z",
      },
      // ... more mock data as needed
    ];

    if (recipient_name) {
      const lowerCaseRecipientName = recipient_name.toLowerCase();
      mockItemMovements = mockItemMovements.filter((movement) =>
        movement.recipient_name.toLowerCase().includes(lowerCaseRecipientName)
      );
    } else if (staff_id) {
      mockItemMovements = mockItemMovements.filter(
        (movement) => movement.staff_id === parseInt(staff_id)
      );
    }

    return NextResponse.json({ data: mockItemMovements }, { status: 200 });
  } catch (error) {
    console.error("Error fetching item movements (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
