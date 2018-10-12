// if there is no result send an error, if there is a result that looks send to controller
// handles the logic attaches the error

const contentQuery = require('../../queries/content');

const getAllContent = () => {
    const content = contentQuery.getAllContent();

    return content.then(result => (result.length < 1 ? {error: 'error retrieving content', status: 500} : result))
}

const createContent = (payload) => {
    const content = contentQuery.createContent(payload);

    return content.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const deleteContent = (userId) => {
    console.log(userId)
    const content = contentQuery.deleteContent(userId);
    console.log(content);

    return content.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const getContentById = (contentId) => {
    const content = contentQuery.getContentById(contentId);
  
    return content.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const updateContentById = (id, payload) => {
    const content = contentQuery.updateContentById(id, payload);

    return content.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

module.exports = {
    getAllContent,
    createContent,
    deleteContent,
    getContentById,
    updateContentById
}