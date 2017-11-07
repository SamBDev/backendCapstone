'use strict';
module.exports = function(sequelize, DataTypes) {
  var Scan = sequelize.define(
    'Scan',
    {
      networkName: DataTypes.STRING
    },
    {
      timestamps: true,
      paranoid: true
    }
  );

  Scan.associate = models => {
    Scan.belongsToMany(models.Device, {
      through: 'ScansDevices'
    });
  };
  return Scan;
};
