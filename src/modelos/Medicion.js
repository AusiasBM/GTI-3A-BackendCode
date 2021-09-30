const { Schema, model, Mongoose } = require("mongoose");

const MedicionSchema = new Schema ({

    medicion : {
        type: Schema.Types.Decimal128,
        required: true,
    },
    tipoMedicion : {
        type: String,
        default: "Calidad del aire"
    },
    fechaHora: {
        type: Date,
        required: true
    },
    lat : {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    }

});

module.exports = model ( "Estudiante", EstudianteSchema );