const express = require('express')
const app = express()
const port = 3500

// Configuraciones **************************************************************
app.set("name", "Api-rest-bm");
app.set("port", process.env.port || port ); // Si el servidor asigna un purto se queda, sino le ponemos 3500
app.use( express.json()) // Nos permite recibir json por http

// Ruta raiz ********************************************************************
app.get('/', (req, res) => {
  res.send('Api Proyecto AusiasBM!')
})

// Configuración del servdor antes de lanzarlo **********************************
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`)
  console.log("nombre de la appbm", app.get("name"));
})