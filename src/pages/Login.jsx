import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <label className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 mb-4 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            className="grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            placeholder="Username"
          />
        </label>
        <label className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            placeholder="Password"
          />
        </label>
        <button className="w-full bg-blue-600 text-white font-medium py-2 mt-4 rounded-lg hover:bg-blue-500 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
