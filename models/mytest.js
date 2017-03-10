'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mytest = sequelize.define('Mytest', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mytest;
};