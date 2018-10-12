// controller is this or is this bad, send through if good, send error if not

const model = require('../models/content');

const getAllContent = (req, res, next) => {
    const promise = model.getAllContent();

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const createContent = (req, res, next) => {
    const payload = req.body;
    const promise = model.createContent(payload);

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const deleteContent = (req, res, next) => {
    let { userId } = req.params;
    console.log(userId)
    const promise = model.deleteContent(userId);

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const getContentById = (req, res, next) => {
    let { contentId } = req.params;
    const promise = model.getContentById(contentId);

    promise
        .then(result => (result.error ? next(result) : res.status(200).json(result)))
        .catch(error => {
            next(error);
        })
}

const updateContentById = (req, res, next) => {
    let payload = req.body;
    let { id } = req.params;
    const promise = model.updateContentById(id, payload);

    promise
        .then(result => (result.error ? next(result) : res.status(200).json(result)))
        .catch(error => {
            next(error);
        })
}

module.exports = {
    getAllContent,
    createContent,
    deleteContent,
    getContentById,
    updateContentById
}