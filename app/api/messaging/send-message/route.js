import { NextResponse } from "next/server";
import axios from "axios"; // You might still need axios for other parts of your app

// /api/messaging/send-message
export async function POST(req) {
  const body = await req.json();
  const { message, recipients } = body;

  // Mock response data (you can customize this)
  const mockResponse = {
    data: {
      status: "success",
      message: "Mock message sent successfully!",
      message_id: "mock-message-id-123",
      recipients: recipients.map((recipient) => ({
        number: recipient,
        status: "success",
        message_id: `mock-message-id-${recipient}`,
      })),
    },
  };

  // Simulate a delay (optional, but makes it more realistic)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    // Instead of making a real API call, return the mock response
    // const response = await axios({
    //   method: "post",
    //   url: process.env.ARKESEL_URL,
    //   headers: {
    //     "api-key": process.env.ARKESEL_API_KEY,
    //   },
    //   data,
    // });

    // return NextResponse.json(
    //   { message: "Message sent successfully" },
    //   { status: 201 }
    // );

    return NextResponse.json(mockResponse.data, { status: 200 }); // Assuming success
  } catch (error) {
    // Simulate an error response (optional)
    const mockErrorResponse = {
      response: {
        data: {
          status: "error",
          message: "Mock error sending message",
        },
        status: 500,
      },
    };

    return NextResponse.json(mockErrorResponse.response.data, {
      status: mockErrorResponse.response.status,
    });
  }
}
