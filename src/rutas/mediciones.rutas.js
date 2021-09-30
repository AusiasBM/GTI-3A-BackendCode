// importamos solo las rutas de la librería express
const {Router} = require("express");
const ctrMediciones = require("../controladores/mediciones.controlador");
const rutasMediciones = Router();

rutasMediciones.get('/todas-las-mediciones', ctrMediciones.obtenerTodas);

rutasMediciones.post('/anyadir-medicion', ctrMediciones.insertarMedicion);


module.exports = rutasMediciones; // Exportamos todas las rutas