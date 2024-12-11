import { NextResponse } from "next/server";

// /api/inventory/suppliers/get

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Mock data (replace with your actual mock data)
    let mockSuppliers = [
      {
        supplier_id: 3,
        supplier_name: "Aki Ola Publications",
        contact_name: "Mr. Peter",
        contact_phone: "0545686123",
        contact_email: "aki@ola.com",
        address: "sdsdsd",
        details: "",
        status: "active",
      },
      {
        supplier_id: 1,
        supplier_name: "CEPME",
        contact_name: "Mr. Nelson",
        contact_phone: "054732204",
        contact_email: "atl@nel.com",
        address: "swedru ",
        details: "basic school girls uniform",
        status: "active",
      },
      // ... more mock suppliers
    ];

    if (query) {
      const lowerQuery = query.toLowerCase();
      mockSuppliers = mockSuppliers.filter((supplier) => {
        return (
          supplier.supplier_name.toLowerCase().includes(lowerQuery) ||
          supplier.contact_name.toLowerCase().includes(lowerQuery) ||
          supplier.contact_email.toLowerCase().includes(lowerQuery) ||
          supplier.address.toLowerCase().includes(lowerQuery) ||
          (supplier.details &&
            supplier.details.toLowerCase().includes(lowerQuery))
        );
      });
    }

    return NextResponse.json(mockSuppliers, { status: 200 });
  } catch (error) {
    console.error("Error fetching suppliers (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
