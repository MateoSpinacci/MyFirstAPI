const videojuegoService = require('../services/videojuegoService');

async function getGames(req, res, next) {
    try {
        const juegos = await videojuegoService.getGames(req.query);

        res.status(200).json({
            estado: 'ok',
            data: juegos
        });
    } catch (error) {
        next(error);
    }
}

async function getGameFromId(req, res, next) {
    try {
        const juegoId = await videojuegoService.getGameFromId(req.params.id);
        res.status(200).json({
            estado: 'ok',
            data: juegoId
        })
    } catch (error) {
        next(error);
    }
}

async function createGame(req, res, next) {
    try {
        const juegoCreado = await videojuegoService.createGame(req.body);

        res.status(201).json({
            estado: 'creado',
            data: juegoCreado
        })
    } catch (error) {
        next(error);
    }
}

async function updateGame(req, res, next) {
    try {
        const juegoActualizado = await videojuegoService.updateGame(req.body, req.params.id);

        res.status(200).json({
            estado: 'actualizado',
            data: juegoActualizado
        })
    } catch (error) {
        next(error);
    }
}

async function deleteGame(req, res, next) {
    try {
        const juegoEliminado = await videojuegoService.deleteGame(req.params.id);

        res.status(200).json({
            estado: 'eliminado',
            data: 'Juego Eliminado'
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getGames,
    getGameFromId,
    createGame,
    updateGame,
    deleteGame,
};
