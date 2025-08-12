import React, { ChangeEvent, FormEvent, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Gracias por tu mensaje! Te responderemos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Contáctanos</h2>
      <p className="text-center text-gray-400 mb-12">
        Si tienes dudas, sugerencias o quieres saber más sobre Red Laboral,
        completa el formulario y te responderemos lo antes posible.
      </p>

      <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
        {/* Información de contacto arriba */}
        <div className="space-y-8 justify-items-center">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <span>contacto@redlaboral.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-green-400" />
            <span>+54 9 379 123 4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-yellow-400" />
            <span>Corrientes, Argentina</span>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/50 outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-green-500 focus:ring focus:ring-green-500/50 outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:ring focus:ring-yellow-500/50 outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring focus:ring-purple-500/50 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
