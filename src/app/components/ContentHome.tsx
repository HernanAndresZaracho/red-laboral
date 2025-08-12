import { User, Search, MessageCircle } from "lucide-react";
//import CorrientesSVG from "../public/uploads/CorrientesSVG";
//import MisionesSVG from "path/to/misiones.svg";
//import ChacoSVG from "path/to/chaco.svg";
import CorrientesSVG from "@/test/svg/Corrientes.svg";
import MisionesSVG from "@/test/svg/Misiones.svg";
import ChacoSVG from "@/test/svg/Chaco.svg";
import Image from "next/image";

export default function ContentHome() {
  return (
    <div className="text-white">
      {/* Título y descripción */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Red Laboral</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Conectamos a personas que buscan empleo con empresas que necesitan
          talento. Ya sea que quieras ser contratado o busques contratar, aquí
          encontrarás tu oportunidad.
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          ¿Qué esperas para unirte?
        </h2>
        <p className="text-gray-400">
          Forma parte de la red laboral más confiable del NEA.
        </p>
      </div>

      {/* Cuadros con íconos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Cuadro 1 */}
        <div className="border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition">
          <User className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-bold mb-2">Regístrate</h3>
          <p className="text-gray-400">
            Crea tu perfil y sube tu CV para que las empresas puedan encontrarte
            y contratarte.
          </p>
        </div>

        {/* Cuadro 2 */}
        <div className="border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition">
          <Search className="w-12 h-12 mx-auto mb-4 text-green-400" />
          <h3 className="text-xl font-bold mb-2">Busca talento</h3>
          <p className="text-gray-400">
            Encuentra profesionales calificados para tu empresa en segundos.
          </p>
        </div>

        {/* Cuadro 3 */}
        <div className="border border-gray-700 rounded-xl p-6 text-center hover:border-yellow-500 transition">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Comunícate</h3>
          <p className="text-gray-400">
            Contáctanos y te ayudaremos a encontrar lo que necesitas.
          </p>
        </div>
      </div>

      {/* Conoce más de nosotros */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Conoce más de nosotros</h2>
        <p className="text-gray-400">
          Estamos presentes en las principales provincias del NEA.
        </p>
      </div>

      {/* Mapas simbólicos */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={ChacoSVG}
            alt="Chaco"
            width={66}
            height={64}
            className="mb-2 object-contain"
          />
          <span>Chaco</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={CorrientesSVG}
            alt="Corrientes"
            width={64}
            height={64}
            className="mb-2 object-contain"
          />
          <span>Corrientes</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={MisionesSVG}
            alt="Misiones"
            width={55}
            height={64}
            className="mb-2 object-contain"
          />
          <span>Misiones</span>
        </div>
      </div>
    </div>
  );
}
