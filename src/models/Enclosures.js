module.exports = (sequelize, DataTypes) => {
    var Enclosures = sequelize.define('Enclosures', {
      name: DataTypes.STRING,
    });
  
    return Enclosures;
  };