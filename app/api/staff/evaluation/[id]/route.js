import { NextResponse } from "next/server";

//localhost:3000/api/staff/evaluation/[id]

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Mock evaluations data (expand this for more realistic testing)
    const mockEvaluations = [
      {
        evaluation_id: 1,
        evaluatee_id: parseInt(id), // Match the ID from the URL
        evaluation_date: "10/09/2024",
        teaching_effectiveness: "3.0",
        classroom_management: "4.0",
        student_engagement: "4.0",
        professionalism: "5.0",
        overall_rating: "4.0",
        years_of_experience: 11,
        comments: "",
      },
      {
        evaluation_id: 2,
        evaluatee_id: parseInt(id),
        evaluation_date: "06/09/2024",
        teaching_effectiveness: "5.0",
        classroom_management: "5.0",
        student_engagement: "4.0",
        professionalism: "3.0",
        overall_rating: "4.3",
        years_of_experience: 10,
        comments: "this is my second comment",
      },
      {
        evaluation_id: 3,
        evaluatee_id: 123, // Different evaluatee_id for testing
        evaluation_date: "06/09/2024",
        teaching_effectiveness: "5.0",
        classroom_management: "5.0",
        student_engagement: "4.0",
        professionalism: "3.0",
        overall_rating: "4.3",
        years_of_experience: 10,
        comments: "this is my second comment",
      },
    ];

    // Filter evaluations for the requested evaluatee_id
    const filteredEvaluations = mockEvaluations.filter(
      (evaluation) => evaluation.evaluatee_id === parseInt(id)
    );

    if (filteredEvaluations.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    //sort in descending order by evaluation ID
    filteredEvaluations.sort((a, b) => b.evaluation_id - a.evaluation_id);

    return NextResponse.json(filteredEvaluations, { status: 200 });
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params; // This is the evaluation_id

  try {
    const body = await req.json();
    const {
      evaluation_date,
      teaching_effectiveness,
      classroom_management,
      student_engagement,
      professionalism,
      overall_rating,
      years_of_experience,
      comments,
    } = body;

    // Mock evaluations data (make sure this matches your GET route)
    const mockEvaluations = [
      {
        evaluation_id: 1,
        evaluatee_id: 101,
        evaluation_date: "10/09/2024",
        teaching_effectiveness: "3.0",
        classroom_management: "4.0",
        student_engagement: "4.0",
        professionalism: "5.0",
        overall_rating: "4.0",
        years_of_experience: 11,
        comments: "",
      },
      {
        evaluation_id: 2,
        evaluatee_id: 101,
        evaluation_date: "06/09/2024",
        teaching_effectiveness: "5.0",
        classroom_management: "5.0",
        student_engagement: "4.0",
        professionalism: "3.0",
        overall_rating: "4.3",
        years_of_experience: 10,
        comments: "this is my second comment",
      },
      {
        evaluation_id: 3,
        evaluatee_id: 123, // Different evaluatee_id for testing
        evaluation_date: "06/09/2024",
        teaching_effectiveness: "5.0",
        classroom_management: "5.0",
        student_engagement: "4.0",
        professionalism: "3.0",
        overall_rating: "4.3",
        years_of_experience: 10,
        comments: "this is my second comment",
      },
    ];

    // Find the index of the evaluation to update
    const evaluationIndex = mockEvaluations.findIndex(
      (evaluation) => evaluation.evaluation_id === parseInt(id)
    );

    if (evaluationIndex === -1) {
      return NextResponse.json(
        { error: "Evaluation not found" },
        { status: 404 }
      );
    }

    // Update the evaluation data
    mockEvaluations[evaluationIndex] = {
      ...mockEvaluations[evaluationIndex],
      evaluation_date,
      teaching_effectiveness,
      classroom_management,
      student_engagement,
      professionalism,
      overall_rating,
      years_of_experience,
      comments,
    };

    return NextResponse.json(
      { message: "Evaluation updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
