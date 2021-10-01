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
    fecha: {
        type: Date,
        default: Date.now() + 2*60*60*1000, // al sumar 2, estamos ajustando la hora de españa
        required: false
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

module.exports = model ( "Medicion", MedicionSchema );