"use client";

import React, { useState } from "react";

type userInfo = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<userInfo>({
    email: "",
    password: "",
  });

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(loginInfo);
  };

  return (
    <div className="h-screen w-100 grid place-items-center">
      <div className="bg-white shadow-lg w-1/3 py-5 flex flex-col gap-2 justify-center items-center">
        <div className="relative mb-4 min-w-full px-10">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLoginInfo({
                ...loginInfo,
                email: event.target.value,
              });
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 min-w-full px-10">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLoginInfo({
                ...loginInfo,
                password: event.target.value,
              });
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
