"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PwHide, PwShow } from "@/icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    console.log("Clicou login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6">Login The Zafio</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-700"
            >
              Login
            </label>
            <input
              type="login"
              id="login"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu login"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite a senha"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordVisible ? (
              <PwShow
                className="absolute h-8 w-8 right-4 top-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <PwHide
                className="absolute h-8 w-8 right-4 top-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="text-center mt-4">
            <a href="#" className="text-gray-700 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-4">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md w-full">
              Sign In With Google
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-700">Ainda não tem conta? </span>
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
          <div className="text-center mt-6 text-gray-500">
            Copyright 2024 Amigos Produções
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
