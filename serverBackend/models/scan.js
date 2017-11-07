'use strict';
module.exports = (sequelize, DataTypes) => {
  var Scan = sequelize.define('Scan', {
    networkName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Scan;
};