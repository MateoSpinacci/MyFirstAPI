const repositorio = require('../repositories/videojuegoRepo');

async function definirFiltros(query) {
    const filtrosAplicados = {};

    if (query.finished !== undefined) {
        if (query.finished === "true" || query.finished === "false") {
            filtrosAplicados.finished = query.finished === "true";
        } else {
            throw new Error("Solo Puedes Filtrar Por Completadas y No Completadas...")
        }
    }

    if (query.genre !== undefined) {
        filtrosAplicados.genre = query.genre.toLowerCase().trim();
    }

    if (query.search !== undefined) {
        filtrosAplicados.search = query.search.toLowerCase().trim();
    }

    return filtrosAplicados;
}

async function getGames(filtros) {
    const filtro = await definirFiltros(filtros);
    const juegosFiltrados = await repositorio.getAllGames(filtro);
    if (juegosFiltrados.length === 0) {
        throw new Error("No Se Encontraron Juegos Con Los Filtros Aplicados...")
    }
    return juegosFiltrados;
}

async function getGameFromId(id) {
    const num = Number(id);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("ID Invalido, Debe Ser Un Entero Positivo...");
    }

    const juego = await repositorio.getGameById(num);
    if (juego === null) {
        throw new Error("Juego No Encontrado")
    }
    return juego;
}

async function createGame(body) {
    if (body.title === undefined) {
        throw new Error("No Se Puede Crear Un Juego Sin Título")
    }

    return await repositorio.createGame(body);
}

async function updateGame(body, id) {
    const num = Number(id);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("ID Invalido, Debe Ser Un Entero Positivo...");
    }
    if (body.title === undefined && body.genre === undefined && body.finished === undefined) {
        throw new Error("No Pasaste Ningun Parametro Para Actualizar (Título, Género, Completado)")
    }
    const juegoActualizado = await repositorio.updateGame(body, num);
    if (juegoActualizado === null) {
        throw new Error("Juego No Encontrado")
    }
    return juegoActualizado;
}

async function deleteGame(id) {
    const num = Number(id);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("ID Invalido, Debe Ser Un Entero Positivo...");
    }
    
    const juego = await repositorio.deleteGame(num);
    if (!juego) {
        throw new Error("Juego No Encontrado...")
    };
    return juego;
}

module.exports = {
    getGames,
    getGameFromId,
    createGame,
    updateGame,
    deleteGame,
};
