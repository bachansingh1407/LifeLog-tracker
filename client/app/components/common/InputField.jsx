"use client";
import { useState } from "react";
import { LuMail, LuLock, LuUser, LuEye, LuEyeOff } from "react-icons/lu";

/* =====================
   Reusable Input Component
===================== */
export function InputField({
  label,
  type = "text",
  icon,
  placeholder,
  value,
  onChange,
  error,
  rightElement
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className={`flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5
        ${error ? "border-red-400" : "border-gray-300 focus-within:border-indigo-500"}`}
      >
        {icon && <span className="text-gray-400">{icon}</span>}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
        />

        {rightElement}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* =====================
   Login Page
===================== */
export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">Log in to continue to Lifelog</p>

        <div className="space-y-4">
          <InputField
            label="Email"
            icon={<LuMail />}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            icon={<LuLock />}
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
            }
          />

          <button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Login
          </button>

          <p className="text-sm text-gray-500 text-center">
            Don’t have an account? <span className="text-indigo-600 font-medium cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* =====================
   Signup Page
===================== */
export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create account</h1>
        <p className="text-gray-500 text-sm mb-6">Start your Lifelog journey</p>

        <div className="space-y-4">
          <InputField
            label="Full Name"
            icon={<LuUser />}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <InputField
            label="Email"
            icon={<LuMail />}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            icon={<LuLock />}
            placeholder="Create a strong password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
            }
          />

          <button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Create Account
          </button>

          <p className="text-sm text-gray-500 text-center">
            Already have an account? <span className="text-indigo-600 font-medium cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
