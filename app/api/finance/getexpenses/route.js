import { NextResponse } from "next/server";

// /api/finance/getexpenses

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    console.log("query", query);

    let mockData = [
      {
        expense_id: 9,
        recipient_name: "Master Ebo",
        expense_category: "Utilities",
        description: "no description",
        amount: "50.00",
        expense_date: "2024-11-07",
        invoice_number: "",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-11-07T21:35:46.646Z",
        id: 9,
        formatted_created_at: "2024-11-07T21:35",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 8,
        recipient_name: "Addo d",
        expense_category: "Maintenance",
        description: "this is the description from fees page",
        amount: "40.00",
        expense_date: "2024-10-26",
        invoice_number: "",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-10-26T18:11:09.066Z",
        id: 8,
        formatted_created_at: "2024-10-26T18:11",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 7,
        recipient_name: "mama esther",
        expense_category: "Utilities",
        description: "i dont have any comments",
        amount: "200.00",
        expense_date: "2024-10-26",
        invoice_number: "",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-10-26T18:09:12.819Z",
        id: 7,
        formatted_created_at: "2024-10-26T18:09",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 6,
        recipient_name: "Master Ebo",
        expense_category: "Maintenance",
        description: "",
        amount: "20.00",
        expense_date: "2024-10-08",
        invoice_number: "",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-10-08T23:07:25.467Z",
        id: 6,
        formatted_created_at: "2024-10-08T23:07",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 5,
        recipient_name: "Master Ebo",
        expense_category: "Maintenance",
        description: "this is the latest item added",
        amount: "420.00",
        expense_date: "2024-09-20",
        invoice_number: "invoice",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-09-20T19:43:40.824Z",
        id: 5,
        formatted_created_at: "2024-09-20T19:43",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 4,
        recipient_name: "Amam Cobina",
        expense_category: "Utilities",
        description: "this is the second item updated",
        amount: "700.00",
        expense_date: "2024-09-16",
        invoice_number: "5jjhff",
        supplier_id: null,
        staff_id: null,
        user_id: 26,
        created_at: "2024-09-16T21:40:14.099Z",
        id: 4,
        formatted_created_at: "2024-09-16T21:40",
        supplier_name: null,
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 3,
        recipient_name: "CEPME",
        expense_category: "Supplies",
        description: "supplies made",
        amount: "40.00",
        expense_date: "2024-09-16",
        invoice_number: "401523",
        supplier_id: 1,
        staff_id: null,
        user_id: 26,
        created_at: "2024-09-16T17:01:03.817Z",
        id: 3,
        formatted_created_at: "2024-09-16T17:01",
        supplier_name: "CEPME",
        staff_name: " ",
        user_name: "adminadmin",
      },
      {
        expense_id: 2,
        recipient_name: "Ernest  Wilson",
        expense_category: "Salaries",
        description: "bawuliar updated",
        amount: "60.00",
        expense_date: "2024-08-28",
        invoice_number: "40",
        supplier_id: null,
        staff_id: 12,
        user_id: 26,
        created_at: "2024-08-29T07:45:29.013Z",
        id: 2,
        formatted_created_at: "2024-08-29T07:45",
        supplier_name: null,
        staff_name: "Ernest  Wilson",
        user_name: "adminadmin",
      },
      {
        expense_id: 1,
        recipient_name: "Ernest  Wilson",
        expense_category: "Salaries",
        description: "this is the first description\ni am adding the user id",
        amount: "60.00",
        expense_date: "2024-08-28",
        invoice_number: "50",
        supplier_id: 1,
        staff_id: 12,
        user_id: 26,
        created_at: "2024-08-28T22:23:15.592Z",
        id: 1,
        formatted_created_at: "2024-08-28T22:23",
        supplier_name: "CEPME",
        staff_name: "Ernest  Wilson",
        user_name: "adminadmin",
      },
    ];


    if (query) {
      const lowerQuery = query.toLowerCase();
      mockData = mockData.filter((expense) => {
        return (
          expense.recipient_name.toLowerCase().includes(lowerQuery) ||
          expense.expense_category.toLowerCase().includes(lowerQuery) ||
          expense.description.toLowerCase().includes(lowerQuery) ||
          (expense.supplier_name &&
            expense.supplier_name.toLowerCase().includes(lowerQuery)) ||
          expense.staff_name.toLowerCase().includes(lowerQuery) ||
          expense.user_name.toLowerCase().includes(lowerQuery)
        );
      });
    }

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
