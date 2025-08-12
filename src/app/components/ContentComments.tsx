import { Wrench, Zap, BookOpen, Flame, Camera, Leaf } from "lucide-react";

export default function ContentComments() {
  const comments = [
    {
      icon: <Wrench className="w-10 h-10 text-blue-400 mb-4" />,
      name: "Marito",
      text: "Soy plomero y antes perdía muchos clientes porque me llamaban justo cuando estaba trabajando. Ahora me mandan WhatsApp directo y no pierdo ningún laburo.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400 mb-4" />,
      name: "Javier",
      text: "Siempre me costaba que la gente me encontrara rápido. Con la plataforma, en un día ya me estaban escribiendo para hacer arreglos.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-400 mb-4" />,
      name: "Julieta",
      text: "Antes tenía que estar todo el día subiendo avisos en Facebook. Ahora me contactan directo y lleno mis horarios sin esfuerzo.",
    },
    {
      icon: <Flame className="w-10 h-10 text-red-400 mb-4" />,
      name: "Juan",
      text: "Antes la gente me dejaba mensajes de voz y no podía contestar. Ahora me mandan WhatsApp, veo el mensaje y coordino al toque.",
    },
    {
      icon: <Camera className="w-10 h-10 text-pink-400 mb-4" />,
      name: "Cristina",
      text: "Siempre me escribían a Instagram y se me perdían mensajes. Con esta plataforma, todo llega directo y es mucho más fácil organizarme.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-400 mb-4" />,
      name: "Julian",
      text: "Mil veces me llamaban cuando estaba con la motosierra y no escuchaba nada. Ahora me llega todo por WhatsApp y no pierdo clientes.",
    },
  ];

  return (
    <div className="text-white max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Opiniones</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comments.map((c, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition"
          >
            {c.icon}
            <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
            <p className="text-gray-400 text-sm">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
