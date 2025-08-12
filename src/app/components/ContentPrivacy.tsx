import { ShieldCheck, Database, Settings2 } from "lucide-react";

export default function ContentPrivacy() {
  const policies = [
    {
      title: "Recopilación de Datos",
      description: (
        <>
          Recopilamos únicamente la información necesaria para brindar nuestros
          servicios:
          <ul className="list-disc list-inside mt-2 text-gray-300 text-left">
            <li>Información de contacto (nombre, email, teléfono)</li>
            <li>Datos de uso de la plataforma</li>
            <li>Preferencias y configuraciones</li>
          </ul>
        </>
      ),
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      hoverColor: "hover:bg-blue-900/40",
    },
    {
      title: "Uso de la Información",
      description: (
        <>
          Utilizamos tu información para:
          <ul className="list-disc list-inside mt-2 text-gray-300 text-left">
            <li>Personalizar tu experiencia en la plataforma</li>
            <li>Comunicarnos contigo sobre nuestros servicios</li>
            <li>Mejorar nuestros productos y servicios</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </>
      ),
      icon: Settings2,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      hoverColor: "hover:bg-green-900/40",
    },
    {
      title: "Tus Derechos",
      description: (
        <>
          Tienes derecho a acceder, rectificar, eliminar o portar tus datos
          personales en cualquier momento. Contacta con nosotros para ejercer
          estos derechos.
        </>
      ),
      icon: ShieldCheck,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      hoverColor: "hover:bg-yellow-900/40",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Políticas de Privacidad
      </h2>
      <div className="flex flex-col space-y-8">
        {policies.map(
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
              <div className="text-gray-300">{description}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
