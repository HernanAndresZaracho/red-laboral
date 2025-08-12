import { ShieldCheck, FileText, AlertCircle } from "lucide-react";

const termsData = [
  {
    title: "Aceptación de Términos",
    description:
      "Al utilizar nuestra plataforma, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con algún punto, por favor no uses nuestros servicios.",
    icon: ShieldCheck,
    color: "text-blue-400",
    bgColor: "bg-blue-900",
    hoverColor: "hover:bg-blue-800",
  },
  {
    title: "Uso Apropiado",
    description:
      "Los usuarios se comprometen a:\n\n• Usar la plataforma de manera legal y ética\n• No compartir contenido ofensivo o inapropiado\n• Respetar los derechos de otros usuarios",
    icon: FileText,
    color: "text-green-400",
    bgColor: "bg-green-900",
    hoverColor: "hover:bg-green-800",
  },
  {
    title: "Responsabilidades",
    description:
      "Nos esforzamos por mantener la plataforma funcionando correctamente, pero no podemos garantizar un servicio ininterrumpido. Los usuarios son responsables de mantener seguras sus credenciales de acceso.",
    icon: AlertCircle,
    color: "text-red-400",
    bgColor: "bg-red-900",
    hoverColor: "hover:bg-red-800",
  },
];

export default function ContentTerms() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Términos y Condiciones
      </h2>
      <div className="flex flex-col space-y-8">
        {termsData.map(
          ({ title, description, icon: Icon, color, bgColor, hoverColor }) => (
            <div
              key={title}
              className={`flex flex-col items-center p-6 rounded-xl border border-gray-700 ${bgColor} transition ${hoverColor} cursor-pointer text-center w-full whitespace-pre-line`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg mb-4 ${color} bg-white/10`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
