module.exports = (sequelize, DataTypes) => {
    var ManagerE = sequelize.define('enclosures', {
      name: DataTypes.STRING,
    });
  
    return ManagerE;
  };