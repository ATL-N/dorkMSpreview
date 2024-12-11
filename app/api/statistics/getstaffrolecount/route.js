import { NextResponse } from "next/server";

// /api/statistics/getstaffrolecount
export async function GET() {
  try {
    // Generate mock staff role count data
    const mockData = generateMockStaffRoleCountData();

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock staff role count data
function generateMockStaffRoleCountData() {
  const roles = [
    "teaching staff",
    "admin",
    "non teaching",
    "driver",
    "security",
  ];
  const mockData = [];

  for (let i = 0; i < roles.length; i++) {
    mockData.push({
      department: roles[i],
      count: Math.floor(Math.random() * 10) + 1, // Random count between 1 and 10
    });
  }

  // Sort by count in descending order (like the original query)
  mockData.sort((a, b) => b.count - a.count);

  return mockData;
}

export const dynamic = "force-dynamic";
