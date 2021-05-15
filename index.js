const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//Crear servidor de express
const app = express();

//Base de datos
dbConnection();

//Configuracion del cors
app.use(cors());

//Directorio Publico
app.use(express.static("public"));

//Lectura y pasteo del body
app.use(express.json());

//Rutas
app.use("/api/events", require("./routes/events"));
app.use("/api/auth", require("./routes/auth"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
