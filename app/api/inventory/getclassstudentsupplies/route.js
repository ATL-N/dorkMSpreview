import { NextResponse } from "next/server";

// GET /api/inventory/getclassstudentsupplies?class_id=1&semester_id=1
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const class_id = searchParams.get("class_id");
    const semester_id = searchParams.get("semester_id");

    console.log("semester_id, class_id", semester_id, class_id);

    if (!class_id || !semester_id) {
      return NextResponse.json(
        { error: "Missing required fields: class_id and semester_id" },
        { status: 400 }
      );
    }

    // Mock Data - Replace with your actual mock data
    const mockStudentSupplies = [
      {
        student_id: 4,
        student_name: "Enyaah  Patience  Araba",
        amountowed: "-100.00",
        supplies: [
          {
            item_id: 1,
            item_name: "integrated science for class 2",
            quantity: 0,
          },
          {
            item_id: 2,
            item_name: "integrated science for class 3",
            quantity: 0,
          },
          {
            item_id: 3,
            item_name: "Aki Ola Social Studies for Jhs ",
            quantity: 0,
          },
        ],
      },
      // ... more mock data as needed
    ];

    if (class_id === "1" && semester_id === "1") {
      return NextResponse.json(mockStudentSupplies, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error:
            "No students or items found for the given class. Contact the admin to assign items to the class",
        },
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
