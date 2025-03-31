$rootDir = "D:/Work/Design/prevengos"
$sourcePath

$arquitectura = @(  
    @{
        name         = "Arquitectura tecnológica"
        description  = "Descubre cómo se estructura nuestro sistema, desde los servidores hasta las capas de aplicación."
        link         = $rootDir + "/html/arquitectura/arquitecturaTecnologica.html"
        createAnclas = $true
    },
    
    @{
        name         = "Explotación del sistema"
        description  = "Aprende cómo optimizar el uso de la plataforma para garantizar eficiencia y rendimiento."
        link         = $rootDir + "/html/arquitectura/explotacion.html"
        createAnclas = $false
    },
    
    @{
        name         = "Protección de datos (LOPD)"
        description  = "Cumplimos con las normativas de protección de datos para garantizar la seguridad de tu información."
        link         = $rootDir + "/html/arquitectura/proteccionDatos.html"
        createAnclas = $true
    }            
)

foreach ($item in $arquitectura) {
    $destinationPath = $item.link

    if (-not (Test-Path $destinationPath)) {
        $name = $item.name
        $title = "Prevengos - " + $name.Substring(0, 1).ToUpper() + $name.Substring(1).ToLower()

        # Si createAnclas es true, agregar el apartado de las anclas al lateral
        if ($item.createAnclas -eq $true) {
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

        # Reemplazar el título en la etiqueta <title>
        $htmlContent = $htmlContent -replace '<title>.*?</title>', "<title>$title</title>"

        # Reemplazar el texto dentro del <h1> en la sección Page Title
        $htmlContent = $htmlContent -replace '(<h1[^>]*?>)\s*[^<]+(\s*</h1>)', "`$1$name`$2"

        # Guardar el archivo modificado
        $htmlContent | Set-Content -Path $destinationPath -Encoding UTF8 -Force

        Write-Host "Archivo creado y modificado en: $destinationPath"
    }
    else {
        Write-Host "El archivo ya existe en: $destinationPath"
    }
}