'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {});
  Task.associate = models => {
    // associations can be defined here
  };
  return Task;
};