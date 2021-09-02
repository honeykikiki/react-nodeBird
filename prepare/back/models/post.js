// const { DataTypes } = require('sequelize/types');
// const { sequelize } = require('.');

const { post } = require('../routes/post');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      // MYSQL 에는 Posts 테이블생성
      // id가 기본적으로 들어간다
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      // Post모델에 대한 세팅
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
    },
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser post.getUser post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); //post.addPostHashtags
    db.Post.hasMany(db.Comment); //post.addcomments post.getComments
    db.Post.hasMany(db.Image); // post.addImages post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); //post.addlikers , post.removelikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet;
  };
  return Post;
};
