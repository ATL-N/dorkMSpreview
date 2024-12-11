import { NextResponse } from "next/server";

//localhost:3000/api/staff/evaluation

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);
    const {
      evaluatee_id,
      evaluation_date,
      teaching_effectiveness,
      classroom_management,
      student_engagement,
      professionalism,
      comments,
      years_of_experience,
    } = body;

    // Validate input
    if (
      !evaluatee_id ||
      !evaluation_date ||
      !teaching_effectiveness ||
      !classroom_management ||
      !student_engagement ||
      !professionalism
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock evaluations data (expand this array for more tests)
    const mockEvaluations = [];

    // Calculate overall_rating (you might want to adjust the logic)
    const overall_rating =
      (parseFloat(teaching_effectiveness) +
        parseFloat(classroom_management) +
        parseFloat(student_engagement) +
        parseFloat(professionalism)) /
      4;

    // Create a new mock evaluation object
    const newEvaluation = {
      evaluation_id: mockEvaluations.length + 1, // Simple ID generation
      evaluatee_id,
      evaluation_date,
      teaching_effectiveness,
      classroom_management,
      student_engagement,
      professionalism,
      comments: comments || "",
      years_of_experience: years_of_experience || "",
      overall_rating: overall_rating.toFixed(2), // Format to 2 decimal places
    };

    // Add the new evaluation to the mock data
    mockEvaluations.push(newEvaluation);

    return NextResponse.json(
      {
        message: "Evaluation added successfully",
        evaluation_id: newEvaluation.evaluation_id,
        overall_rating: newEvaluation.overall_rating,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Failed to add evaluation" },
      { status: 500 }
    );
  }
}
