const express = require('express');
const app = express();
app.use(express.json());
const controller = require('./controllers/videojuegoController');
const serverConfig = require('./config/serverConfig');

app.get('/games', controller.getGames);
app.get('/games/:id', controller.getGameFromId);
app.post('/games', controller.createGame);
app.patch('/games/:id', controller.updateGame);
app.delete('/games/:id', controller.deleteGame);

app.listen(serverConfig.port, () => {
  console.log(`API escuchando en http://localhost:${serverConfig.port}`);
});
