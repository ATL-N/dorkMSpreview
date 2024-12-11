import { NextResponse } from "next/server";

// /api/health/viewhealthdetails/[user_id]

export async function GET(req, { params }) {
  const { user_id } = params;
  console.log("user_id", user_id);
  try {
    if (!user_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock Health Data - Replace with your actual mock data
    const mockHealthData = {
      medical_conditions: "headache",
      allergies: "banku",
      blood_group: "AB+",
      vaccination_status: "none done yet",
      last_physical_exam_date: null,
      created_at: "2024-08-21T22:51:03.531Z",
      updated_at: "2024-08-21T22:51:03.531Z",
      full_name: null,
    };

    if (user_id === "1") {
      return NextResponse.json(
        mockHealthData,
        { message: `1 record fetched succesfully` },
        { status: 200 }
      );
    } else {
      // Handle cases where no health record is found or other user_id values
      return NextResponse.json(
        { error: "No health record found for the given user" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching health data (simulated):", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
