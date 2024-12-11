import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body in addsemesterapi", body);

    const { grade_name, minimum_mark, maximum_mark, grade_remark } = body;

    if (
      !grade_name ||
      !minimum_mark ||
      !maximum_mark ||
      !grade_remark ||
      maximum_mark < minimum_mark
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields or maximum mark is lower than min mark",
        },
        { status: 400 }
      );
    }

    // Mock data and logic for checking existing grade name and range conflicts

    // Replace this with your actual mock data or logic for checking name conflicts
    const existingGradeNames = ["A", "B", "C", "D", "E", "F"];

    if (existingGradeNames.includes(grade_name)) {
      return NextResponse.json(
        {
          error:
            "Grade scheme name already exists. Try adding another grade scheme",
        },
        { status: 409 }
      );
    }

    // Replace this with your actual mock data or logic for checking range conflicts
    const existingGradeRanges = [
      { min: 0, max: 39 },
      { min: 40, max: 44 },
      { min: 45, max: 49 },
      { min: 50, max: 54 },
      { min: 55, max: 59 },
      { min: 60, max: 69 },
      { min: 70, max: 100 },
    ];

    for (const range of existingGradeRanges) {
      if (
        (minimum_mark >= range.min && minimum_mark <= range.max) ||
        (maximum_mark >= range.min && maximum_mark <= range.max) ||
        (range.min >= minimum_mark && range.min <= maximum_mark) ||
        (range.max >= minimum_mark && range.max <= maximum_mark)
      ) {
        return NextResponse.json(
          { error: "The new grade range conflicts with existing grades" },
          { status: 409 }
        );
      }
    }

    // If no conflicts, simulate successful insertion
    const newGradeId = Math.floor(Math.random() * 1000) + 1;

    return NextResponse.json(
      { message: "Grade scheme added successfully", id: newGradeId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding grade scheme (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
