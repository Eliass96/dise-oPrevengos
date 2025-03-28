document.addEventListener("DOMContentLoaded", function () {
  const subAreas = [
    {
      name: "PROGRAMACIÓN ANUAL DE ACTIVIDADES",
      color: "item-indigo",
      icon: "bi-calendar-check",
      link: "programacionActividades.html",
    },
    {
      name: "CONVOCATORIAS PARA ACTOS MÉDICOS",
      color: "item-teal",
      icon: "bi-file-earmark-check",
      link: "convocatoriasMedicas.html",
    },
    {
      name: "AGENDA DE CITACIONES – SISTEMA DE AUTOCITA",
      color: "item-cyan",
      icon: "bi-calendar-event",
      link: "autocita.html",
    },
    {
      name: "CONFIGURACIÓN DE PROTOCOLOS MÉDICOS",
      color: "item-orange",
      icon: "bi-gear",
      link: "configuracionProtocolos.html",
    },
    {
      name: "PLANIFICACIONES POR PUESTOS VS PROTOCOLOS MÉDICOS",
      color: "item-indigo",
      icon: "bi-clipboard-check",
      link: "planificacionesPuestos.html",
    },
    {
      name: "PLANIFICACIONES DE RECONOCIMIENTOS INDIVIDUALIZADAS",
      color: "item-pink",
      icon: "bi-person-check",
      link: "reconocimientosIndividualizados.html",
    },
    {
      name: "RECONOCIMIENTOS MÉDICOS LABORALES",
      color: "item-cyan",
      icon: "bi-heart-pulse",
      link: "reconocimientosLaborales.html",
    },
    {
      name: "ANALÍTICAS – PETITORIOS E IMPORTACIÓN DE RESULTADOS",
      color: "item-pink",
      icon: "bi-file-earmark-text",
      link: "analiticasResultados.html",
    },
    {
      name: "RECONOCIMIENTOS EXTERNOS - IMPORTACIÓN DE APTITUDES",
      color: "item-orange",
      icon: "bi-arrow-right-circle",
      link: "reconocimientosExternos.html",
    },
    {
      name: "CONSULTAS MÉDICAS ASISTENCIALES",
      color: "item-red",
      icon: "bi-file-earmark-medical",
      link: "consultasMedicas.html",
    },
    {
      name: "CAMPAÑAS DE VACUNACIÓN",
      color: "item-teal",
      icon: "bi-h-square",
      link: "campanasVacunacion.html",
    },
    {
      name: "CONTROLES SEROLÓGICOS",
      color: "item-indigo",
      icon: "bi-clipboard-data",
      link: "controlesSerologicos.html",
    },
    {
      name: "INVESTIGACIÓN DE ACCIDENTES CON RIESGO BIOLÓGICO",
      color: "item-red",
      icon: "bi-exclamation-triangle",
      link: "accidentesRiesgoBiologico.html",
    },
    {
      name: "INCAPACIDADES TEMPORALES",
      color: "item-orange",
      icon: "bi-calendar-x",
      link: "incapacidadesTemporales.html",
    },
    {
      name: "ESTUDIOS EPIDEMIOLÓGICOS",
      color: "item-teal",
      icon: "bi-bar-chart-line",
      link: "estudiosEpidemiologicos.html",
    },
    {
      name: "PLANES DE PROMOCIÓN DE LA SALUD",
      color: "item-pink",
      icon: "bi-briefcase",
      link: "planesPromocionSalud.html",
    },
    {
      name: "ESTUDIOS “AD HOC”",
      color: "item-indigo",
      icon: "bi-file-earmark-pdf",
      link: "estudiosAdHoc.html",
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
