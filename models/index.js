const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//user can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});
//post will use foreign key user_id to connect them 
Post.belongsTo(User, {
  foreignKey: "user_id",
});
//comment will use foreign key user_id to connect to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
//comment will use foreign key post_id to connect to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
//post will have many comments, will connect comments via post_id
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
//user can have many comments, will connect via user_id
User.hasMany(Comment, {
  foreignKey: "user_id",
});


module.exports = { User, Post, Comment };