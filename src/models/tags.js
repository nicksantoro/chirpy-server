// if there is no result send an error, if there is a result that looks send to controller
// handles the logic attaches the error

const tagQuery = require('../../queries/tags')

const getAllTags = () => {
    const tag = tagQuery.getAllTags();

    return tag.then(result => (result.length < 1 ? {error: 'error retrieving tag', status: 500} : result))
}

const createTag = (payload) => {
    const tag = tagQuery.createTag(payload);

    return tag.then(result => (!result ? {error: 'error retrieving tag', status: 500} : result))
}

const deleteTag = (userId) => {
    const tag = tagQuery.deleteTag(userId);
    return tag.then(result => (!result ? {error: 'error retrieving tag', status: 500} : result))
}

const getTagById = (tagId) => {
    const tag = tagQuery.getTagById(tagId);
  
    return tag.then(result => (!result ? {error: 'error retrieving tag', status: 500} : result))
}

const updateTagById = (id, payload) => {
    const tag = tagQuery.updateTagById(id, payload);

    return tag.then(result => (!result ? {error: 'error retrieving tag', status: 500} : result))
}

module.exports = {
    getAllTags,
    createTag,
    deleteTag,
    getTagById,
    updateTagById
}