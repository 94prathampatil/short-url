import React from "react";
import UrlForm from "../components/UrlForm";
import UserUrl from "../components/UserUrl";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full -mt-20 max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  );
};

export default Dashboard;
