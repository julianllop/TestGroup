//---------------------IMPORTACIONES---------------------

const { DataTypes } = require ('sequelize');

//---------------------EXPORTACIONES---------------------

module.exports = (sequelize) => {

  sequelize.define ('dog', {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Al crearse un "dog" por default tendra un true en created
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

  }, {
    timestamps: false
  })

};


