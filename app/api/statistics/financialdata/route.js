import { NextResponse } from "next/server";

// /api/statistics/financialdata
export async function GET(req) {
  try {
    // Generate mock financial data
    const mockData = generateMockFinancialData();

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error generating mock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Function to generate mock financial data
function generateMockFinancialData() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const yearlyData = [];

  for (let i = 0; i < months.length; i++) {
    yearlyData.push({
      month: months[i],
      income: Math.floor(Math.random() * 2000) + 100, // Random income between 100 and 2100
      expenses: Math.floor(Math.random() * 1500) + 50, // Random expenses between 50 and 1550
    });
  }

  const currentMonthRevenue = Math.floor(Math.random() * 500) + 100; // Random revenue between 100 and 600
  const currentDayRevenue = Math.floor(Math.random() * 100) + 20; // Random revenue between 20 and 120

  return {
    yearlyData: yearlyData,
    currentMonthRevenue: currentMonthRevenue,
    currentDayRevenue: currentDayRevenue,
  };
}

export const dynamic = "force-dynamic";
