module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'events',
    {
      seq_events: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true,
      },
      GAME_ID: {
        type: DataTypes.CHAR(12),
        allowNull: false,
      },
      YEAR_ID: {
        type: 'YEAR(4)',
        allowNull: false,
        defaultValue: '2000',
      },
      AWAY_TEAM_ID: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      INN_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      BAT_HOME_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      OUTS_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      BALLS_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      STRIKES_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PITCH_SEQ_TX: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      AWAY_SCORE_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      HOME_SCORE_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      BAT_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      BAT_HAND_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RESP_BAT_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      RESP_BAT_HAND_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PIT_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      PIT_HAND_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RES_PIT_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      RES_PIT_HAND_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      POS2_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS3_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS4_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS5_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS6_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS7_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS8_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      POS9_FLD_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      BASE1_RUN_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      BASE2_RUN_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      BASE3_RUN_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      EVENT_TX: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      LEADOFF_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PH_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BAT_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      BAT_LINEUP_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      EVENT_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      BAT_EVENT_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      AB_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      H_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      SH_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      SF_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      EVENT_OUTS_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      DP_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      TP_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RBI_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      WP_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PB_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      BATTEDBALL_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BUNT_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      FOUL_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BATTEDBALL_LOC_TX: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      ERR_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ERR1_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ERR1_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      ERR2_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ERR2_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      ERR3_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ERR3_CD: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BAT_DEST_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN1_DEST_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN2_DEST_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN3_DEST_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      BAT_PLAY_TX: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      RUN1_PLAY_TX: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      RUN2_PLAY_TX: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      RUN3_PLAY_TX: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      RUN1_SB_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN2_SB_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN3_SB_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN1_CS_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN2_CS_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN3_CS_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN1_PK_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN2_PK_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN3_PK_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN1_RESP_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      RUN2_RESP_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      RUN3_RESP_PIT_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      GAME_NEW_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      GAME_END_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PR_RUN1_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PR_RUN2_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PR_RUN3_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      REMOVED_FOR_PR_RUN1_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      REMOVED_FOR_PR_RUN2_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      REMOVED_FOR_PR_RUN3_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      REMOVED_FOR_PH_BAT_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      REMOVED_FOR_PH_BAT_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      PO1_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      PO2_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      PO3_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ASS1_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ASS2_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ASS3_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ASS4_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      ASS5_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      EVENT_ID: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
      },
      HOME_TEAM_ID: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      BAT_TEAM_ID: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      FLD_TEAM_ID: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      BAT_LAST_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      INN_NEW_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      INN_END_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      START_BAT_SCORE_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      START_FLD_SCORE_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      INN_RUNS_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      GAME_PA_CT: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
      },
      INN_PA_CT: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      PA_NEW_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PA_TRUNC_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      START_BASES_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      END_BASES_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      BAT_START_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RESP_BAT_START_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      PIT_START_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RESP_PIT_START_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      RUN1_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN1_LINEUP_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN1_ORIGIN_EVENT_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN2_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN2_LINEUP_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN2_ORIGIN_EVENT_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN3_FLD_CD: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN3_LINEUP_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN3_ORIGIN_EVENT_ID: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
      },
      RUN1_RESP_CATCH_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      RUN2_RESP_CATCH_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      RUN3_RESP_CATCH_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      PA_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_CALLED_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_INTENT_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_PITCHOUT_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_HIT_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_OTHER_BALL_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_CALLED_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_SWINGMISS_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_FOUL_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_BIP_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      PA_OTHER_STRIKE_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      EVENT_RUNS_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      FLD_ID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      BASE2_FORCE_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BASE3_FORCE_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BASE4_FORCE_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BAT_SAFE_ERR_FL: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      BAT_FATE_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN1_FATE_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN2_FATE_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      RUN3_FATE_ID: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      FATE_RUNS_CT: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ASS6_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ASS7_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ASS8_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ASS9_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      ASS10_FLD_CD: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
      },
      UNKNOWN_OUT_EXC_FL: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      UNCERTAIN_PLAY_EXC_FL: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
    },
    {
      tableName: 'events',
    }
  );
};
