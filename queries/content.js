// knex

const knex = require('./db')

const getAllContent = () => {
  return knex('content').orderBy('created_at', 'desc')
}

const createContent = (payload) => {
  return knex('content').insert(payload).returning('*');
}

const deleteContent = (userId) => {

 return knex('content')
    .del('*')
    .where('id', userId)
    .then(result => {
      return result;
    })
 
}

const getContentById = (contentId) => {

  return knex('content')
    // .select(["title", "body", "type"])
    .where('id', contentId)
    .then(result => {
      return result;
    })
    
}

const updateContentById = (id, payload) => {
  
  return knex('content')
  .where('id', id)
  .update(payload, '*')

}


module.exports = {
  getAllContent,
  createContent,
  deleteContent,
  getContentById,
  updateContentById
}