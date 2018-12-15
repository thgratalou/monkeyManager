module.exports = (sequelize, DataTypes) => {
    var ManagerM = sequelize.define('monkey_manager', {
      name: DataTypes.STRING,
      enclos: DataTypes.STRING
    });
  
    return ManagerM;
  };