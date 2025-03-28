$rootDir = "D:/Work/Design/prevengos"
$sourcePath

$subAreas = @(
    # Área General
    @{
        name         = "CONFIGURACIÓN DE PERFILES Y CUENTAS DE ACCESO"
        link         = $rootDir + "/html/areas/subareas/general/configuracionPerfiles.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "PARAMETRIZACIÓN DEL COMPORTAMIENTO DEL SISTEMA"
        link         = $rootDir + "/html/areas/subareas/general/parametrizacionSistema.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "GESTIÓN DE EMPRESAS O ENTIDADES ORGANIZATIVAS"
        link         = $rootDir + "/html/areas/subareas/general/gestionEmpresas.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "GESTIÓN DE CENTROS DE TRABAJO"
        link         = $rootDir + "/html/areas/subareas/general/gestionCentrosTrabajo.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "GESTIÓN DE TRABAJADORES"
        link         = $rootDir + "/html/areas/subareas/general/gestionTrabajadores.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "GESTIÓN DOCUMENTAL"
        link         = $rootDir + "/html/areas/subareas/general/gestionDocumental.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "AGENDA DE ACTUACIONES"
        link         = $rootDir + "/html/areas/subareas/general/agendaActuaciones.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "AGENDA DE CONTROLES PERIÓDICOS"
        link         = $rootDir + "/html/areas/subareas/general/agendaControlesPeriodicos.html"
        createAnclas = $false  # Campo booleano
    },
    # Área técnica
    @{
        name         = "PLANES DE PREVENCIÓN"
        link         = $rootDir + "/html/areas/subareas/tecnica/prevencionTecnica.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PROGRAMACIÓN ANUAL DE ACTIVIDADES"
        link         = $rootDir + "/html/areas/subareas/tecnica/programacionActividades.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "EVALUACIONES DE RIESGO – SHEP – 38 MÉTODOS DE EVALUACIÓN"
        link         = $rootDir + "/html/areas/subareas/tecnica/evaluacionRiesgos.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PLANIFICACIÓN DE LA ACCIÓN PREVENTIVA"
        link         = $rootDir + "/html/areas/subareas/tecnica/planificacionAccionPreventiva.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INFORMACIÓN AL TRABAJADOR"
        link         = $rootDir + "/html/areas/subareas/tecnica/informacionTrabajador.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "EVALUACIONES EXTERNALIZADAS – IMPORTACIÓN DE MEDIDAS"
        link         = $rootDir + "/html/areas/subareas/tecnica/evaluacionesExternalizadas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PLANES DE EMERGENCIA Y AUTOPROTECCIÓN"
        link         = $rootDir + "/html/areas/subareas/tecnica/planesEmergencia.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "SIMULACROS DE EMERGENCIA"
        link         = $rootDir + "/html/areas/subareas/tecnica/simulacrosEmergencia.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "REVISIÓN Y ADECUACIÓN DE MAQUINARIA Y EQUIPOS"
        link         = $rootDir + "/html/areas/subareas/tecnica/revisionMaquinaria.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "AUTORIZACIONES DE USO DE MAQUINARIA"
        link         = $rootDir + "/html/areas/subareas/tecnica/autorizacionesUsoMaquinaria.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "AUTORIZACIONES O PERMISOS DE TRABAJO"
        link         = $rootDir + "/html/areas/subareas/tecnica/autorizacionesTrabajo.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "TRABAJOS CUALIFICADOS VS CUALIFICACIÓN DE TRABAJADORES"
        link         = $rootDir + "/html/areas/subareas/tecnica/trabajosCualificados.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PARTES DE INSPECCIÓN CON LISTAS DE CHEQUEO DE CUALQUIER MATERIA"
        link         = $rootDir + "/html/areas/subareas/tecnica/partesInspeccion.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "GESTIÓN DE INCIDENCIAS U OBSERVACIONES"
        link         = $rootDir + "/html/areas/subareas/tecnica/gestionIncidencias.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INVESTIGACIÓN DE ACCIDENTES - EXPORTACIÓN A DELTA"
        link         = $rootDir + "/html/areas/subareas/tecnica/investigacionAccidentes.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INVESTIGACIÓN DE INCIDENTES"
        link         = $rootDir + "/html/areas/subareas/tecnica/investigacionIncidentes.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "NO CONFORMIDADES"
        link         = $rootDir + "/html/areas/subareas/tecnica/noConformidades.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "ENFERMEDADES PROFESIONALES"
        link         = $rootDir + "/html/areas/subareas/tecnica/enfermedadesProfesionales.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "OTROS DAÑOS PARA LA SALUD"
        link         = $rootDir + "/html/areas/subareas/tecnica/otrosDaniosSalud.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "GESTIÓN DE EPIS - SOLICITUDES, ENTREGAS Y DEVOLUCIONES"
        link         = $rootDir + "/html/areas/subareas/tecnica/gestionEPIS.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "AUDITORÍAS DE CUALQUIER MATERIA"
        link         = $rootDir + "/html/areas/subareas/tecnica/auditoriasMateria.html"
        createAnclas = $false  # Campo booleano
    },    
    # Área médica
    @{
        name         = "PROGRAMACIÓN ANUAL DE ACTIVIDADES"
        link         = $rootDir + "/html/areas/subareas/medica/programacionActividades.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "CONVOCATORIAS PARA ACTOS MÉDICOS"
        link         = $rootDir + "/html/areas/subareas/medica/convocatoriasMedicas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "AGENDA DE CITACIONES – SISTEMA DE AUTOCITA"
        link         = $rootDir + "/html/areas/subareas/medica/autocita.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "CONFIGURACIÓN DE PROTOCOLOS MÉDICOS"
        link         = $rootDir + "/html/areas/subareas/medica/configuracionProtocolos.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PLANIFICACIONES POR PUESTOS VS PROTOCOLOS MÉDICOS"
        link         = $rootDir + "/html/areas/subareas/medica/planificacionesPuestos.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "PLANIFICACIONES DE RECONOCIMIENTOS INDIVIDUALIZADAS"
        link         = $rootDir + "/html/areas/subareas/medica/reconocimientosIndividualizados.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "RECONOCIMIENTOS MÉDICOS LABORALES"
        link         = $rootDir + "/html/areas/subareas/medica/reconocimientosLaborales.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "ANALÍTICAS – PETITORIOS E IMPORTACIÓN DE RESULTADOS"
        link         = $rootDir + "/html/areas/subareas/medica/analiticasResultados.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "RECONOCIMIENTOS EXTERNOS - IMPORTACIÓN DE APTITUDES"
        link         = $rootDir + "/html/areas/subareas/medica/reconocimientosExternos.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "CONSULTAS MÉDICAS ASISTENCIALES"
        link         = $rootDir + "/html/areas/subareas/medica/consultasMedicas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "CAMPAÑAS DE VACUNACIÓN"
        link         = $rootDir + "/html/areas/subareas/medica/campanasVacunacion.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "CONTROLES SEROLÓGICOS"
        link         = $rootDir + "/html/areas/subareas/medica/controlesSerologicos.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INVESTIGACIÓN DE ACCIDENTES CON RIESGO BIOLÓGICO"
        link         = $rootDir + "/html/areas/subareas/medica/accidentesRiesgoBiologico.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "INCAPACIDADES TEMPORALES"
        link         = $rootDir + "/html/areas/subareas/medica/incapacidadesTemporales.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "ESTUDIOS EPIDEMIOLÓGICOS"
        link         = $rootDir + "/html/areas/subareas/medica/estudiosEpidemiologicos.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "PLANES DE PROMOCIÓN DE LA SALUD"
        link         = $rootDir + "/html/areas/subareas/medica/planesPromocionSalud.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "ESTUDIOS 'AD HOC'"
        link         = $rootDir + "/html/areas/subareas/medica/estudiosAdHoc.html"
        createAnclas = $true  # Campo booleano
    },
    # Área CAE
    @{
        name         = "CONFIGURACIÓN DE REQUISITOS DOCUMENTALES"
        link         = $rootDir + "/html/areas/subareas/cae/configuracionRequisitosDocumentales.html"
        createAnclas = $false
    },
    @{
        name         = "CONFIGURACIÓN DE PERFILES DE CONTRATAS, TRABAJADORES O MAQUINARIA"
        link         = $rootDir + "/html/areas/subareas/cae/configuracionPerfilesContratas.html"
        createAnclas = $false
    },
    @{
        name         = "PLANIFICACIÓN DE NOTIFICACIONES VÍA EMAIL A LAS CONTRATAS"
        link         = $rootDir + "/html/areas/subareas/cae/planificacionNotificacionesEmail.html"
        createAnclas = $false
    },
    @{
        name         = "GESTIÓN DE CONTRATAS, TRABAJADORES Y MAQUINARIA"
        link         = $rootDir + "/html/areas/subareas/cae/gestionContratasTrabajadoresMaquinaria.html"
        createAnclas = $false
    },
    @{
        name         = "GESTIÓN DE PROYECTOS – OBRAS, EVENTOS O CENTROS DE CONCURRENCIA"
        link         = $rootDir + "/html/areas/subareas/cae/gestionProyectosObras.html"
        createAnclas = $false
    },
    @{
        name         = "VALIDACIÓN / RECHAZO MANUAL Y AUTOMÁTICO DE DOCUMENTOS"
        link         = $rootDir + "/html/areas/subareas/cae/validacionDocumentos.html"
        createAnclas = $false
    },
    @{
        name         = "GESTIÓN DE INCIDENCIAS U OBSERVACIONES"
        link         = $rootDir + "/html/areas/subareas/cae/gestionIncidencias.html"
        createAnclas = $false
    },
    @{
        name         = "PARTES DE INSPECCIÓN CON LISTAS DE CHEQUEO"
        link         = $rootDir + "/html/areas/subareas/cae/partesInspeccion.html"
        createAnclas = $false
    },
    @{
        name         = "AUTORIZACIONES O PERMISOS DE TRABAJO"
        link         = $rootDir + "/html/areas/subareas/cae/autorizacionesPermisosTrabajo.html"
        createAnclas = $false
    },
    @{
        name         = "REUNIONES – ACTAS DE REUNIÓN"
        link         = $rootDir + "/html/areas/subareas/cae/reunionesActas.html"
        createAnclas = $false
    },
    @{
        name         = "CONTROL DE ACCESO PARA VIGILANTES O SUPERVISORES"
        link         = $rootDir + "/html/areas/subareas/cae/controlAccesoVigilantes.html"
        createAnclas = $false
    },
    @{
        name         = "INTEGRACIÓN VÍA API CON TORNOS DE ACCESO"
        link         = $rootDir + "/html/areas/subareas/cae/integracionAPIConTornosAcceso.html"
        createAnclas = $false
    },
    # Área de Formación
    @{
        name         = "CONFIGURACIÓN DE ACCIONES FORMATIVAS EN CUALQUIER MATERIA"
        link         = $rootDir + "/html/areas/subareas/formacion/configuracionAccionesFormativas.html"
        createAnclas = $false
    },
    @{
        name         = "FORMACIÓN PRESENCIAL"
        link         = $rootDir + "/html/areas/subareas/formacion/formacionPresencial.html"
        createAnclas = $false
    },
    @{
        name         = "FORMACIÓN ONLINE  - ACCESO WEB / WEB APP DEL TRABAJADOR"
        link         = $rootDir + "/html/areas/subareas/formacion/formacionOnlineAccesoWebApp.html"
        createAnclas = $false
    },
    @{
        name         = "FORMACIÓN ONLINE  - INTEGRACIÓN BIDIRECCIONAL CON MOODLE"
        link         = $rootDir + "/html/areas/subareas/formacion/formacionOnlineMoodleIntegracion.html"
        createAnclas = $false
    },
    @{
        name         = "IMPORTACIÓN DE CERTIFICADOS DE FORMACIÓN EXTERNALIZADA"
        link         = $rootDir + "/html/areas/subareas/formacion/importacionCertificadosFormacionExternalizada.html"
        createAnclas = $false
    },
    # Área de Proyectos y Horas
    @{
        name         = "CONFIGURACIÓN TAREAS TIPO"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/configuracionTareasTipo.html"
        createAnclas = $false
    },
    @{
        name         = "CONFIGURACIÓN DE PROYECTOS TIPO VS TAREAS"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/configuracionProyectosVsTareas.html"
        createAnclas = $false
    },
    @{
        name         = "CONFIGURACIÓN DE COSTES DE LOS TÉCNICOS"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/configuracionCostesTecnicos.html"
        createAnclas = $false
    },
    @{
        name         = "GESTIÓN DE PROYECTOS VS TAREAS, HORAS, PLAZOS Y TÉCNICOS"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/gestionProyectosVsTareas.html"
        createAnclas = $false
    },
    @{
        name         = "IMPUTACIÓN DE HORAS DEDICADAS"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/imputacionHoras.html"
        createAnclas = $false
    },
    @{
        name         = "IMPUTACIÓN DE KILOMETRAJES, DIETAS Y GASTOS"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/imputacionKilometrajesDietasGastos.html"
        createAnclas = $false
    },
    @{
        name         = "CONTROL DE COSTES Y DESVIACIONES"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/controlCostesDesviaciones.html"
        createAnclas = $false
    },
    @{
        name         = "INFORMES Y MEMORIAS DE SEGUIMIENTO"
        link         = $rootDir + "/html/areas/subareas/proyectosHoras/informesMemoriasSeguimiento.html"
        createAnclas = $false
    },
    # Área Comercial
    @{
        name         = "GESTIÓN DE CLIENTES POTENCIALES - PRECLIENTES"
        link         = $rootDir + "/html/areas/subareas/comercial/gestionClientesPotenciales.html"
        createAnclas = $false
    },
    @{
        name         = "PRESUPUESTOS"
        link         = $rootDir + "/html/areas/subareas/comercial/presupuestos.html"
        createAnclas = $false
    },
    # Área Administrativa
    @{
        name         = "GESTIÓN DE CLIENTES EFECTIVOS"
        link         = $rootDir + "/html/areas/subareas/administrativa/gestionClientesEfectivos.html"
        createAnclas = $false
    },
    @{
        name         = "PRESUPUESTOS"
        link         = $rootDir + "/html/areas/subareas/administrativa/presupuestos.html"
        createAnclas = $false
    },
    @{
        name         = "CONTRATOS – EXPORTACIÓN A SERPA - CERTIFICADOS DE CONTRATACIÓN"
        link         = $rootDir + "/html/areas/subareas/administrativa/contratosExportacionSerpa.html"
        createAnclas = $false
    },
    @{
        name         = "FACTURACIÓN - CONEXIÓN CON VERIFACTU"
        link         = $rootDir + "/html/areas/subareas/administrativa/facturacionVerifactu.html"
        createAnclas = $false
    },
    @{
        name         = "COBROS - ÓRDENES DE DOMICILIACIÓN - REMESAS BANCARIAS SEPA / ABA"
        link         = $rootDir + "/html/areas/subareas/administrativa/cobrosRemesasBancarias.html"
        createAnclas = $false
    },
    @{
        name         = "MAILING A CLIENTES DE MOROSIDAD Y DEL MODELO 347"
        link         = $rootDir + "/html/areas/subareas/administrativa/mailingClientesMorosidad.html"
        createAnclas = $false
    },
    @{
        name         = "COMISIONES A TERCEROS"
        link         = $rootDir + "/html/areas/subareas/administrativa/comisionesATerceros.html"
        createAnclas = $true
    },
    @{
        name         = "PREVISIÓN DE FACTURACIÓN Y EVOLUCIÓN DE CARTERA"
        link         = $rootDir + "/html/areas/subareas/administrativa/previsionFacturacion.html"
        createAnclas = $false
    },
    @{
        name         = "ENLACES CON SISTEMAS DE CONTABILIDAD"
        link         = $rootDir + "/html/areas/subareas/administrativa/enlacesContabilidad.html"
        createAnclas = $false
    }      
)

