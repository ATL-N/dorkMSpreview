import { NextResponse } from "next/server";

//localhost:3000/api/classes/getclassbyId/[id]

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Dummy data (replace with your actual class data)
    const dummyClassData = {
      class_id: 1,
      class_name: "Class 1A",
      class_level: "Pre School",
      capacity: 50,
      room_name: "room 5",
      staff_id: 2,
      status: "active",
      created_at: "2024-08-13T19:47:47.312Z",
      updated_at: "2024-08-13T19:47:47.312Z",
    };

    if (!id) {
      // Check if id is provided
      return NextResponse.json(
        { error: "Class ID is required" },
        { status: 400 }
      );
    }
    if (id != dummyClassData.class_id) {
      //check if class id exist
      return NextResponse.json({ error: "Class not found" }, { status: 404 });
    }

    return NextResponse.json(dummyClassData, { status: 200 });
  } catch (error) {
    console.error("Error fetching dummy data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  console.log("body", body);

  try {
    const { class_name, class_level, staff_id, room_number } = body;

    if (!class_name || !staff_id || !class_level || !room_number) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate successful database update
    console.log(`Simulating update for class ID ${id}:`, body);

    return NextResponse.json(
      { message: `Update for ${class_name} complete` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error simulating class update:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
