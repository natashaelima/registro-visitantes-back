const DB = require('../services/index');

const visitantesPorGenero = async () => {
    return await DB.execute("select count(*) as total, visitante_genero as genero from visitantes group by visitante_genero;");
}

module.exports = {
    visitantesPorGenero
}