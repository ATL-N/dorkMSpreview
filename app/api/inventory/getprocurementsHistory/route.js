import { NextResponse } from "next/server";

// /api/inventory/getprocurementsHistory

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data (replace with your actual mock data)
    let mockProcurementHistory = [
      {
        procurement_id: 8,
        item_id: 3,
        supplier_id: 3,
        unit_cost: "4.00",
        quantity: 2,
        total_cost: "8.00",
        procurement_date: "2024-10-27",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-27T07:13:05.267Z",
        status: "active",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        supplier_name: "Aki Ola Publications",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 7,
        item_id: 5,
        supplier_id: 3,
        unit_cost: "5.00",
        quantity: 5,
        total_cost: "25.00",
        procurement_date: "2024-10-27",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-27T07:13:05.267Z",
        status: "active",
        item_name: "Fullscap Books Note 3",
        category: "supply",
        supplier_name: "Aki Ola Publications",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 6,
        item_id: 3,
        supplier_id: 3,
        unit_cost: "10.00",
        quantity: 20,
        total_cost: "200.00",
        procurement_date: "2024-10-27",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-27T07:13:05.267Z",
        status: "active",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        supplier_name: "Aki Ola Publications",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 1,
        item_id: 3,
        supplier_id: 1,
        unit_cost: "10.00",
        quantity: 50,
        total_cost: "500.00",
        procurement_date: "2024-10-08",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-03T14:26:05.873Z",
        status: "active",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        supplier_name: "CEPME",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 2,
        item_id: 1,
        supplier_id: 1,
        unit_cost: "20.00",
        quantity: 6,
        total_cost: "120.00",
        procurement_date: "2024-10-08",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-03T14:26:05.873Z",
        status: "active",
        item_name: "integrated science for class 2",
        category: "supply",
        supplier_name: "CEPME",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 3,
        item_id: 2,
        supplier_id: 1,
        unit_cost: "6.00",
        quantity: 20,
        total_cost: "120.00",
        procurement_date: "2024-10-08",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-03T14:26:05.873Z",
        status: "active",
        item_name: "integrated science for class 3",
        category: "supply",
        supplier_name: "CEPME",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 5,
        item_id: 1,
        supplier_id: 1,
        unit_cost: "50.00",
        quantity: 45,
        total_cost: "2250.00",
        procurement_date: "2024-09-29",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-03T15:19:38.539Z",
        status: "active",
        item_name: "integrated science for class 2",
        category: "supply",
        supplier_name: "CEPME",
        first_name: "admin",
        last_name: "admin",
      },
      {
        procurement_id: 4,
        item_id: 3,
        supplier_id: 1,
        unit_cost: "10.00",
        quantity: 10,
        total_cost: "100.00",
        procurement_date: "2024-09-29",
        brought_by: null,
        received_by: 15,
        received_at: "2024-10-03T15:19:38.539Z",
        status: "active",
        item_name: "Aki Ola Social Studies for Jhs ",
        category: "supply",
        supplier_name: "CEPME",
        first_name: "admin",
        last_name: "admin",
      },
    ];

    if (query) {
      const lowerQuery = query.toLowerCase();
      mockProcurementHistory = mockProcurementHistory.filter((procurement) => {
        return (
          procurement.item_name.toLowerCase().includes(lowerQuery) ||
          procurement.supplier_name.toLowerCase().includes(lowerQuery) ||
          procurement.first_name.toLowerCase().includes(lowerQuery) ||
          procurement.last_name.toLowerCase().includes(lowerQuery) ||
          procurement.category.toLowerCase().includes(lowerQuery) ||
          String(procurement.unit_cost).includes(lowerQuery)
        );
      });
    }

    return NextResponse.json(mockProcurementHistory, { status: 200 });
  } catch (error) {
    console.error("Error fetching procurement history (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
