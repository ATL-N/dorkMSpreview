import { NextResponse } from "next/server";

// /api/inventory/getallitemmovements

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data (replace with your actual mock data)
    let mockItemMovements = [
      {
        id: 3,
        staff_id: 13,
        item_id: 5,
        name: "Ernest 1 Tawiah Nelson ",
        contact: "atlcoccus123@gmail.com25",
        comments: null,
        item_name: "Fullscap Books Note 3",
        quantity: 16,
        supplied_at: "05/10/2024 21:03",
        status: "in",
        movement_type: "Internal",
        supplied_by_name: "  ",
      },
      {
        id: 2,
        staff_id: null,
        item_id: 5,
        name: "Amam Cobina",
        contact: "547323204",
        comments: "this details is not compulsory",
        item_name: "Fullscap Books Note 3",
        quantity: 10,
        supplied_at: "05/10/2024 20:24",
        status: "out",
        movement_type: "External",
        supplied_by_name: "  ",
      },
      {
        id: 1,
        staff_id: null,
        item_id: 5,
        name: "Amam Cobina",
        contact: "547323204",
        comments: "this is not compulsory",
        item_name: "Fullscap Books Note 3",
        quantity: 200,
        supplied_at: "05/10/2024 19:54",
        status: "out",
        movement_type: "External",
        supplied_by_name: "  ",
      },
    ];

    if (query) {
      const lowerQuery = query.toLowerCase();
      mockItemMovements = mockItemMovements.filter((movement) => {
        return (
          movement.name.toLowerCase().includes(lowerQuery) ||
          movement.contact.toLowerCase().includes(lowerQuery) ||
          movement.item_name.toLowerCase().includes(lowerQuery) ||
          (movement.comments &&
            movement.comments.toLowerCase().includes(lowerQuery))
        );
      });
    }

    return NextResponse.json(mockItemMovements, { status: 200 });
  } catch (error) {
    console.error("Error fetching item movements (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
