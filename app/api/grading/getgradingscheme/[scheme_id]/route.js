import { NextResponse } from "next/server";

// /api/grading/getgradingscheme/[scheme_id]/route.js

export async function GET(req, { params }) {
  const { scheme_id } = params;

  try {
    // Mock data (replace with your actual mock data)
    const mockGradingScheme = {
      gradescheme_id: 1,
      grade_name: "A",
      minimum_mark: "90.00",
      maximum_mark: "100.00",
      grade_remark: "EXCELLENT",
      status: "active",
    };

    if (scheme_id === "1") {
      return NextResponse.json(mockGradingScheme, { status: 200 });
    } else {
      // Return 404 or handle other scheme_id values
      return NextResponse.json(
        { error: "Grading scheme not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { scheme_id } = params;
  const body = await req.json();

  try {
    const { grade_name, minimum_mark, maximum_mark, grade_remark } = body;

    // Input validation (keep this part)
    if (
      !grade_name ||
      minimum_mark === undefined ||
      maximum_mark === undefined ||
      !grade_remark
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (parseFloat(maximum_mark) <= parseFloat(minimum_mark)) {
      return NextResponse.json(
        { error: "Maximum mark must be greater than minimum mark" },
        { status: 400 }
      );
    }

    // Mock grading scheme data and update logic (replace this section)
    let updatedScheme = {
      gradescheme_id: scheme_id,
      grade_name: grade_name,
      minimum_mark: minimum_mark,
      maximum_mark: maximum_mark,
      grade_remark: grade_remark,
      status: "active", // or whatever the appropriate status should be
    };

    // Simulate update conflicts based on mock data if needed
    const existingGrades = [
      // Example:
      { grade_name: "A", minimum_mark: 90, maximum_mark: 100 },
      { grade_name: "B", minimum_mark: 80, maximum_mark: 89 },
      { grade_name: "C", minimum_mark: 70, maximum_mark: 79 },
    ];

    if (
      existingGrades.some(
        (grade) =>
          grade.grade_name.toLowerCase() === grade_name.toLowerCase() &&
          grade.gradescheme_id !== parseInt(scheme_id)
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Grade scheme name already exists. Please choose a different name.",
        },
        { status: 409 }
      );
    }

    if (
      existingGrades.some((grade) => {
        if (grade.gradescheme_id === parseInt(scheme_id)) return false; // Ignore self for overlap check

        const newMin = parseFloat(minimum_mark);
        const newMax = parseFloat(maximum_mark);

        return (
          (newMin >= grade.minimum_mark && newMin <= grade.maximum_mark) ||
          (newMax >= grade.minimum_mark && newMax <= grade.maximum_mark) ||
          (grade.minimum_mark >= newMin && grade.minimum_mark <= newMax) ||
          (grade.maximum_mark >= newMin && grade.maximum_mark <= newMax)
        );
      })
    ) {
      return NextResponse.json(
        { error: "The new grade range conflicts with existing grades" },
        { status: 409 }
      );
    }

    // Simulate successful update. Replace with your actual mocking logic or data
    if (scheme_id === "999") {
      // Example: Simulate scheme not found
      return NextResponse.json(
        { error: "Grading scheme not found or inactive" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedScheme, { status: 200 });
  } catch (error) {
    console.error("Error updating grading scheme (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
