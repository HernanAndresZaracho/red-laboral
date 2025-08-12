import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";

const socialData = {
  Corrientes: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/trabajos_corrientesss/",
      icon: CiInstagram,
      color:
        "bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700",
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@trabajos_corrientesss?xmt=AQF0AQqX8vTpoQVCS5vvx8yaozld4cOt7ZvVJ1W9T_fsvW8",
      icon: CiTwitter,
      color:
        "bg-gradient-to-br from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61556032224864&ref=is_two_add_ig_profile_ac",
      icon: CiFacebook,
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
  ],
  Misiones: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/trabajos_misiones",
      icon: CiInstagram,
      color:
        "bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700",
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@trabajos_corrientesss?xmt=AQF0AQqX8vTpoQVCS5vvx8yaozld4cOt7ZvVJ1W9T_fsvW8",
      icon: CiTwitter,
      color:
        "bg-gradient-to-br from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61556032224864&ref=is_two_add_ig_profile_ac",
      icon: CiFacebook,
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
  ],
  Chaco: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/trabajos_chaco/",
      icon: CiInstagram,
      color:
        "bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700",
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@trabajos_corrientesss?xmt=AQF0AQqX8vTpoQVCS5vvx8yaozld4cOt7ZvVJ1W9T_fsvW8",
      icon: CiTwitter,
      color:
        "bg-gradient-to-br from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61556032224864&ref=is_two_add_ig_profile_ac",
      icon: CiFacebook,
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
  ],
};

export default function ContentSocial() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Síguenos en Redes Sociales
      </h2>
      <p className="text-center mb-10 text-gray-300 max-w-xl mx-auto">
        Mantenete conectado con nosotros y no te pierdas oportunidades, consejos
        y novedades.
      </p>

      <div className="space-y-10 ">
        {Object.entries(socialData).map(([province, socials]) => (
          <div key={province}>
            <h3 className="text-xl font-bold mb-4 justify-self-center">
              {province}
            </h3>
            <ul className="flex flex-wrap gap-6 justify-center">
              {socials.map(({ platform, url, icon: Icon, color }) => (
                <li key={platform}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar perfil de ${platform} en ${province}`}
                    className={`${color} flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-transform hover:scale-105`}
                    style={{ width: 140, height: 140 }}
                  >
                    <Icon size={48} />
                    <span className="mt-3 font-semibold text-base">
                      {platform}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
