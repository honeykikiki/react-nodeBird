// const { DataTypes } = require('sequelize/types');
// const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      // MYSQL 에는 Images 테이블생성
      // id가 기본적으로 들어간다
      src: {
        type: DataTypes.STRING(200),
        allowBull: false,
      },
    },
    {
      // Image모델에 대한 세팅
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
