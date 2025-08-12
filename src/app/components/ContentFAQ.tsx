export default function ContentFAQ() {
  const faqs = [
    {
      question: "¿Es gratis crear un perfil?",
      answer: (
        <div>
          <p>Sí, el registro es totalmente gratuito.</p>
          <p className="mt-2">
            Podés registrar un servicio en una ciudad o en modalidad a
            distancia/online para trabajar con clientes de todo el país.
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué hago si mi servicio no aparece en la lista?",
      answer: (
        <div>
          <p>Si no encontrás tu servicio:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Contactá al soporte técnico de Red Laboral.</li>
            <li>
              Indicanos qué servicio querés agregar, en qué categoría y por qué
              debería estar.
            </li>
          </ul>
          <p className="mt-2">
            Queremos que el sistema se adapte a los usuarios, así que evaluamos
            cada propuesta.
          </p>
        </div>
      ),
    },
    {
      question: "¿Puedo ofrecer más de un servicio?",
      answer: (
        <div>
          <p>Sí, pero solo los perfiles verificados pueden:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Agregar hasta 3 servicios.</li>
            <li>Seleccionar múltiples ciudades para aparecer en búsquedas.</li>
          </ul>
          <p className="mt-2">
            💡 Tip: Creá un Instagram profesional o sitio web para mostrar tus
            trabajos.
          </p>
          <p>Si necesitás ayuda, nuestro equipo puede orientarte.</p>
        </div>
      ),
    },
    {
      question: "¿Cómo me contactan los clientes?",
      answer: (
        <div>
          <p>Los clientes pueden encontrarte por:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Tus redes sociales (si las cargaste)</li>
            <li>WhatsApp u otro medio de contacto que dejes disponible</li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Qué pasa si cambio de ciudad o zona de trabajo?",
      answer: (
        <div>
          <p>
            Podés editar tu perfil cuantas veces quieras para actualizar tu
            ubicación y seguir apareciendo en las búsquedas correctas.
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué es un perfil verificado?",
      answer: (
        <div>
          <p>
            Un perfil verificado muestra que tu identidad fue confirmada por
            nuestro equipo.
          </p>
          <p className="mt-2">Ventajas:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Podés registrar 3 servicios y 3 ciudades.</li>
            <li>Genera mayor confianza en los clientes.</li>
            <li>Aparece primero en las búsquedas de tu zona.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Qué puedo hacer para recibir más trabajos?",
      answer: (
        <div>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              Usá Instagram profesional o página web para mostrar tus servicios.
            </li>
            <li>Subí fotos y descripciones claras de tus trabajos.</li>
            <li>Pedí a tus clientes que dejen reseñas positivas.</li>
            <li>Activá la verificación para aparecer en mejores posiciones.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Puedo atender a clientes de otras provincias?",
      answer: (
        <div>
          <p>Sí.</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Para servicios online, podés trabajar con todo el país.</li>
            <li>
              Para servicios presenciales, seleccioná solo las provincias donde
              realmente podés atender.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Cómo pauso o elimino mi perfil?",
      answer: (
        <div>
          <p>Tenés dos opciones:</p>
          <p className="mt-2 font-semibold">Interruptor ON/OFF:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>ON (encendido): tu perfil aparece en búsquedas.</li>
            <li>
              OFF (apagado): se oculta temporalmente (ideal si ya tenés muchos
              trabajos o te vas de vacaciones).
            </li>
          </ul>
          <p className="mt-2 font-semibold">Eliminar cuenta:</p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>
              Contactá al soporte técnico y solicitá la eliminación permanente.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="text-white max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Preguntas Frecuentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
            <div className="text-gray-400 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
