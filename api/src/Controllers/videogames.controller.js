const videogames = require('../Handlers/videogames.handlers');
const videogamesById = require('../Handlers/videogamesById.handler');
const videoGamesByName = require('../Handlers/videogamesByName.handler');
const videogamesHandler = require('../handlers/createVideogames.handler');

const videogamesCtrl = async (req, res) => {
    const { name } = req.query;

    try {
        const gamesData = name ? await videoGamesByName.getVideoGamesByName(name.toLowerCase()) : await videogames.getVideoGamesData();
        res.status(200).json(gamesData);
    } catch (error) {
        res.status(404).send('Hubo un error en la busqueda');
        console.error(error);
    }
};

const videogamesByidCtrl = async (req, res) => {
    try {
        const videogame = await videogamesById.getVideoGamesById(req.params.idVideogame);
        res.json(videogame);
    } catch (error) {
        res.status(404).json('El juego no fue encontrado');
    }
}

const createVideogame = async (req, res) => {
    const videogameData = req.body;

    try {
        const videogame = await videogamesHandler.createVideogame(videogameData);
        res.status(201).json(videogame);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el videojuego');
    }
};


module.exports = { videogamesCtrl, videogamesByidCtrl, createVideogame };