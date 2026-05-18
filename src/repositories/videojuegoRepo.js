const Juego = require('../models/videojuegoModel');
const { Op } = require('sequelize');

async function getAllGames(filtros) {
    const where = {};

    if (filtros.finished !== undefined) {
        where.finished = filtros.finished
    };

    if (filtros.genre !== undefined) {
        where.genre = filtros.genre
    };
    
    if (filtros.search !== undefined) {
        where.title = {
            [Op.like]: `%${filtros.search}%`
        }
    };

    return await Juego.findAll({where})
}

async function getGameById(id) {
    return await Juego.findByPk(id);
}

async function createGame(body) {
    let juegoNuevo = {
        title: body.title.toLowerCase().trim(),
        genre: (body.genre) ? body.genre.toLowerCase().trim() : undefined,
    }
    juegoNuevo = await Juego.create(juegoNuevo);
    return juegoNuevo;
}

async function updateGame(body, id) {
    const JuegoActualizado = await Juego.findByPk(id);

    if (JuegoActualizado === null) {
        return null
    };

    const juegoNuevo = {
        title: body.title || JuegoActualizado.title,
        genre: body.genre || JuegoActualizado.genre,
        finished: body.finished ?? JuegoActualizado.finished,
    };

    await Juego.update(juegoNuevo, 
        {where: {id}}
    );

    return juegoNuevo;
}

async function deleteGame(id) {
    const borro = await Juego.destroy({
        where: {id}
    });

    if (borro === 0) {
        return false
    };

    return true;
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,

};
