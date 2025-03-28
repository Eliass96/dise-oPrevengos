const { exec } = require('child_process');

// Ruta del script PowerShell
const scriptPath = "D:/Work/Design/prevengos/scripts/prueba.ps1";

// Definir el array de objetos (como ejemplo)
const arrayParam = [
    { name: 'Elemento 1', value: 'Valor 1' },
    { name: 'Elemento 2', value: 'Valor 2' },
    { name: 'Elemento 3', value: 'Valor 3' }
];

// Convertir el array a una cadena JSON
const arrayJson = JSON.stringify(arrayParam);

// Asegurarnos de que el JSON esté correctamente escapado para PowerShell
const escapedArrayJson = arrayJson.replace(/"/g, '\\"');  // Escapar las comillas dobles

// Comando para ejecutar el script PowerShell con el array como parámetro
const command = `powershell -ExecutionPolicy Bypass -File "${scriptPath}" -arrayParam "${escapedArrayJson}"`;

// Ejecutar el comando
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error ejecutando PowerShell: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
