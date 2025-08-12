import {
  Home,
  PartyPopper,
  Briefcase,
  Handshake,
  Trees,
  PawPrint,
  Car,
  Palette,
  Dumbbell,
  Scissors,
  Monitor,
  Building,
  ChefHat,
  Mic,
  BarChart,
  Globe,
  Wrench,
  Landmark,
  HeartPulse,
  Hammer,
  Book,
} from "lucide-react";

export default function ContentCategories() {
  const categorias = [
    {
      icon: Home,
      titulo: "Hogar y mantenimiento",
      descripcion:
        "Pintores, electricistas, plomeros, jardinería, limpieza del hogar… entre otros.",
    },
    {
      icon: PartyPopper,
      titulo: "Organiza tu evento",
      descripcion:
        "Fotógrafos, DJ, decoradores, catering, animadores… entre otros.",
    },
    {
      icon: Briefcase,
      titulo: "Ventas y Comercial",
      descripcion:
        "Vendedores, representantes comerciales, asesoría en ventas, telemarketers… entre otros.",
    },
    {
      icon: Handshake,
      titulo: "Asistencias y seguridad",
      descripcion:
        "Guardias, acompañantes, asistencia a personas mayores, personal de seguridad… entre otros.",
    },
    {
      icon: Trees,
      titulo: "Parques y exteriores",
      descripcion:
        "Parquización, poda, mantenimiento de espacios verdes, paisajismo… entre otros.",
    },
    {
      icon: PawPrint,
      titulo: "Mascotas y más",
      descripcion:
        "Paseadores, cuidadores, veterinarios, adiestradores… entre otros.",
    },
    {
      icon: Car,
      titulo: "Cuida tu auto",
      descripcion:
        "Mecánicos, lavaderos, chapa y pintura, instalación de accesorios… entre otros.",
    },
    {
      icon: Palette,
      titulo: "Cultura y artes",
      descripcion:
        "Profesores de arte, música, danza, talleres creativos, fotógrafos artísticos… entre otros.",
    },
    {
      icon: Dumbbell,
      titulo: "Deportistas",
      descripcion:
        "Profesores de tenis, natación, gimnasia, entrenadores personales, yoga… entre otros.",
    },
    {
      icon: Scissors,
      titulo: "Belleza y estilo",
      descripcion:
        "Peluquería, maquillaje, barbería, manicura, estética corporal… entre otros.",
    },
    {
      icon: Monitor,
      titulo: "Servicios digitales",
      descripcion:
        "Community managers, diseño gráfico, edición de video, desarrollo web… entre otros.",
    },
    {
      icon: Building,
      titulo: "Salón y atención al público",
      descripcion:
        "Recepcionistas, cajeros, personal de atención al cliente, anfitriones… entre otros.",
    },
    {
      icon: ChefHat,
      titulo: "Brigada de cocina",
      descripcion:
        "Cocineros, ayudantes de cocina, panaderos, pasteleros, chefs… entre otros.",
    },
    {
      icon: Mic,
      titulo: "Comunicadores de la voz",
      descripcion:
        "Locutores, cantantes, narradores, conductores radiales… entre otros.",
    },
    {
      icon: BarChart,
      titulo: "Producción y gestión",
      descripcion:
        "Gestores de proyectos, producción de eventos, coordinación de equipos… entre otros.",
    },
    {
      icon: Globe,
      titulo: "Desarrollo sustentable",
      descripcion:
        "Energías renovables, agricultura ecológica, reciclaje, permacultura… entre otros.",
    },
    {
      icon: Wrench,
      titulo: "Reparaciones y soluciones",
      descripcion:
        "Técnicos de electrodomésticos, gasistas, herreros, cerrajeros… entre otros.",
    },
    {
      icon: Landmark,
      titulo: "Profesiones con títulos",
      descripcion:
        "Abogados, contadores, arquitectos, ingenieros, médicos… entre otros.",
    },
    {
      icon: HeartPulse,
      titulo: "Salud y terapias",
      descripcion:
        "Fisioterapeutas, masajistas, psicólogos, nutricionistas, acupuntura… entre otros.",
    },
    {
      icon: Hammer,
      titulo: "Construcción",
      descripcion:
        "Albañiles, techistas, colocadores de cerámica, plomeros, yeseros… entre otros.",
    },
    {
      icon: Book,
      titulo: "Educación y aprendizaje",
      descripcion:
        "Clases particulares, profesores de idiomas, apoyo escolar, talleres… entre otros.",
    },
  ];

  return (
    <div className="text-white max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Categorías de Servicios
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Encuentra profesionales o registra tu talento en cualquiera de nuestras
        categorías.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categorias.map((cat, index) => {
          const Icono = cat.icon;
          return (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition"
            >
              <Icono className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">{cat.titulo}</h3>
              <p className="text-gray-400">{cat.descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