foreach ($subArea in $subAreas) {
    $destinationPath = $subArea.link

    if (-not (Test-Path $destinationPath)) {
        $name = $subArea.name
        $title = "Prevengos - " + $name.Substring(0, 1).ToUpper() + $name.Substring(1).ToLower()

        # Si createAnclas es true, agregar el apartado de las anclas al lateral
        if ($subArea.createAnclas -eq $true) {
            $sourcePath = $rootDir + "/html/templates/template.html"
        }
        else {
            $sourcePath = $rootDir + "/html/templates/templateWithSidebarHidden.html"
        }

        # Copiar el archivo original
        Copy-Item $sourcePath $destinationPath -Force

        # Esperar un momento para asegurar que el archivo esté disponible
        Start-Sleep -Milliseconds 500

        # Leer el contenido del archivo copiado
        $htmlContent = Get-Content -Path $destinationPath -Raw

        # Mostrar el contenido antes de la modificación (solo para depuración)
        # Write-Host "Antes: `$htmlContent"

        # Reemplazar el título en la etiqueta <title>
        $htmlContent = $htmlContent -replace '<title>.*?</title>', "<title>$title</title>"

        # Reemplazar el texto dentro del <h1> en la sección Page Title
        $htmlContent = $htmlContent -replace '(<h1[^>]*?>)\s*[^<]+(\s*</h1>)', "`$1$name`$2"

        # Mostrar el contenido después de la modificación (solo para depuración)
        # Write-Host "Después: `$htmlContent"

        # Guardar el archivo modificado
        $htmlContent | Set-Content -Path $destinationPath -Encoding UTF8 -Force

        Write-Host "Archivo creado y modificado en: $destinationPath"
    }
    else {
        Write-Host "El archivo ya existe: $destinationPath"
    }
}
