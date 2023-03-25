const axios = require('axios');
require('dotenv').config();


const getVideoGamesData = async () => {

    try {
        const numPagesToFetch = 5;
        const gamesData = [];

        for (let i = 1; i <= numPagesToFetch; i++) {
            const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${i}`);
            const games = response.data.results.map((el) => {
                return {
                    id: el.id,
                    nombre: el.name,
                    descripcion: el.description_raw,
                    plataformas: el.platforms.map((platform) => platform.platform.name).join(', '),
                    imagen: el.background_image,
                    fecha_lanzamiento: el.released,
                    rating: el.rating,
                    generos: el.genres.map((genero) => genero.name).join(',')
                };
            });
            gamesData.push(...games);
        }
        return gamesData;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los juegos desde el servidor externo');
    }
};

module.exports = { getVideoGamesData };
