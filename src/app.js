const express = require('express');
const app = express();
app.use(express.json());
const sequelize = require('./db');
const Juego = require('./models/videojuegoModel');
const controller = require('./controllers/videojuegoController');
const serverConfig = require('./config/serverConfig');

app.get('/games', controller.getGames);
app.get('/games/:id', controller.getGameFromId);
app.post('/games', controller.createGame);
app.patch('/games/:id', controller.updateGame);
app.delete('/games/:id', controller.deleteGame);

app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

app.use((error, req, res, next) => {
  res.status(500).json({
        estado: 'error',
        mensaje: error.message
    });
})

async function start() {
    try {
        await sequelize.authenticate();

        await sequelize.sync();

        const contador = await Juego.count();

        if (contador === 0) {
            await Juego.bulkCreate([
                {
                    title: 'minecraft',
                    genre: 'sandbox',
                    finished: false
                },
                {
                    title: 'gta v',
                    genre: 'accion',
                    finished: true
                }
            ]);
        }

        app.listen(serverConfig.port, () => {
            console.log(`API escuchando en http://localhost:${serverConfig.port}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar la API:', error.message);
        process.exit(1);
    }
}

start();