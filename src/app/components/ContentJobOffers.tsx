import { BriefcaseBusiness, Wrench } from "lucide-react";

export default function ContentJobOffers() {
  return (
    <div className="text-white max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Ofertas y Funcionalidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cuadro 1: Ofertas */}
        <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition">
          <BriefcaseBusiness className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-4">Utiliza la sección Ofertas</h3>
          <p className="text-gray-400 mb-4">
            En <span className="text-blue-400 font-semibold">Red Laboral</span>{" "}
            cargamos diariamente ofertas laborales recopiladas de distintas
            fuentes como redes sociales y páginas web de todo el país.
          </p>
          <p className="text-gray-400 mb-4">
            Compartimos ofertas con datos de contacto y descripción completa
            para ayudarte a encontrar empleo más fácilmente. Aunque no
            garantizamos su veracidad, trabajamos con compromiso y de forma
            gratuita.
          </p>
          <p className="text-gray-400 mb-4">
            Puedes filtrar por provincia, ciudad y rubro para agilizar tu
            búsqueda.
          </p>
          <p className="text-gray-400">
            ¿Quieres publicar una vacante o necesitas un profesional? Escríbenos
            a nuestro WhatsApp:
            <span className="text-green-400 font-semibold">
              {" "}
              +54 9 11 7898 2328
            </span>{" "}
            y la publicaremos sin costo.
          </p>
        </div>

        {/* Cuadro 2: Funcionalidad en Desarrollo */}
        <div className="border border-gray-700 rounded-xl p-6 hover:border-green-500 transition">
          <Wrench className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-xl font-bold mb-4">
            Funcionalidad en Desarrollo
          </h3>
          <p className="text-gray-400 mb-6">
            Estamos trabajando para incluir herramientas que faciliten la
            conexión entre empresas y profesionales:
          </p>

          {/* Subcuadro Empresas */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-lg text-blue-300 mb-2">
              Para Empresas
            </h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Publicar ofertas laborales directamente</li>
              <li>Gestionar postulaciones</li>
              <li>Filtrar candidatos</li>
            </ul>
          </div>

          {/* Subcuadro Profesionales */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-lg text-green-300 mb-2">
              Para Profesionales
            </h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Armar tu Perfil y/o CV</li>
              <li>Enviar CV con un clic</li>
              <li>Activar o desactivar visibilidad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
