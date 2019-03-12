'use strict';
module.exports = (sequelize, DataTypes) => {
  const Call = sequelize.define('Call', {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    reason: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Call.associate = function(models) {
    // associations can be defined here
  };
  return Call;
};