/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'games',
    {
      seq_games: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        primaryKey: true,
      },
      GAME_ID: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      YEAR_ID: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
      },
      GAME_DT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      GAME_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      GAME_DY: {
        type: DataTypes.STRING(9),
        allowNull: true,
      },
      START_GAME_TM: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      DH_FL: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      DAYNIGHT_PARK_CD: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      AWAY_TEAM_ID: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      HOME_TEAM_ID: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      PARK_ID: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      AWAY_START_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_START_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      BASE4_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      BASE1_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      BASE2_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      BASE3_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      LF_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      RF_UMP_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      ATTEND_PARK_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      SCORER_RECORD_ID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      TRANSLATOR_RECORD_ID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      INPUTTER_RECORD_ID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      INPUT_RECORD_TS: {
        type: DataTypes.STRING(18),
        allowNull: true,
      },
      EDIT_RECORD_TS: {
        type: DataTypes.STRING(18),
        allowNull: true,
      },
      METHOD_RECORD_CD: {
        type: DataTypes.STRING(18),
        allowNull: true,
      },
      PITCHES_RECORD_CD: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      TEMP_PARK_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      WIND_DIRECTION_PARK_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      WIND_SPEED_PARK_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      FIELD_PARK_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      PRECIP_PARK_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      SKY_PARK_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      MINUTES_GAME_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      INN_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_SCORE_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_SCORE_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_HITS_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_HITS_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_ERR_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_ERR_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LOB_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LOB_CT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      WIN_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      LOSE_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      SAVE_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      GWRBI_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP1_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP1_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP2_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP2_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP3_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP3_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP4_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP4_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP5_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP5_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP6_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP6_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP7_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP7_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP8_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP8_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_LINEUP9_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      AWAY_LINEUP9_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP1_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP1_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP2_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP2_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP3_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP3_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP4_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP4_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP5_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP5_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP6_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP6_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP7_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP7_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP8_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP8_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      HOME_LINEUP9_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_LINEUP9_FLD_CD: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      AWAY_FINISH_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      HOME_FINISH_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
    },
    {
      tableName: 'games',
    }
  );
};
