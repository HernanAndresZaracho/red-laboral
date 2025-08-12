import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { name: "WorkPro Solutions", logo: "/sponsors/workpro.png" },
    { name: "Manos Argentinas", logo: "/sponsors/manos.png" },
    { name: "RedConnect", logo: "/sponsors/redconnect.png" },
    { name: "Herramientas 360", logo: "/sponsors/herramientas.png" },
    { name: "EcoTrabajo", logo: "/sponsors/ecotrabajo.png" },
    { name: "TalentoNEA", logo: "/sponsors/talentonea.png" },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Nuestros Patrocinadores
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Empresas que apoyan el crecimiento de Red Laboral.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {sponsors.map((sponsor, i) => (
          <div
            key={i}
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center w-36 h-36 shadow-lg">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <span className="mt-4 text-lg font-semibold text-gray-300 group-hover:text-white transition">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-gray-400 max-w-2xl mx-auto">
        <p className="text-lg font-semibold">PRÓXIMAMENTE</p>
        <p className="mt-2">
          Estamos trabajando en un programa especial para empresas que quieran
          apoyar el crecimiento de nuestra plataforma.
        </p>
      </div>
    </div>
  );
}
