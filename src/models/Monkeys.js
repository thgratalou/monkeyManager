module.exports = (sequelize, DataTypes) => {
    var Monkeys = sequelize.define('Monkeys', {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      enclosure_name: DataTypes.STRING
    });
  
    return Monkeys;
  };