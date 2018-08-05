/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lkup_cd_hand', {
    VALUE_CD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SHORTNAME_TX: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    LONGNAME_TX: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESCRIPTION_TX: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'lkup_cd_hand'
  });
};