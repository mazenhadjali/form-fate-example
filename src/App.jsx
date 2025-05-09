import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import MoneyTransfer from "./pages/MoneyTransfer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 animate-gradient-xy">
      <Navbar />

      <main className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Wrap routed pages in a “glass” card */}
          <Routes>
            {/* Redirect base path to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/transfer" element={<MoneyTransfer />} />

            {/* Catch-all 404 */}
            <Route
              path="*"
              element={
                <div className="text-center text-gray-700">
                  <h2 className="text-2xl font-semibold mb-2">404</h2>
                  <p>Page not found</p>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
