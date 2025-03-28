document.addEventListener("DOMContentLoaded", function () {
  const functionalities = [
    {
      name: "FIRMA DIGITAL DE DOCUMENTOS CON VALIDEZ LEGAL",
      description:
        "Permite firmar documentos electrónicamente con validez legal.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/firmaDigital.html",
    },
    {
      name: "INTEGRACIÓN VÍA API CON SISTEMAS DE GESTIÓN Y DE RRHH",
      description:
        "Facilita la integración de datos entre sistemas de gestión y recursos humanos mediante API.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/integracionAPI.html",
    },
    {
      name: "TABLAS MAESTRAS DE LA BASE DE DATOS CONFIGURABLES",
      description:
        "Permite configurar y gestionar tablas maestras en la base de datos.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/configuracionTablasMaestras.html",
    },
    {
      name: "IMPORTACIONES Y EXPORTACIONES MASIVAS DE DATOS",
      description: "Posibilita la importación y exportación masiva de datos.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/importacionesExportacionesMasivas.html",
    },
    {
      name: "BIBLIOTECA PERSONALIZABLE DE PLANTILLAS DE INFORMES MS WORD",
      description:
        "Ofrece una biblioteca personalizable para gestionar plantillas de informes en MS Word.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/bibliotecaPlantillasInformes.html",
    },
    {
      name: "GENERACIÓN DE INFORMES EN FORMATO MS WORD, EXCEL Y POWER BI",
      description:
        "Genera informes de manera eficiente en formatos MS Word, Excel y Power BI.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/generacionInformes.html",
    },
    {
      name: "ENVÍOS DE EMAIL PUNTUALES O MASIVOS",
      description:
        "Permite realizar envíos de emails tanto puntuales como masivos de manera eficiente.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/enviosEmail.html",
    },
    {
      name: "ENVÍOS DE SMS PUNTUALES O MASIVOS",
      description:
        "Facilita el envío de SMS, ya sea de manera puntual o masiva.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/enviosSMS.html",
    },
    {
      name: "PUBLICACIÓN WEB DE DOCUMENTOS PUNTUALES O MASIVOS",
      description:
        "Permite la publicación web de documentos de forma puntual o masiva.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/publicacionWebDocumentos.html",
    },
    {
      name: "NOTIFICACIONES DESATENDIDAS VÍA EMAIL O SMS",
      description: "Envía notificaciones desatendidas a través de email o SMS.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/notificacionesDesatendidas.html",
    },
    {
      name: "CONSULTAS, LISTADOS, ESTADÍSTICOS Y CUADROS DE MANDO",
      description:
        "Permite realizar consultas, generar listados, estadísticas y cuadros de mando para análisis de datos.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/consultasListadosEstadisticosCuadrosMando.html",
    },
    {
      name: "CUADROS DE ALERTAS GENERALES Y PERSONALES",
      description:
        "Genera cuadros de alertas tanto generales como personales para la gestión de riesgos.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/cuadrosAlertas.html",
    },
    {
      name: "MEMORIA Y CONTROL DE PRODUCTIVIDAD POR TÉCNICO",
      description:
        "Realiza el control de productividad de cada técnico mediante informes detallados.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/memoriaControlProductividad.html",
    },
    {
      name: "MEMORIAS GLOBALES, POR EMPRESA Y POR TRABAJADOR",
      description:
        "Genera memorias globales o específicas por empresa y trabajador.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/memorias.html",
    },
    {
      name: "MEMORIAS ORDEN TIN 2504/2010 – EXPORTACIÓN A SERPA",
      description:
        "Permite la exportación de memorias en formato orden TIN 2504/2010 a SERPA.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/herramientas/memoriasOrdenTIN25042010.html",
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
