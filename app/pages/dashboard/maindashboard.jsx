"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminDashboard from "./admindashboard/page";
import ParentDashboard from "./parentdashboard/parentdashboard";
import Studentdashboard from "./studentdashboard/page";
import TeacherDashboard from "./teacherdashboard/page";
import LoadingPage from "../../components/generalLoadingpage";

const Maindashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log('user session data:',session )

  if (status === "loading") {
    return (
      <div className="text-cyan-700">
        <LoadingPage />
      </div>
    );
  }

  // useEffect(() => {
  //   // Wait for the session to load before rendering the component
  //   if (status === "loading") {
  //     return;
  //   }
  // }, [status, router]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //    router.push("/authentication/login");
  //   // console.log("running the !session");
  //   // return <div className="flex">Unauthorized</div>;
  // }

  return (
    // <>
    <div className="flex-1 ml-0 md:ml-16 mt-16 mb-1 p-6 pb-0 bg-gray-100">
      {/* <Navigation /> */}

      {session?.user?.roles?.includes("admin") && <AdminDashboard />}
      {session?.user?.roles?.includes("parent") && <ParentDashboard user_id={session?.user?.id} />}
      {session?.user?.role === "student" && <Studentdashboard />}
      {session?.user?.role === "teaching staff" && <TeacherDashboard />}
    </div>
  );
};

export default Maindashboard;
