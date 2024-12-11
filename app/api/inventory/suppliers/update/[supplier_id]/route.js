import { NextResponse } from "next/server";

// /api/inventory/suppliers/update/[supplier_id]/route.js

export async function PUT(req, { params }) {
  const { supplier_id } = params;

  try {
    const body = await req.json();
    console.log("body in addsupplierapi", body);

    const {
      supply_id,
      supplier_name,
      contact_name,
      contact_phone,
      contact_email,
      address,
      details,
      user_id,
    } = body;

    if (!supply_id || !supplier_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (supply_id != supplier_id) {
      return NextResponse.json(
        {
          error:
            "You are not authorised to perform this update. Contact the administrator",
        },
        { status: 400 }
      );
    }

    // Mock data (replace with your actual mock data or logic)
    const existingSuppliers = [
      {
        supplier_id: "1", // Ensure this is a string to match params
        supplier_name: "Existing Supplier A",
        contact_name: "Existing Contact A",
        contact_phone: "111-111-1111",
        contact_email: "existingA@example.com",
        address: "123 Main St",
        details: "Existing details A",
        user_id: "101", // Example user ID
      },
      {
        supplier_id: "2", // Ensure this is a string to match params
        supplier_name: "Existing Supplier B",
        contact_name: "Existing Contact B",
        contact_phone: "222-222-2222",
        contact_email: "existingB@example.com",
        address: "456 Oak Ave",
        details: "Existing details B",
        user_id: "102", // Example user ID
      },
      // Add more mock suppliers as needed
    ];

    // Simulate checking if the supplier exists
    const existingSupplierIndex = existingSuppliers.findIndex(
      (supplier) => supplier.supplier_id === supplier_id
    );

    if (existingSupplierIndex === -1) {
      return NextResponse.json(
        { error: "Supplier not found" },
        { status: 404 }
      );
    }

    // Simulate checking for duplicate supplier name
    const isDuplicate = existingSuppliers.some(
      (supplier) =>
        supplier.supplier_id !== supplier_id &&
        supplier.supplier_name.toLowerCase() === supplier_name.toLowerCase()
    );

    if (isDuplicate) {
      return NextResponse.json(
        { error: "Supplier name already exists. Choose a different name." },
        { status: 409 } // 409 Conflict
      );
    }

    // Simulate updating the supplier (replace this with actual update logic if needed)
    const updatedSupplier = {
      ...existingSuppliers[existingSupplierIndex], // Copy existing data
      supplier_name, // Update with new values from request body
      contact_name,
      contact_phone,
      contact_email,
      address,
      details,
    };

    // Replace the old supplier with the updated one in the mock data
    existingSuppliers[existingSupplierIndex] = updatedSupplier;

    return NextResponse.json(
      {
        message: `Supplier (${supplier_name}) updated successfully`,
        supplier: supplier_name, // Return the updated supplier name
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating supplier (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
