var knex = require('./knex');

function Users() {
  return knex('users');
}

function Posts(){
  return knex('posts')
}

function Comments(){
  return knex('comments');
}

module.exports = {
  getAllUsers : function () {
    return Users()
  },
  getAllPosts: function () {
    return Posts();
  },
  getAllComments : function () {
    return Comments();
  },
  getSinglePost: function (id) {
    return Posts().where('id', id)
  }
};

//functions are capitlized b/c they work similar to a contrstuctor
