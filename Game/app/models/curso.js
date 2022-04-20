'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Area);
    }
  }
  Curso.init({
    sigla: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 4],
          msg: "A sigla do curso deve ter 4 caracteres",
        }
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 40],
          msg: "O nome precisa ter entre 5 e 40 caracteres",
        }
      }
    },
    descricao: DataTypes.TEXT,
    areaId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};