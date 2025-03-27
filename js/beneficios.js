const faqData = [
  {
    name: "CUMPLIMIENTO LEGAL Y DE NORMAS DE CALIDAD",
    description:
      "Garantiza que la empresa opera dentro del marco legal vigente y cumple con estándares de calidad, evitando sanciones y mejorando su reputación en el sector.",
  },
  {
    name: "CENTRALIZACIÓN DE LA INFORMACIÓN",
    description:
      "Permite reunir todos los datos en un solo sistema, facilitando su acceso, consulta y actualización, lo que mejora la eficiencia en la gestión documental.",
  },
  {
    name: "PROTECCIÓN Y SEGURIDAD DE LOS DATOS",
    description:
      "Implementa medidas para prevenir accesos no autorizados, pérdida o alteración de información crítica, asegurando la confidencialidad y cumplimiento normativo.",
  },
  {
    name: "ORGANIZACIÓN Y NORMALIZACIÓN DE LA GESTIÓN",
    description:
      "Estandariza procesos y procedimientos, reduciendo errores, optimizando el tiempo de trabajo y mejorando la colaboración entre equipos.",
  },
  {
    name: "ELIMINACIÓN DEL PAPEL",
    description:
      "Digitaliza documentos y procesos para reducir el uso de papel, optimizando el espacio físico, mejorando la accesibilidad y contribuyendo a la sostenibilidad ambiental.",
  },
  {
    name: "TELETRABAJO",
    description:
      "Facilita el acceso remoto a la información y herramientas de trabajo, mejorando la flexibilidad laboral y el equilibrio entre la vida personal y profesional.",
  },
  {
    name: "MOVILIDAD",
    description:
      "Permite a los empleados acceder a la información y realizar tareas desde cualquier ubicación, impulsando la eficiencia y la productividad en entornos dinámicos.",
  },
  {
    name: "ALARMAS E INDICADORES DE SEGUIMIENTO",
    description:
      "Automatiza alertas y métricas clave para supervisar procesos en tiempo real, facilitando la toma de decisiones y la prevención de problemas.",
  },
  {
    name: "REDUCCIÓN DE TIEMPOS EN LA RESOLUCIÓN DE PROBLEMAS",
    description:
      "Mejora la capacidad de respuesta ante incidencias mediante procesos optimizados y acceso rápido a información relevante para su resolución eficiente.",
  },
  {
    name: "AGILIDAD EN LA BÚSQUEDA, ANÁLISIS Y EXPLOTACIÓN DE LA INFORMACIÓN",
    description:
      "Optimiza la manera en que los datos son almacenados y recuperados, permitiendo un acceso rápido y eficiente para la toma de decisiones estratégicas.",
  },
  {
    name: "AUMENTO DE LA EFICIENCIA Y EFICACIA EN LA GESTIÓN",
    description:
      "Automatiza y optimiza procesos internos, reduciendo tareas repetitivas, mejorando la asignación de recursos y aumentando la productividad general.",
  },
  {
    name: "EN CONCLUSIÓN, REDUCCIÓN DE COSTES Y AUMENTO DE LA PRODUCTIVIDAD",
    description:
      "La integración de estas mejoras permite optimizar recursos, reducir gastos operativos y aumentar la competitividad empresarial de manera sostenible.",
  },
];

const faqContainer = document.getElementById("beneficios-container");

faqData.forEach((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");
  if (index === 0) faqItem.classList.add("faq-active");

  faqItem.innerHTML = `
        <h3>${item.name}</h3>
        <div class="faq-content">
            <p>${item.description}</p>
        </div>
        <i class="faq-toggle bi bi-chevron-right"></i>
    `;

  faqItem.addEventListener("click", function () {
    this.classList.toggle("faq-active");
  });

  faqContainer.appendChild(faqItem);
});
