const { User, Thought } = require('../models');

module.exports = {
    //get all users
    async getAllUser(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //get one user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
            
            if(!user) {
                return res.status(404).json({message: 'No user found with this ID.'})
            }

            res.json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //update a user by ID
    async updateUser (req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true, runValidators: true});
            res.json(user);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //delete a user by id
    async deleteUser (req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.userId});
            await Thought.deleteMany({ _id: { $in: user.thoughts } });

            if(!user) {
                return res.status(404).json({message: 'No user found with this ID.'})
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //add a friend to user data
    async addFriend (req, res) {
        try {
            const userFriend = await User.findOneAndUpdate({ _id: req.params.userId}, {$addToSet: {friends: req.params.friendId} }, {new: true});
            res.status(200).json(userFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //delete a friend from user data
    async deleteFriend (req, res) {
        try {
            const userFriend = await User.findOneAndDelete({ _id: req.params.userId}, {$pull: {friends: req.params.friendId} }, {new: true});

            res.status(202).json(userFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}