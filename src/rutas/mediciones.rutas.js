// importamos solo las rutas de la librería express
const {Router} = require("express");
const rutasMediciones = Router();

rutasMediciones.get('/todas-las-mediciones', (req, res) => {
    const mediciones = [
        {
            "medicion"      : "2.5",
            "tipoMedicion"  : "Calidad del aire",
            "fecha"         : "29-09-2021",
            "hora"          : "12:15",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
        {
            "medicion"      : "2.0",
            "tipoMedicion"  : "Calidad del aire",
            "fecha"         : "30-09-2021",
            "hora"          : "09:00",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
    ]
    res.json(mediciones);
});

rutasMediciones.post('/anyadir-medicion', ( req, res ) => {

    // Si creamos una lista con el mismo nombre que las clables del json, se añaden los valores automáticamente a cada varaible.
    const { medicion, tipoMedicion, fecha, hora, lat, lng } = req.body;
    console.log(medicion + ", " + tipoMedicion + ", " + fecha);
    
    res.json({
        msj: "Medición recibida"
    });

});


module.exports = rutasMediciones; // Exportamos todas las rutas