// controller is this or is this bad, send through if good, send error if not

const model = require('../models/tags');

const getAllTags = (req, res, next) => {
    const promise = model.getAllTags();

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const createTag = (req, res, next) => {
    const payload = req.body;
    const promise = model.createTag(payload);

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const deleteTag = (req, res, next) => {
    let { userId } = req.params;
    const promise = model.deleteTag(userId);

    promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

    promise.catch(error => {
        next(error);
    });
}

const getTagById = (req, res, next) => {
    let { tagId } = req.params;
    const promise = model.getTagById(tagId);

    promise
        .then(result => (result.error ? next(result) : res.status(200).json(result)))
        .catch(error => {
            next(error);
        })
}

const updateTagById = (req, res, next) => {
    let payload = req.body;
    let { id } = req.params;
    const promise = model.updateTagById(id, payload);

    promise
        .then(result => (result.error ? next(result) : res.status(200).json(result)))
        .catch(error => {
            next(error);
        })
}

module.exports = {
    getAllTags,
    createTag,
    deleteTag,
    getTagById,
    updateTagById
}