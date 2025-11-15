"use client";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();


  useEffect(() => {
    // Push a dummy state so back button triggers popstate
    window.history.pushState(null, "", window.location.href);

    const handleBack = () => {
      router.replace("/"); // Always go to Home
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Image */}
      {/* <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950 p-12">
        <div className="max-w-lg text-white text-center">
          <h2 className="text-4xl font-bold mb-4">INDIA'S FAVORITE CRM</h2>
          <p className="text-xl text-blue-100 mb-8">for accelerated business growth</p>
          <p className="text-lg text-blue-50">
            NexGen CRM helps 300,000+ businesses run their day-to-day operations better. Close more deals, build lasting customer relationships and grow your business effortlessly.
          </p>
        </div>
      </div> */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950 p-12">
  <div className="max-w-full">
    <Image
      src="/crm_lrftLogin.avif" // path relative to the public folder
      alt="CRM Left Image"
      width={600} // adjust width as needed
      height={900} // adjust height as needed
      className="object-contain"
    />
  </div>
</div>


      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10">
  <div className="flex flex-col items-center mb-4">

    {/* Custom NextGen Logo */}
    <div className="text-center">
      <h1 className="text-5xl font-extrabold tracking-tight flex items-center justify-center gap-1">
        <span className="text-black">Next</span>

        {/* X with curved stroke */}
        <span className="relative text-blue-600">
          X
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full rotate-[20deg]"></span>
        </span>

        <span className="text-blue-600">Gen</span>
      </h1>

      {/* CRM below */}
      {/* <p className="text-3xl font-bold text-gray-900 mt-1 tracking-wide">
        CRM
      </p> */}
    </div>
  </div>

  <p className="text-gray-600 text-center">
    Welcome back! Please login to your account.
  </p>
</div>


          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-800"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-900 hover:text-blue-950 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Log In
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-900 hover:text-blue-950 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
