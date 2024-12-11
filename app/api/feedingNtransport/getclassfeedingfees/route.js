import { NextResponse } from "next/server";

// /api/feedingNtransport/getclassfeedingfees
// GET /api/feedingNtransport/getclassfeedingfees?class_id=1&payment_date=2024-03-15
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const class_id = searchParams.get("class_id");
    const payment_date = searchParams.get("payment_date");

    if (!class_id || !payment_date) {
      return NextResponse.json(
        { error: "Missing required fields: class_id and payment_date" },
        { status: 400 }
      );
    }

    // Mock data based on the provided format
    const mockData = [
      {
        student_id: 1,
        student_name: "Dorkordi nelson1 coccus",
        class_id: parseInt(class_id), // Ensure class_id matches the requested one
        status: "active",
        default_feeding_fee: 150,
        default_transport_fee: 50,
        expected_total: 200,
        transportation_method: "School Bus",
        pick_up_point: "Central Park",
        current_feeding_fee: "150",
        current_transport_fee: "50",
        feeding_valid_until: "2024-04-30",
        transport_valid_until: "2024-04-30",
        total_fee: "200",
        payment_date: payment_date, // Use the requested payment_date
        collected_by: "user123",
        staff_id: "staff456",
        staff_name: "Jane Smith",
      },
      {
        student_id: 2,
        student_name: "Nyarkoh John Yaw",
        class_id: parseInt(class_id),
        status: "active",
        default_feeding_fee: 120,
        default_transport_fee: 0,
        expected_total: 120,
        transportation_method: "",
        pick_up_point: "",
        current_feeding_fee: "",
        current_transport_fee: "",
        feeding_valid_until: "",
        transport_valid_until: "",
        total_fee: "",
        payment_date: "",
        collected_by: "",
        staff_id: "",
        staff_name: "",
      },
      {
        student_id: 3,
        student_name: "Mensah Lisa Ama",
        class_id: parseInt(class_id),
        status: "active",
        default_feeding_fee: 150,
        default_transport_fee: 60,
        expected_total: 210,
        transportation_method: "Private Car",
        pick_up_point: "North Ridge",
        current_feeding_fee: "100",
        current_transport_fee: "",
        feeding_valid_until: "2024-03-31",
        transport_valid_until: "",
        total_fee: "100",
        payment_date: payment_date,
        collected_by: "user234",
        staff_id: "staff789",
        staff_name: "David Lee",
      },
      {
        student_id: 4,
        student_name: "Agyei Prince Kofi",
        class_id: parseInt(class_id),
        status: "active",
        default_feeding_fee: 100,
        default_transport_fee: 0,
        expected_total: 100,
        transportation_method: "",
        pick_up_point: "",
        current_feeding_fee: "100",
        current_transport_fee: "",
        feeding_valid_until: "2024-04-15",
        transport_valid_until: "",
        total_fee: "100",
        payment_date: payment_date,
        collected_by: "user345",
        staff_id: "staff101",
        staff_name: "Sarah Jones",
      },
      {
        student_id: 5,
        student_name: "Boateng Esther Akua",
        class_id: parseInt(class_id),
        status: "active",
        default_feeding_fee: 150,
        default_transport_fee: 70,
        expected_total: 220,
        transportation_method: "School Bus",
        pick_up_point: "West Legon",
        current_feeding_fee: "",
        current_transport_fee: "70",
        feeding_valid_until: "",
        transport_valid_until: "2024-05-31",
        total_fee: "70",
        payment_date: payment_date,
        collected_by: "user456",
        staff_id: "staff202",
        staff_name: "John Doe",
      },
      {
        student_id: 6,
        student_name: "Oppong Samuel Kwesi",
        class_id: 2, // Changed to class_id 2 for filtering
        status: "active",
        default_feeding_fee: 120,
        default_transport_fee: 50,
        expected_total: 170,
        transportation_method: "School Bus",
        pick_up_point: "East Legon",
        current_feeding_fee: "120",
        current_transport_fee: "50",
        feeding_valid_until: "2024-04-30",
        transport_valid_until: "2024-04-30",
        total_fee: "170",
        payment_date: "2024-03-15", // This payment date will be used if the request is for class_id 2
        collected_by: "user567",
        staff_id: "staff303",
        staff_name: "Emily White",
      },
    ];

    // Filter mock data based on class_id
    const filteredMockData = mockData.filter(
      (student) => student.class_id === parseInt(class_id)
    );

    // Format numbers as needed
    const formattedResponse = filteredMockData.map((row) => ({
      ...row,
      default_feeding_fee: parseFloat(row.default_feeding_fee) || 0,
      default_transport_fee: parseFloat(row.default_transport_fee) || 0,
      expected_total: parseFloat(row.expected_total) || 0,
      current_feeding_fee: row.current_feeding_fee
        ? parseFloat(row.current_feeding_fee)
        : "",
      current_transport_fee: row.current_transport_fee
        ? parseFloat(row.current_transport_fee)
        : "",
      total_fee: row.total_fee ? parseFloat(row.total_fee) : "",
    }));

    return NextResponse.json(formattedResponse, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
