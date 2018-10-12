// if there is no result send an error, if there is a result that looks send to controller
// handles the logic attaches the error

const userQuery = require('../../queries/users');

const getAllUsers = () => {
    const user = userQuery.getAllUsers();
    return user.then(result => (result.length < 1 ? {error: 'error retrieving content', status: 500} : result))
}

const createUser = (payload) => {
    const user = userQuery.createUser(payload);
    return content.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const deleteUser = (userId) => {
    const user = userQuery.deleteUser(userId);
    return user.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const getUserById = (userId) => {
    const user = userQuery.getUserById(userId);
  
    return user.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

const updateUserById = (id, payload) => {
    const user = userQuery.updateUserById(id, payload);

    return user.then(result => (!result ? {error: 'error retrieving content', status: 500} : result))
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    updateUserById
}