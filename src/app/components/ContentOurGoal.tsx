import { Star, UserCheck, RefreshCw, Globe2 } from "lucide-react";

export default function ContentOurGoal() {
  const objectives = [
    {
      title: "Excelencia en el Servicio",
      description:
        "Brindar servicios de la más alta calidad que superen las expectativas de nuestros clientes.",
      icon: Star,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      hoverColor: "hover:bg-yellow-900/40",
    },
    {
      title: "Enfoque en el Usuario",
      description:
        "Poner siempre al usuario en el centro de todas nuestras decisiones y desarrollos.",
      icon: UserCheck,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      hoverColor: "hover:bg-blue-900/40",
    },
    {
      title: "Innovación Continua",
      description:
        "Mantenernos a la vanguardia tecnológica para ofrecer soluciones innovadoras.",
      icon: RefreshCw,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      hoverColor: "hover:bg-green-900/40",
    },
    {
      title: "Impacto Positivo",
      description:
        "Generar un impacto positivo en la comunidad y el medio ambiente.",
      icon: Globe2,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      hoverColor: "hover:bg-purple-900/40",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Nuestros Objetivos
      </h2>
      <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto">
        Trabajamos para construir juntos un espacio donde nazcan oportunidades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {objectives.map(
          ({ title, description, icon: Icon, color, bgColor, hoverColor }) => (
            <div
              key={title}
              className={`flex flex-col items-center p-6 rounded-xl border border-gray-700 ${bgColor} transition ${hoverColor} cursor-pointer text-center`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg mb-4 ${color} bg-white/10`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
