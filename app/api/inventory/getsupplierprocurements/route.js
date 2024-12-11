import { NextResponse } from "next/server";

// /api/inventory/getsupplierprocurements

// GET /api/inventory/getProcurementsHistory?fromDate=2023-06-01&toDate=2023-06-30
// GET /api/inventory/getProcurementsHistory?query=someItemOrSupplier

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");
    console.log("supplier query", query);

    // Mock data (replace with your actual mock data)
    let mockProcurements = [
      {
        procurement_date: "2024-10-27",
        supplier_id: 3,
        supplier_name: "Aki Ola Publications",
        procured_items: [
          {
            procurement_id: 8,
            item_id: 3,
            item_name: "Aki Ola Social Studies for Jhs ",
            category: "supply",
            unit_cost: 4,
            quantity: 2,
            total_cost: 8,
            procurement_date: "2024-10-27",
          },
          {
            procurement_id: 7,
            item_id: 5,
            item_name: "Fullscap Books Note 3",
            category: "supply",
            unit_cost: 5,
            quantity: 5,
            total_cost: 25,
            procurement_date: "2024-10-27",
          },
          {
            procurement_id: 6,
            item_id: 3,
            item_name: "Aki Ola Social Studies for Jhs ",
            category: "supply",
            unit_cost: 10,
            quantity: 20,
            total_cost: 200,
            procurement_date: "2024-10-27",
          },
        ],
        group_total_cost: "233.00",
        received_by: { staff_id: 15, first_name: "admin", last_name: "admin" },
      },
      {
        procurement_date: "2024-10-08",
        supplier_id: 1,
        supplier_name: "CEPME",
        procured_items: [
          {
            procurement_id: 1,
            item_id: 3,
            item_name: "Aki Ola Social Studies for Jhs ",
            category: "supply",
            unit_cost: 10,
            quantity: 50,
            total_cost: 500,
            procurement_date: "2024-10-08",
          },
          {
            procurement_id: 2,
            item_id: 1,
            item_name: "integrated science for class 2",
            category: "supply",
            unit_cost: 20,
            quantity: 6,
            total_cost: 120,
            procurement_date: "2024-10-08",
          },
          {
            procurement_id: 3,
            item_id: 2,
            item_name: "integrated science for class 3",
            category: "supply",
            unit_cost: 6,
            quantity: 20,
            total_cost: 120,
            procurement_date: "2024-10-08",
          },
        ],
        group_total_cost: "740.00",
        received_by: { staff_id: 15, first_name: "admin", last_name: "admin" },
      },
      {
        procurement_date: "2024-09-29",
        supplier_id: 1,
        supplier_name: "CEPME",
        procured_items: [
          {
            procurement_id: 5,
            item_id: 1,
            item_name: "integrated science for class 2",
            category: "supply",
            unit_cost: 50,
            quantity: 45,
            total_cost: 2250,
            procurement_date: "2024-09-29",
          },
          {
            procurement_id: 4,
            item_id: 3,
            item_name: "Aki Ola Social Studies for Jhs ",
            category: "supply",
            unit_cost: 10,
            quantity: 10,
            total_cost: 100,
            procurement_date: "2024-09-29",
          },
        ],
        group_total_cost: "2350.00",
        received_by: { staff_id: 15, first_name: "admin", last_name: "admin" },
      },
    ];

    if (fromDate && toDate) {
      mockProcurements = mockProcurements.filter((procurement) => {
        const procurementDate = new Date(procurement.procurement_date);
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);
        return procurementDate >= startDate && procurementDate <= endDate;
      });
    }

    if (query) {
      console.log("running query if");
      const lowerQuery = query.toLowerCase();
      mockProcurements = mockProcurements.filter((procurement) => {
        return procurement.supplier_name.toLowerCase().includes(lowerQuery);
      });
    }

    if (mockProcurements.length === 0) {
      return NextResponse.json(
        { message: "No procurements found for the given criteria" },
        { status: 404 }
      );
    }
    return NextResponse.json(mockProcurements, { status: 200 });
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
