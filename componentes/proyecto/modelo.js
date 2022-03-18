const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const proyectoSchema = new Schema({
    titulo: reqString,
    fechainicio: reqString,
    fechafin: reqString,
    descripcion: reqString,
})

const model = mongoose.model('Proyecto', proyectoSchema)
module.exports = model