'use strict';
module.exports = function(sequelize, DataTypes) {
  var Device = sequelize.define(
    'Device',
    {
      ip: DataTypes.STRING,
      mac: DataTypes.STRING,
      vendor: DataTypes.STRING,
      hostname: DataTypes.STRING
    },
    {
      timestamps: true,
      paranoid: true
    }
  );

  Device.associate = models => {
    Device.belongsToMany(models.Scan, {
      through: 'ScansDevices'
    });
  };
  return Device;
};
