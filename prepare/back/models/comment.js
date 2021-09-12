const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        // MYSQL 에는 Comments 테이블생성
        // id가 기본적으로 들어간다
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        //UserId:{}
        //PostId:{}
      },
      {
        // Comment모델에 대한 세팅
        modelName: 'Comment',
        tableName: 'comments',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
      },
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};
