const app = require("./app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor ejecutándose en http://localhost:3000/");
});

// Dividir el código
// Cambiar el script de nodemon
// Agregar el script de test

// npm i jest -D
// npm i supertest -D

/*
En Node.js, module.exports y exports son utilizados para exportar módulos,
permitiendo que se compartan funciones, objetos o valores entre archivos.
module.exports es la forma principal de exportar un módulo completo en el
sistema de módulos CommonJS. exports es una referencia a module.exports,
facilitando la adición de propiedades o métodos. Sin embargo, si se reasigna exports,
pierde la conexión con module.exports. CommonJS es el sistema de módulos utilizado
por Node.js para manejar estas exportaciones e importaciones.
*/
