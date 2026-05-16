const juegos = [
    {
        id: 1,
        title: "Minecraft",
        genre: "SandBox",
        finished: false
    }, 
    {
        id: 2,
        title: "Red Dead Redemption II",
        genre: "Aventure",
        finished: true
    }
]

let nextId = 3;

function siguienteId() {
    return nextId++;
}

module.exports = {
    juegos,
    siguienteId
};
