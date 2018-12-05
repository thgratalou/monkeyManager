module.exports = (sequelize, DataTypes) => {
    var manager = sequelize.define('monkey_manager', {
      name: DataTypes.STRING,
      enclos: DataTypes.STRING
    });
  
    return manager;
  };