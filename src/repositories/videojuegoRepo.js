const { juegos, siguienteId } = require('../models/videojuegoModel');

async function getAllGames() {
    return juegos;
}

async function getGameById(id) {
    return juegos.find((juego) => juego.id === id) || null;
}

async function createGame(body) {
    const nuevoId = siguienteId();
    const genero = body.genre || 'SC';
    const juegoNuevo = {
        id: nuevoId,
        title: body.title,
        genre: genero,
        finished: false,
    }
    juegos.push(juegoNuevo);
    return juegoNuevo;
}

async function updateGame(body, id) {
    const juego = juegos.find((juego) => juego.id === id) || null;
    if (juego === null) {
        return juego;
    };
    juego.title = body.title || juego.title;
    juego.genre = body.genre || juego.genre;
    juego.finished = body.finished ?? juego.finished;

    return juego;
}

async function deleteGame(id) {
    const indice = juegos.findIndex((juego) => juego.id === id);
    if (indice === -1) {
        return false;
    };
    juegos.splice(indice, 1);
    return true;
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
};
