module.exports = (sequelize, DataTypes) => {
    var Monkeys = sequelize.define('Monkeys', {
      name: DataTypes.STRING,
      enclos: DataTypes.STRING
    });
  
    return Monkeys;
  };