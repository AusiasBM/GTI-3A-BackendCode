
exports.obtenerTodas = (req, res) => {
    const mediciones = [
        {
            "medicion"      : "2.5",
            "tipoMedicion"  : "Calidad del aire",
            "fechaHora"         : "29-09-2021",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
        {
            "medicion"      : "2.0",
            "tipoMedicion"  : "Calidad del aire",
            "fechaHora"         : "30-09-2021",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
    ]
    res.json(mediciones);
}

exports.insertarMedicion = ( req, res ) => {

    // Si creamos una lista con el mismo nombre que las clables del json, se añaden los valores automáticamente a cada varaible.
    const { medicion, tipoMedicion, fecha, hora, lat, lng } = req.body;
    console.log(medicion + ", " + tipoMedicion + ", " + fecha);
    
    res.json({
        msj: "Medición recibida"
    });

}