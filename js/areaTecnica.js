document.addEventListener("DOMContentLoaded", function () {
  const subAreas = [
    {
      name: "PLANES DE PREVENCIÓN",
      color: "item-red",
      icon: "bi-shield-check",
      link: "prevencionTecnica.html",
    },
    {
      name: "PROGRAMACIÓN ANUAL DE ACTIVIDADES",
      color: "item-orange",
      icon: "bi-calendar-check",
      link: "programacionActividades.html",
    },
    {
      name: "EVALUACIONES DE RIESGO – SHEP – 38 MÉTODOS DE EVALUACIÓN",
      color: "item-indigo",
      icon: "bi-exclamation-triangle",
      link: "evaluacionRiesgos.html",
    },
    {
      name: "PLANIFICACIÓN DE LA ACCIÓN PREVENTIVA",
      color: "item-cyan",
      icon: "bi-clipboard-check",
      link: "planificacionAccionPreventiva.html",
    },
    {
      name: "INFORMACIÓN AL TRABAJADOR",
      color: "item-indigo",
      icon: "bi-info-circle",
      link: "informacionTrabajador.html",
    },
    {
      name: "EVALUACIONES EXTERNALIZADAS – IMPORTACIÓN DE MEDIDAS",
      color: "item-teal",
      icon: "bi-cloud-arrow-down",
      link: "evaluacionesExternalizadas.html",
    },
    {
      name: "PLANES DE EMERGENCIA Y AUTOPROTECCIÓN",
      color: "item-cyan",
      icon: "bi-fire",
      link: "planesEmergencia.html",
    },
    {
      name: "SIMULACROS DE EMERGENCIA",
      color: "item-red",
      icon: "bi-people",
      link: "simulacrosEmergencia.html",
    },
    {
      name: "REVISIÓN Y ADECUACIÓN DE MAQUINARIA Y EQUIPOS",
      color: "item-indigo",
      icon: "bi-tools",
      link: "revisionMaquinaria.html",
    },
    {
      name: "AUTORIZACIONES DE USO DE MAQUINARIA",
      color: "item-orange",
      icon: "bi-file-earmark-check",
      link: "autorizacionesUsoMaquinaria.html",
    },
    {
      name: "AUTORIZACIONES O PERMISOS DE TRABAJO",
      color: "item-red",
      icon: "bi-person-badge",
      link: "autorizacionesTrabajo.html",
    },
    {
      name: "TRABAJOS CUALIFICADOS VS CUALIFICACIÓN DE TRABAJADORES",
      color: "item-teal",
      icon: "bi-award",
      link: "trabajosCualificados.html",
    },
    {
      name: "PARTES DE INSPECCIÓN CON LISTAS DE CHEQUEO DE CUALQUIER MATERIA",
      color: "item-indigo",
      icon: "bi-list-check",
      link: "partesInspeccion.html",
    },
    {
      name: "GESTIÓN DE INCIDENCIAS U OBSERVACIONES",
      color: "item-cyan",
      icon: "bi-chat-left-text",
      link: "gestionIncidencias.html",
    },
    {
      name: "INVESTIGACIÓN DE ACCIDENTES - EXPORTACIÓN A DELTA",
      color: "item-red",
      icon: "bi-car-front",
      link: "investigacionAccidentes.html",
    },
    {
      name: "INVESTIGACIÓN DE INCIDENTES",
      color: "item-teal",
      icon: "bi-search",
      link: "investigacionIncidentes.html",
    },
    {
      name: "NO CONFORMIDADES",
      color: "item-teal",
      icon: "bi-x-circle",
      link: "noConformidades.html",
    },
    {
      name: "ENFERMEDADES PROFESIONALES",
      color: "item-orange",
      icon: "bi-heart-pulse",
      link: "enfermedadesProfesionales.html",
    },
    {
      name: "OTROS DAÑOS PARA LA SALUD",
      color: "item-red",
      icon: "bi-emoji-dizzy",
      link: "otrosDaniosSalud.html",
    },
    {
      name: "GESTIÓN DE EPIS - SOLICITUDES, ENTREGAS Y DEVOLUCIONES",
      color: "item-teal",
      icon: "bi-box-seam",
      link: "gestionEPIS.html",
    },
    {
      name: "AUDITORÍAS DE CUALQUIER MATERIA",
      color: "item-orange",
      icon: "bi-clipboard-data",
      link: "auditoriasMateria.html",
    },
  ];

  const servicesContainer = document.getElementById("services-container");

  subAreas.forEach((service) => {
    const serviceHTML = `
      <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="subarea-item ${service.color} position-relative">
          <div class="icon">
            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" stroke-width="0" fill="#f5f5f5" 
                d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787,
                554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,
                479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083,348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,
                193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273,
                51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647,119.04800174914682,550.1803526380478,
                217.28368757567262,524.383925680826,300,521.0016835830174">
              </path>
            </svg>
            <i class="bi ${service.icon}"></i>
          </div>
          <a href="${service.link}" class="stretched-link">
            <h3>${service.name}</h3>
          </a>
        </div>
      </div>
    `;

    // Asumiendo que tienes un contenedor con el id 'services-container' para insertar las tarjetas
    servicesContainer.innerHTML += serviceHTML;
  });
});
