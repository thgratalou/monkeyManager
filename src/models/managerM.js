module.exports = (sequelize, DataTypes) => {
    var ManagerM = sequelize.define('ManagerM', {
      name: DataTypes.STRING,
      enclos: DataTypes.STRING
    });
  
    return ManagerM;
  };