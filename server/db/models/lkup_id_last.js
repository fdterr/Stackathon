/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lkup_id_last', {
    VALUE_CD: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'lkup_id_last'
  });
};
