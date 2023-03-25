const axios = require('axios');
const { Videogame, Genre } = require('../db');
require('dotenv').config();

const getVideoGamesById = async (id) => {

    if (id.substring(0, 2) === 'H-') { videogame = await Videogame.findByPk(id.slice(2), { include: Genre }); }
    else {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`);
        videogame = {
            id: data.id,
            nombre: data.name,
            descripcion: data.description_raw,
            plataformas: data.platforms.map((platform) => platform.platform.name).join(', '),
            imagen: data.background_image,
            fecha_lanzamiento: data.released,
            rating: data.rating,
            generos: data.genres.map((genre) => genre.name),
        };
    }
    return videogame;
};

module.exports = { getVideoGamesById };