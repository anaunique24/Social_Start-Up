const router = require('express').Router();
//creating all user routes
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require("../../contollers/user-controller");

// /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// /api/users/:id
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;