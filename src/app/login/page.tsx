"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.error) {
      setMessage("Credenciales inválidas");
    } else {
      setMessage("Login exitoso ✅");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Iniciar sesión
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("inválidas") ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
