"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMessage("Selecciona un archivo");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`Archivo subido: ${data.path}`);
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Subir archivo
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full text-gray-300 bg-gray-700 rounded-md border border-gray-600 p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Subir
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
