const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db');
const axios = require('axios');
require('dotenv').config();

const getVideoGamesByName = async (name) => {
    try {
        const videoGamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${process.env.API_KEY}`);

        const videoGamesDB = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });

        const videoGames = videoGamesAPI.data.results.concat(videoGamesDB);

        if (videoGames.length === 0) {
            return { error: 'No se encontraron videojuegos con ese nombre' };
        }

        return videoGames.slice(0, 15);

    } catch (error) {
        console.log(error);
        return { error: 'Hubo un problema en el servidor' };
    }
};

module.exports = { getVideoGamesByName };
