param (
    [string]$arrayParam  # El parámetro que recibimos desde Node.js
)

# Mostrar el parámetro recibido (para depuración)
Write-Host "Parámetro recibido: $arrayParam"

# Convertir la cadena JSON en un objeto de PowerShell
$array = $arrayParam | ConvertFrom-Json

# Recorrer el array y procesar cada objeto
foreach ($item in $array) {
    Write-Host "Nombre: $($item.name), Valor: $($item.value)"
}
