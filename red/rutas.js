
const proyecto = require('../componentes/proyecto/interfaz')

const rutas = function(servidor) {
    
    servidor.use('/proyecto', proyecto)
}

module.exports = rutas