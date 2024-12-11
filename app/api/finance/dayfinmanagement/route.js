import { NextResponse } from "next/server";

// /api/finance/dayfinmanagement
export async function GET(req, { params }) {
  try {
    // Mock data
    const mockData = {
      stats: {
        dailyRevenue: 500,
        dailyPayers: 2,
        dailyExpenses: 150,
        weeklyRevenue: 2500,
        weeklyPayers: 10,
        weeklyExpenses: 700,
        outstandingPayments: 2651.5,
      },
      dailyReportData: [
        { date: "2024-12-02", revenue: 200, expenses: 50, profit: 150 },
        { date: "2024-12-03", revenue: 300, expenses: 100, profit: 200 },
        { date: "2024-12-04", revenue: 0, expenses: 0, profit: 0 },
        { date: "2024-12-05", revenue: 0, expenses: 0, profit: 0 },
        { date: "2024-12-06", revenue: 0, expenses: 0, profit: 0 },
        { date: "2024-12-07", revenue: 0, expenses: 0, profit: 0 },
        { date: "2024-12-08", revenue: 0, expenses: 0, profit: 0 },
      ],
      weeklyExpensesData: [
        { name: "Salaries", value: 40 },
        { name: "Utilities", value: 30 },
        { name: "Supplies", value: 20 },
        { name: "Rent", value: 10 },
      ],
      recentPaymentsForWeek: [
        {
          id: 101,
          student_name: "John Doe",
          amount: 200,
          old_balance: 500,
          new_balance: 300,
          date: "2024-12-02 10:00:00",
        },
        {
          id: 102,
          student_name: "Jane Smith",
          amount: 300,
          old_balance: 1000,
          new_balance: 700,
          date: "2024-12-03 14:30:00",
        },
      ],
      recentExpensesForWeek: [
        {
          id: 201,
          recipient_name: "Electric Company",
          amount: 100,
          expense_category: "Utilities",
          date: "2024-12-03 09:00:00",
        },
        {
          id: 202,
          recipient_name: "Office Depot",
          amount: 50,
          expense_category: "Supplies",
          date: "2024-12-02 15:00:00",
        },
      ],
    };

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error (simulated):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
