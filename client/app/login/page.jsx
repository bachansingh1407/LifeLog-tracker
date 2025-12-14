"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuMailCheck,
  LuBookLock,
  LuCloudLightning,
  LuSparkles,
  LuLineChart,
  LuBrain
} from "react-icons/lu";
import { InputField } from "../components/common/InputField";
import { GrBlog } from "react-icons/gr";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-poppins">
      
      {/* LEFT – Branding / Philosophy */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <GrBlog size={22} />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              LifeLog
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Build clarity.  
            <br />
            Track growth.  
            <br />
            Stay consistent.
          </h1>

          <p className="text-white/80 mb-10 leading-relaxed">
            LifeLog helps you turn ideas into action, habits into systems,
            and consistency into real progress.
          </p>

          <div className="space-y-4">
            <Feature icon={<LuSparkles />} text="Capture ideas & reflections effortlessly" />
            <Feature icon={<LuLineChart />} text="Visualize productivity & progress" />
            <Feature icon={<LuBrain />} text="Build mindful habits over time" />
          </div>
        </div>
      </div>

      {/* RIGHT – Login */}
      <div className="flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Sign in to continue your personal journey
            </p>

            <form className="space-y-5">
              <InputField
                label="Email"
                type="email"
                placeholder="you@example.com"
                icon={<LuMailCheck />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<LuBookLock />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-indigo-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg
                  bg-gradient-to-r from-indigo-500 to-purple-600
                  px-4 py-3 text-sm font-medium text-white
                  hover:opacity-90 transition"
              >
                <LuCloudLightning />
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-indigo-600 hover:underline"
              >
                Create one
              </Link>
            </div>
          </div>

         <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-indigo-600 hover:underline">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              © 2025 LifeLog — Designed for mindful growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small helper */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
}
