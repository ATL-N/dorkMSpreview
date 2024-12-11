import { NextResponse } from "next/server";

// app/api/department/adddepartment
export async function POST(req) {
  try {
    const body = await req.json();
    const { department_name, head_of_department, description } = body;

    // Basic validation (add more robust checks in a real application)
    if (!department_name || !head_of_department) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate checking for existing department (replace with actual DB logic later)
    const departmentExists =
      department_name.toLowerCase() === "existing department"; // Example: replace with your logic
    if (departmentExists) {
      return NextResponse.json(
        {
          error:
            "Department name already exists. Try adding another department.",
        },
        { status: 409 } // Conflict
      );
    }

    // Simulate database insertion (replace with actual DB logic later)
    const newDepartmentId = Math.floor(Math.random() * 1000) + 1; // Simulate ID generation
    console.log("Simulating adding new department:", {
      ...body,
      id: newDepartmentId,
    });

    return NextResponse.json(
      { message: "Department added successfully", id: newDepartmentId },
      { status: 201 } // Created
    );
  } catch (error) {
    console.error("Error simulating department creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
