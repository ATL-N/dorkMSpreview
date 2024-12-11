import { NextResponse } from "next/server";

// /api/inventory/getallitemsupplies/route.js

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data (replace with your actual mock data)
    let mockItemSupplies = [
      {
        supply_id: 20,
        quantity: -2,
        supplied_at: "2024-11-11",
        class_name: "JHS 2",
        semester_name: "First Term",
        student_name: "Matilda  Attah ",
        item_name: "integrated science for class 2",
        category: "supply",
        unit_price: "10.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 19,
        quantity: 1,
        supplied_at: "2024-11-08",
        class_name: "JHS 2",
        semester_name: "First Term",
        student_name: "Matilda  Attah ",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        unit_price: "3.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 17,
        quantity: 5,
        supplied_at: "2024-11-08",
        class_name: "JHS 2",
        semester_name: "First Term",
        student_name: "Matilda  Attah ",
        item_name: "integrated science for class 2",
        category: "supply",
        unit_price: "10.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 18,
        quantity: 1,
        supplied_at: "2024-11-08",
        class_name: "JHS 2",
        semester_name: "First Term",
        student_name: "Matilda  Attah ",
        item_name: "integrated science for class 3",
        category: "supply",
        unit_price: "30.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 16,
        quantity: 6,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "John Nyarkoh",
        item_name: "integrated science for class 3",
        category: "supply",
        unit_price: "30.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 15,
        quantity: 1,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "nelson1 Dorkordi",
        item_name: "integrated science for class 3",
        category: "supply",
        unit_price: "30.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 7,
        quantity: 20,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "nelson1 Dorkordi",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        unit_price: "3.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 11,
        quantity: 30,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "John Nyarkoh",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        unit_price: "3.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 13,
        quantity: 16,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "John Nyarkoh",
        item_name: "Excercise Books note 1",
        category: "supply",
        unit_price: "3.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 9,
        quantity: 10,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "nelson1 Dorkordi",
        item_name: "Excercise Books note 1",
        category: "supply",
        unit_price: "3.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 12,
        quantity: 1,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "John Nyarkoh",
        item_name: "Fullscap Books Note 3",
        category: "supply",
        unit_price: "10.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 8,
        quantity: 3,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "nelson1 Dorkordi",
        item_name: "Fullscap Books Note 3",
        category: "supply",
        unit_price: "10.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 14,
        quantity: 10,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "John Nyarkoh",
        item_name: "integrated science for class 3",
        category: "supply",
        unit_price: "30.00",
        staff_name: "admin admin",
      },
      {
        supply_id: 10,
        quantity: 20,
        supplied_at: "2024-10-05",
        class_name: "Completed",
        semester_name: "Second Term",
        student_name: "nelson1 Dorkordi",
        item_name: "integrated science for class 3",
        category: "supply",
        unit_price: "30.00",
        staff_name: "admin admin",
      },
    ];


    if (query) {
      const lowerQuery = query.toLowerCase();
      mockItemSupplies = mockItemSupplies.filter((supply) => {
        return (
          supply.item_name.toLowerCase().includes(lowerQuery) ||
          supply.semester_name.toLowerCase().includes(lowerQuery) ||
          supply.class_name.toLowerCase().includes(lowerQuery) ||
          supply.student_name.toLowerCase().includes(lowerQuery) ||
          supply.staff_name.toLowerCase().includes(lowerQuery) ||
          supply.supplied_at.includes(lowerQuery) // Direct string comparison for date
        );
      });
    }

    return NextResponse.json(mockItemSupplies, { status: 200 });
  } catch (error) {
    console.error("Database error:", error); // Keep this for debugging if needed
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
