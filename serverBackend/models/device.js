'use strict';
module.exports = (sequelize, DataTypes) => {
  var Device = sequelize.define(
    'Device',
    { ipAddress: DataTypes.STRING, macAddress: DataTypes.STRING, deviceName: DataTypes.STRING },
    { timestamps: true, paranoid: true }
  );

  Device.associate = models => {
    Device.belongsToMany(models.Device, { through: 'ScansDevices' });
  };
  return Device;
};
