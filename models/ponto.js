'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ponto = sequelize.define('Ponto', {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    arquivo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ponto;
};