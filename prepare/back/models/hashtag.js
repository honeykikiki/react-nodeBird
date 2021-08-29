// const { DataTypes } = require('sequelize/types');
// const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      // MYSQL 에는 Hashtags 테이블생성
      // id가 기본적으로 들어간다
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      // Hashtag모델에 대한 세팅
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
    },
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
