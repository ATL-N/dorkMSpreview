import { NextResponse } from "next/server";

// /api/inventory/suppliers/all
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addsupplierapi", body);

    const {
      supplier_name,
      contact_name,
      contact_phone,
      contact_email,
      address,
      details,
    } = body;

    if (!supplier_name || !contact_name || !contact_phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock data for simulating existing suppliers
    const existingSuppliers = [
      {
        supplier_name: "Existing Supplier",
        contact_name: "Existing Contact",
        contact_phone: "1234567890",
      },
    ];

    if (
      existingSuppliers.some(
        (supplier) =>
          supplier.supplier_name.toLowerCase() ===
            supplier_name.toLowerCase() &&
          supplier.contact_name.toLowerCase() === contact_name.toLowerCase() &&
          supplier.contact_phone === contact_phone
      )
    ) {
      return NextResponse.json(
        { error: "supplier name already exists. Try adding another supplier" },
        { status: 409 } // 409 Conflict
      );
    }

    const newSupplierId = Math.floor(Math.random() * 1000) + 1;

    return NextResponse.json(
      {
        message: `supplier (${supplier_name}) added successfully`,
        id: newSupplierId, // Return the new ID
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding supplier (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
