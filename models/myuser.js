'use strict';
module.exports = function(sequelize, DataTypes) {
  var MyUser = sequelize.define('MyUser', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MyUser;
};