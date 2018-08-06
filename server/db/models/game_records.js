module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'game_records',
    {
      json: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      tableName: 'game_records',
    }
  );
};
