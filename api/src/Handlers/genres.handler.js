const axios = require("axios");
const { Genre } = require("../db.js");
require('dotenv').config();

const genresCtrl = {};

genresCtrl.getGeneros = async (req, res) => {
    try {
        // Obtener los géneros existentes en la base de datos local
        const genresInDb = await Genre.findAll();
        const genresInDbNames = genresInDb.map(g => g.nombre);

        // Obtener los géneros de la API Rawg
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`);
        const genresAPI = response.data.results.map((el) => el.name);

        // Determinar los géneros que no están en la base de datos local
        const newGenres = genresAPI.filter(g => !genresInDbNames.includes(g));

        // Crear los nuevos géneros que no están en la base de datos local
        if (newGenres.length > 0) {
            const newGenresDB = await Genre.bulkCreate(newGenres.map((el) => ({ nombre: el })));
            genresInDb.push(...newGenresDB);
        }

        return res.status(200).json(genresInDb);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Los géneros no fueron encontrados" });
    }
};

module.exports = genresCtrl;
