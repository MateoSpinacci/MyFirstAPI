const videojuegoService = require('../services/videojuegoService');

async function getGames(req, res) {
    const juegos = await videojuegoService.getGames();

    res.status(200).json({
        estado: 'ok',
        data: juegos
    });
}

async function getGameFromId(req, res) {
    try {
        const juegoId = await videojuegoService.getGameFromId(req.params.id);
        res.status(200).json({
            estado: 'ok',
            data: juegoId
        })
    } catch (error) {
        res.status(500).json({
            estado: 'error',
            data: error.message
        })
    }
}

async function createGame(req, res) {
    try {
        const juegoCreado = await videojuegoService.createGame(req.body);

        res.status(201).json({
            estado: 'creado',
            data: juegoCreado
        })
    } catch (error) {
        res.status(500).json({
            estado: 'error',
            data: error.message
        })
    }
}

async function updateGame(req, res) {
    try {
        const juegoActualizado = await videojuegoService.updateGame(req.body, req.params.id);

        res.status(200).json({
            estado: 'actualizado',
            data: juegoActualizado
        })
    } catch (error) {
        res.status(500).json({
            estado: 'error',
            data: error.message
        })
    }
}

async function deleteGame(req, res) {
    try {
        const juegoEliminado = await videojuegoService.deleteGame(req.params.id);

        res.status(200).json({
            estado: 'eliminado',
            data: 'Juego Eliminado'
        })
    } catch (error) {
        res.status(500).json({
            estado: 'error',
            data: error.message
        })
    }
}

module.exports = {
    getGames,
    getGameFromId,
    createGame,
    updateGame,
    deleteGame,
};
