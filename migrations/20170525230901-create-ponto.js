'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Pontos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      arquivo: {
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Pontos');
  }
};