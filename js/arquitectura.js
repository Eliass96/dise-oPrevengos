document.addEventListener("DOMContentLoaded", function () {
  const architectureItems = [
    {
      icon: "fa fa-cogs",
      title: "Requerimientos técnicos",
      description:
        "Conoce las especificaciones necesarias para la correcta implementación de nuestro sistema.",
      link: "/html/arquitectura/requerimientosTecnicos.html",
    },
    {
      icon: "fa fa-server",
      title: "Arquitectura tecnológica",
      description:
        "Descubre cómo se estructura nuestro sistema, desde los servidores hasta las capas de aplicación.",
      link: "/html/arquitectura/arquitecturaTecnologica.html",
    },
    {
      icon: "fa fa-database",
      title: "Explotación del sistema",
      description:
        "Aprende cómo optimizar el uso de la plataforma para garantizar eficiencia y rendimiento.",
      link: "/html/arquitectura/explotacion.html",
    },
    {
      icon: "fa fa-shield-alt",
      title: "Protección de datos (LOPD)",
      description:
        "Cumplimos con las normativas de protección de datos para garantizar la seguridad de tu información.",
      link: "/html/arquitectura/proteccionDatos.html",
    },
  ];

  const container = document.querySelector(".row.g-4");
  architectureItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("col-md-6", "col-lg-6", "col-xl-3", "wow", "fadeInUp");
    div.setAttribute("data-wow-delay", `${0.2 * (index + 1)}s`);

    // Truncar la descripción a 8 palabras
    const truncatedDescription = item.description
      .split(" ")
      .slice(0, 20)
      .join(" ");

    let descriptionText = truncatedDescription;
    let showMoreLink = `<a href="${item.link}">Ver más...</a>`;

    if (item.description.split(" ").length > 20) {
      descriptionText += "...";
    }

    div.innerHTML = `
        <div class="arquitectura-item p-4 pt-0">
          <div class="arquitectura-icon p-4 mb-4">
            <i class="${item.icon} fa-3x"></i>
          </div>
          <a href="${item.link}" class="h4 d-inline-block mb-4">${item.title}</a>
          <p>${descriptionText} ${showMoreLink}</p>
        </div>
      `;

    container.appendChild(div);
  });
});
