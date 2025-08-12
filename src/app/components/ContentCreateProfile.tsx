export default function ContentCreateProfile() {
  const pasos = [
    {
      numero: "1",
      titulo: "Regístrate o inicia sesión con Google",
      detalles: [
        "Si aún no tienes cuenta, selecciona 'Registrarse'.",
        "Ingresa tu correo electrónico y crea una contraseña segura.",
        "Confirma tu cuenta a través del enlace que te enviaremos por correo.",
        "También puedes iniciar sesión con Google sin crear contraseña.",
      ],
    },
    {
      numero: "2",
      titulo: "Completa tus datos básicos",
      detalles: [
        "Agrega tu nombre, número de WhatsApp y una breve descripción de tus servicios.",
        "Sube una foto de perfil para generar confianza.",
      ],
    },
    {
      numero: "3",
      titulo: "Optimiza tu perfil profesional",
      detalles: [
        "Incluye enlaces a redes sociales o página web para mostrar tu trabajo.",
        "Selecciona provincia y ciudad para aparecer en el mapa interactivo.",
        "Especifica tu categoría y servicios para que te encuentren fácilmente.",
      ],
    },
    {
      numero: "4",
      titulo: "Guarda los cambios",
      detalles: [
        "Presiona 'Guardar Cambios' antes de subir tu CV o foto.",
        "¡Listo! Tu perfil estará visible para quienes buscan talento en el NEA.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        ¿Cómo crear tu perfil en Red Laboral?
      </h2>

      <div className="space-y-8">
        {pasos.map((paso) => (
          <div key={paso.numero} className="flex items-start">
            {/* Círculo con número */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-md">
              {paso.numero}
            </div>

            {/* Contenido */}
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">{paso.titulo}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {paso.detalles.map((detalle, i) => (
                  <li key={i}>{detalle}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
