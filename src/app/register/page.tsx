"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(`Usuario registrado: ${data.email}`);
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Registro
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Registrar
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.startsWith("Error") ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
