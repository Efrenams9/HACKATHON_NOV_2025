const XLSX = require('xlsx');
const { Inventory } = require('./models'); // Importa tu modelo de Sequelize

async function loadExcelData(filePath) {
  // 1. Leer el archivo
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Usamos la primera hoja
  const worksheet = workbook.Sheets[sheetName];

  // 2. Convertir a JSON
  const data = XLSX.utils.sheet_to_json(worksheet);

  console.log(`Leídos ${data.length} registros del Excel.`);

  // 3. Transformar e Insertar (Ejemplo simplificado)
  try {
    for (const row of data) {
      // Asegúrate de que los nombres de columna del Excel coincidan
      // o mapealos manualmente aquí.
      await Inventory.create({
        store: row['TIENDA'],
        business_unit: row['UNIDAD DE NEGOCIO'],
        year: row['AÑO'],
        month: row['MES'],
        sales_units: row['VTA PZS'] || 0, // Manejo de posibles vacíos
        inventory_units: row['INV PZS'] || 0
      });
    }
    console.log('¡Carga de datos completada exitosamente!');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}

// Ejecutar la función con la ruta a tu archivo
loadExcelData('././');