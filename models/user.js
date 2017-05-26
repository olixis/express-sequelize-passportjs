'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 10],
        notEmpty: true,
      },
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return User;
};