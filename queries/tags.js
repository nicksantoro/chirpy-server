// knex

const knex = require('./db')

const getAllTags = () => {
  return knex('tags').orderBy('created_at', 'desc')
}

const createTag = (payload) => {
  return knex('tags').insert(payload).returning('*');
}

const deleteTag = (userId) => {

 return knex('tags')
    .del('*')
    .where('id', userId)
    .then(result => {
      return result;
    })
 
}

const getTagById = (tagId) => {

  return knex('tags')
    // .select(["title", "body", "type"])
    .where('id', tagId)
    .then(result => {
      return result;
    })
    
}

const updateTagById = (id, payload) => {
  
  return knex('tags')
  .where('id', id)
  .update(payload, '*')

}


module.exports = {
  getAllTags,
  createTag,
  deleteTag,
  getTagById,
  updateTagById
}