"use client";

export type MenuItem =
  | "home"
  | "createProfile"
  | "services"
  | "jobOffers"
  | "comments"
  | "faq"
  | "sponsors"
  | "contact"
  | "social"
  | "ourGoal"
  | "privacy"
  | "terms";

interface SidebarProps {
  selected: MenuItem;
  onSelect: (id: MenuItem) => void;
}

const menuItems: { id: MenuItem; label: string; icon: string }[] = [
  { id: "home", label: "Inicio", icon: "🏠" },
  { id: "createProfile", label: "Crea tu Perfil", icon: "📝" },
  { id: "services", label: "Servicios & Categorías", icon: "🛠️" },
  { id: "jobOffers", label: "Ofertas Laborales", icon: "💼" },
  { id: "comments", label: "Comentarios", icon: "💬" },
  { id: "faq", label: "Preguntas Frecuentes", icon: "❓" },
  { id: "sponsors", label: "Patrocinadores", icon: "🤝" },
  { id: "contact", label: "Contacto", icon: "📞" },
  { id: "social", label: "Redes Sociales", icon: "🌐" },
  { id: "ourGoal", label: "Nuestra Visión", icon: "🎯" },
  { id: "privacy", label: "Políticas & Privacidad", icon: "🔒" },
  { id: "terms", label: "Términos & Condiciones", icon: "📜" },
];

export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <nav className="flex flex-col w-56 bg-gray-800 text-white min-h-screen p-4 justify-items-center">
      {menuItems.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`
    w-full text-left px-4 py-3 rounded-2xl transition-all duration-300
    flex items-center justify-between group scale-90
    ${
      selected === id
        ? "bg-white/15 text-white shadow-lg scale-100"
        : "text-blue-100 hover:bg-white/15 hover:text-white hover:shadow-lg hover:scale-95"
    }
  `}
        >
          <div className="flex items-center space-x-3">
            <span className="w-6 h-6 text-current">{icon}</span>
            <span className="font-medium">{label}</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      ))}
    </nav>
  );
}
