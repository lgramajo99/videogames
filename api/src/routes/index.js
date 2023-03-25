const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { videogamesCtrl, videogamesByidCtrl, createVideogame } = require('../controllers/videogames.controller');
const genresCtrl = require('../Handlers/genres.handler.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', videogamesCtrl);
router.get('/videogames/:idVideogame', videogamesByidCtrl);
router.get('/videogames/name', videogamesCtrl);
router.post('/videogames', createVideogame);
router.get('/genres', genresCtrl.getGeneros);

module.exports = router;
