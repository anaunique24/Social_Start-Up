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

// /api/thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thought/:thoughtId/reactions
router
    .route('/:thoughtId/reactions').post(addReaction);

 // /api/thought/:thoughtId/reactions/:reactionsId
router
    .route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

//exporting router model
module.exports = router;