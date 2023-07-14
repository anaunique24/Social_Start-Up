const router = require('express').Router();

const{
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require ('../../contollers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions').post(addReaction);

 // /api/thoughts/:thoughtId/reactions/:reactionsId
router
    .route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

//exporting router model
module.exports = router;