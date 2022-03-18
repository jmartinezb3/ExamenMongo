const model = require('./modelo')

function agregarEmpleado( proyecto ) {
    const objeto = new model( proyecto )
    objeto.save()
}

function obtenerEmpleados( filtroProyecto ) {
    let filtro = {}
    if (filtroProyecto) {
        filtro = { titulo: filtroProyecto }
    }
    const objeto = model.find( filtro )
    console.log(objeto)
    return objeto
}

async function actualizarEmpleado( empleado ) {
    const objeto = await model.findOne( {cedula: empleado.cedula} )
    
    objeto.titulo = empleado.titulo
    objeto.fechainicio = empleado.fechainicio
    objeto.fechafin = empleado.fechafin
    objeto.descripcion = empleado.descripcion    

    const resultado = await objeto.save()
    return resultado
}

async function eliminarEmpleado( cedula ) {
    return await model.deleteOne({cedula: cedula})
}

module.exports = {
    agregar: agregarEmpleado,
    obtener: obtenerEmpleados,
    actualizar: actualizarEmpleado,
    eliminar: eliminarEmpleado,
}