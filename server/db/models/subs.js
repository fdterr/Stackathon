/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subs', {
    GAME_ID: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    INN_CT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BAT_HOME_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SUB_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SUB_HOME_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SUB_LINEUP_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SUB_FLD_CD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    REMOVED_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    REMOVED_FLD_CD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EVENT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'subs'
  });
};
