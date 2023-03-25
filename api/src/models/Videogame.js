const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      //la opcion descripcion no se encuentra en la API
      type: DataTypes.TEXT,
      allowNull: true,

    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_lanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

  }, {
    timestamps: false,
    hooks: {
      beforeCreate: async (videogame) => {
        const lastVideogame = await sequelize.models.Videogame.findOne({
          order: [['id', 'DESC']],
        });
        let lastNumber = 0;
        if (lastVideogame) {
          lastNumber = parseInt(lastVideogame.id.split('-')[1]);
        }
        videogame.id = `H-${lastNumber + 1}`;
      },
    }
  })
}