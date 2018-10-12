// knex

const knex = require('./db')

const getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc')
}

const createUser = (payload) => {
  return knex('users').insert(payload).returning('*');
}

const deleteUser = (userId) => {
 return knex('users')
    .del('*')
    .where('id', userId)
    .then(result => {
      return result;
    })
}

const getUserById = (userId) => {
  return knex('users')
    // .select(["title", "body", "type"])
    .where('id', userId)
    .then(result => {
      return result;
    })    
}

const updateUserById = (id, payload) => {
  return knex('users')
  .where('id', id)
  .update(payload, '*')
}

const getFollowers = (id) => {
  return knex('friendships')
    .where('followee_id', id)
    .join('users', 'users.id', '=', 'friendships.follower_id')
    // join users where users.id equals the friendships table follower id
}

const deleteFollowers = (followerId, followeeId) => {
  return knex('friendships')
    .del('*')
    .where('follower_id', followerId)
    .where('followee_id', followeeId)
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUserById,
  getFollowers,
  deleteFollowers
}