module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'records',
    {
      json: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      tableName: 'records',
    }
  );
};
