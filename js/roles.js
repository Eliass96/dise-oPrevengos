document.addEventListener("DOMContentLoaded", function () {
  const functionalities = [
    {
      name: "APLICATIVO CENTRAL DE ESCRITORIO",
      description:
        "Software de escritorio que centraliza la gestión de datos, procesos y operaciones en un entorno seguro y optimizado.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/aplicativoCentralEscritorio.html",
    },
    {
      name: "WEB APP DEL TÉCNICO O ENCARGADO",
      description:
        "Plataforma web que permite a los técnicos gestionar tareas, reportes y mantenimiento en tiempo real desde cualquier dispositivo.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webAppTecnicoEncargado.html",
    },
    {
      name: "WEB DEL RESPONSABLE DE EMPRESA",
      description:
        "Portal web diseñado para los responsables de empresa, facilitando la supervisión de procesos, cumplimiento y rendimiento organizacional.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webResponsableEmpresa.html",
    },
    {
      name: "WEB DEL RESPONSABLE DE CENTRO",
      description:
        "Aplicación en línea para la gestión centralizada de un centro específico, con herramientas de monitoreo y control.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webResponsableCentro.html",
    },
    {
      name: "WEB DEL TRABAJADOR EN PARTICULAR",
      description:
        "Interfaz web personalizada para que cada trabajador acceda a su información, documentación y gestiones laborales.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webTrabajadorParticular.html",
    },
    {
      name: "WEB DEL CONTRATISTA O PROVEEDOR CAE",
      description:
        "Plataforma en línea para contratistas y proveedores, permitiendo la gestión documental y operativa de cumplimiento CAE.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webContratistaProveedorCAE.html",
    },
    {
      name: "WEB DEL RESPONSABLE DE CONTROL DE ACCESO CAE",
      description:
        "Sistema web para gestionar y supervisar el acceso de contratistas y empleados a instalaciones según normativas CAE.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/rolesAcceso/webResponsableControlAccesoCAE.html",
    },
  ];

  const container = document.querySelector(".row.g-4");

  functionalities.forEach((functionality) => {
    const item = document.createElement("div");
    item.classList.add("col-md-4", "col-sm-3", "wow", "fadeInUp");
    item.setAttribute("data-wow-delay", "0.4s");

    // Truncar la descripción a 8 palabras
    const truncatedDescription = functionality.description
      .split(" ")
      .slice(0, 8)
      .join(" ");

    let descriptionText = truncatedDescription;
    let showMoreLink = `<a href="${functionality.link}">Ver más...</a>`;

    if (functionality.description.split(" ").length > 8) {
      descriptionText += "...";
    }

    item.innerHTML = `
        <div class="herramienta-item">
          <div class="herramienta-img">
            <img src="${functionality.image}" class="img-fluid rounded-top w-100" alt="Image" />
          </div>
          <div class="rounded-bottom p-4">
            <a href="${functionality.link}" class="h4 d-inline-block mb-4">${functionality.name}</a>
            <p>${descriptionText} ${showMoreLink}</p>
          </div>
        </div>
      `;

    container.appendChild(item);
  });
});
