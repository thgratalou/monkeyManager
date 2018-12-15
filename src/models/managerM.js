module.exports = (sequelize, DataTypes) => {
    var ManagerM = sequelize.define('monkeys', {
      name: DataTypes.STRING,
      enclos: DataTypes.STRING
    });
  
    return ManagerM;
  };