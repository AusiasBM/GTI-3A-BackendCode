
const Medicion = require("../modelos/Medicion");

exports.obtenerTodas = (req, res) => {
    const mediciones = [
        {
            "medicion"      : "2.5",
            "tipoMedicion"  : "Calidad del aire",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
        {
            "medicion"      : "2.0",
            "tipoMedicion"  : "Calidad del aire",
            "lat"           : "38.99600901262704",
            "lng"          : "-0.16582290057630056"
        },
    ]
    res.json(mediciones);
}

exports.insertarMedicion = async ( req, res ) => {

    try {
        // Si creamos una lista con el mismo nombre que las clables del json, se añaden los valores automáticamente a cada varaible.
        const { medicion, tipoMedicion, lat, lng } = req.body;
        console.log(medicion);
        
        if( medicion && lat && lng ){
            const nuevaMedicion = new Medicion( { medicion, tipoMedicion, lat, lng } );
            await nuevaMedicion.save();

            res.json({
                msj: "Medición insertada",
                id: nuevaMedicion._id
            });
        }else{
            res.json({
                msj: "Faltan datos requeridos",
                isOk: false
            });
        }

    } catch (error) {
        res.json(error + ",error");
    }

}