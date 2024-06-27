"use client"
import { useState } from "react";
import Button1 from "../Components/Common/Buttons/Button1";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3000/admin/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      await response.json();
      console.log("Login successful!");
      return router.push("/dashboard")
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-card/75 rounded-lg p-8 tablet:p-14 laptop:p-16 max-w-xs w-full z-10">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="bg-transparent outline-none border-b border-b-gray-800/75 px-3 py-1 focus-within:border-b-primary text-center"
            placeholder="Username"
            type="text"
            name="username"
            required
          />
          <input
            className="bg-transparent outline-none border-b border-b-gray-800/75 px-3 py-1 focus-within:border-b-primary text-center"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          {error && (
            <p className="text-red-500 text-[9px] text-center">{error}</p>
          )}
          <Button1
            title={loading ? "Logging in..." : "Login"}
            subtitle="Proof it"
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default Page;
