import { NextResponse } from "next/server";

//localhost:3000/api/fees/getfees

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    console.log("query", query);

    let mockData = [];

    if (query) {
      // Mock data for search (matching the query)
      const lowerQuery = query.toLowerCase();

      mockData = [
        {
          student_id: 1,
          photo:
            "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FdorkordiChannel.jpeg2024-08-21T22%3A50%3A58.566Z?alt=media&token=c4c32613-7f02-4936-84ad-fcb2e4b85767",
          first_name: "nelson1",
          last_name: "Dorkordi",
          other_names: "coccus",
          date_of_birth: "23/02/1999",
          gender: "Male",
          class_id: 2,
          amountowed: "400.00",
          residential_address: "Swedru senior high school",
          phone: "0551577446",
          email: "atlcoccus@gmail.comme",
          enrollment_date: "2024-08-21T00:00:00.000Z",
          national_id: "54246",
          birth_cert_id: "5454",
          role: "student",
          user_id: 29,
          status: "active",
          class_promoted_to: 2,
          id: 1,
          old_balance: "400.00",
          class_name: "class 2b",
        },
        {
          student_id: 2,
          photo:
            "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2Fdownload.jpeg2024-08-30T19%3A29%3A16.975Z?alt=media&token=9ef118ff-c2b5-4f65-9a61-5c2b2f0e4a23",
          first_name: "John",
          last_name: "Nyarkoh",
          other_names: "Yaw",
          date_of_birth: "22/09/2017",
          gender: "Male",
          class_id: 2,
          amountowed: "450.00",
          residential_address: "this is the second student",
          phone: "0551577446",
          email: "atlcoccus@gmail23.com",
          enrollment_date: "2024-08-30T00:00:00.000Z",
          national_id: "54246",
          birth_cert_id: "5454",
          role: "student",
          user_id: 30,
          status: "active",
          class_promoted_to: 2,
          id: 2,
          old_balance: "450.00",
          class_name: "class 2b",
        },
      ].filter(
        (student) =>
          student.first_name.toLowerCase().includes(lowerQuery) ||
          student.last_name.toLowerCase().includes(lowerQuery) ||
          student.class_name.toLowerCase().includes(lowerQuery)
      );
    } else {
      // Mock data for the complete list (no query)
      mockData = [
        {
          student_id: 5,
          photo: null,
          first_name: "Richmond",
          last_name: "Adasu ",
          other_names: "",
          date_of_birth: "08/06/1996",
          gender: "Male",
          class_id: 7,
          amountowed: "350.00",
          residential_address: "ghana post gps",
          phone: "055136961",
          email: "",
          enrollment_date: "2024-11-08T00:00:00.000Z",
          national_id: "5638954",
          birth_cert_id: "98745632",
          role: "student",
          user_id: 36,
          status: "active",
          class_promoted_to: 7,
          id: 5,
          old_balance: "350.00",
          class_name: "Class 3",
        },
        {
          student_id: 3,
          photo:
            "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FANGEL%20PROJECT%202-01.png2024-08-31T17%3A35%3A26.002Z?alt=media&token=62a33d0a-2478-4f77-8a45-ca893f273b2a",
          first_name: "Matilda ",
          last_name: "Attah ",
          other_names: "Emefa ",
          date_of_birth: "16/05/2009",
          gender: "Female",
          class_id: 4,
          amountowed: "871.50",
          residential_address: "Nkonya wurupong \nKwanyako",
          phone: "0504238397",
          email: "emefa@emefa.com",
          enrollment_date: "2024-08-31T00:00:00.000Z",
          national_id: "23564789",
          birth_cert_id: "98745632",
          role: "student",
          user_id: 31,
          status: "active",
          class_promoted_to: 7,
          id: 3,
          old_balance: "871.50",
          class_name: "JHS 2",
        },
        {
          student_id: 1,
          photo:
            "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2FdorkordiChannel.jpeg2024-08-21T22%3A50%3A58.566Z?alt=media&token=c4c32613-7f02-4936-84ad-fcb2e4b85767",
          first_name: "nelson1",
          last_name: "Dorkordi",
          other_names: "coccus",
          date_of_birth: "23/02/1999",
          gender: "Male",
          class_id: 2,
          amountowed: "400.00",
          residential_address: "Swedru senior high school",
          phone: "0551577446",
          email: "atlcoccus@gmail.comme",
          enrollment_date: "2024-08-21T00:00:00.000Z",
          national_id: "54246",
          birth_cert_id: "5454",
          role: "student",
          user_id: 29,
          status: "active",
          class_promoted_to: 2,
          id: 1,
          old_balance: "400.00",
          class_name: "class 2b",
        },
        {
          student_id: 4,
          photo: null,
          first_name: "Patience ",
          last_name: "Enyaah ",
          other_names: "Araba",
          date_of_birth: "30/09/1997",
          gender: "Female",
          class_id: 1,
          amountowed: "-100.00",
          residential_address: "Ghana post gps 25634",
          phone: "0547323204",
          email: "enyaahpat@gmail.com",
          enrollment_date: "2024-06-03T00:00:00.000Z",
          national_id: "02554575",
          birth_cert_id: "2356987",
          role: "student",
          user_id: 32,
          status: "active",
          class_promoted_to: 1,
          id: 4,
          old_balance: "-100.00",
          class_name: "Completed",
        },
        {
          student_id: 6,
          photo: null,
          first_name: "Emmanuel ",
          last_name: "Foli",
          other_names: "",
          date_of_birth: "08/01/1995",
          gender: "Male",
          class_id: 7,
          amountowed: "680.00",
          residential_address: "ghana post gps",
          phone: "055465235",
          email: "atlcoccus@gmail.com53535",
          enrollment_date: "2024-11-08T00:00:00.000Z",
          national_id: "6943158",
          birth_cert_id: "98745632",
          role: "student",
          user_id: 38,
          status: "active",
          class_promoted_to: 7,
          id: 6,
          old_balance: "680.00",
          class_name: "Class 3",
        },
        {
          student_id: 2,
          photo:
            "https://firebasestorage.googleapis.com/v0/b/school-management-e22be.appspot.com/o/images%2Fdownload.jpeg2024-08-30T19%3A29%3A16.975Z?alt=media&token=9ef118ff-c2b5-4f65-9a61-5c2b2f0e4a23",
          first_name: "John",
          last_name: "Nyarkoh",
          other_names: "Yaw",
          date_of_birth: "22/09/2017",
          gender: "Male",
          class_id: 2,
          amountowed: "450.00",
          residential_address: "this is the second student",
          phone: "0551577446",
          email: "atlcoccus@gmail23.com",
          enrollment_date: "2024-08-30T00:00:00.000Z",
          national_id: "54246",
          birth_cert_id: "5454",
          role: "student",
          user_id: 30,
          status: "active",
          class_promoted_to: 2,
          id: 2,
          old_balance: "450.00",
          class_name: "class 2b",
        },
      ];
    }

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
