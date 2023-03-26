const { Videogame, Genre } = require('../db');

const createVideogame = async ({ nombre, descripcion, plataformas, imagen, rating, fecha_lanzamiento, genre }) => {

    try {
        // Buscar o crear el género
        let genres = [];
        if (genre) {
            const genreInstances = await Promise.all(genre.map(async g => {
                const [instance] = await Genre.findOrCreate({ where: { nombre: g } });
                return instance;
            }));
            genres = genreInstances;
        }

        // Crear el videojuego
        const videogame = await Videogame.create({
            nombre,
            descripcion,
            plataformas,
            imagen,
            fecha_lanzamiento,
            rating,
        });

        // Asignar id personalizado
        videogame.id = `H-${videogame.id}`;

        // Asociar los géneros al videojuego
        await videogame.addGenres(genres);

        return {
            id: videogame.id,
            nombre: videogame.nombre,
            descripcion: videogame.descripcion,
            plataformas: videogame.plataformas,
            imagen: videogame.imagen,
            fecha_lanzamiento: videogame.fecha_lanzamiento,
            rating: videogame.rating,
            genres: genres.map(g => g.nombre)
        };

    } catch (error) {
        console.log(error);
        throw new Error('Hubo un error al crear el videojuego');
    }
};

module.exports = { createVideogame };
