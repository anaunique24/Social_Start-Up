const { Thought, User } = require('../models');

module.exports = {
    async getAllThoughts (req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(202).json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getThoughtById (req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId});

            if(!thought) {
                return res.status(404).json({message: 'No thought with this ID.'});
            };

            res.status(202).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async createThought (req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId}, 
                {$push: {thoughts: thought_id} },
                {new: true}
            );

            if(!user) {
                return res.status(404).json({message: 'No user found for update.'});
            };

            res.status(202).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async updateThought (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                req.body,
                {new: true, runValidators: true});

            res.status(202).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteThought (req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId});

            if(!thought) {
                return res.status(404).json({message: 'No thought found with this ID.'});
            };

            res.status(202).json(thought);
        } catch (error) {
            res.status(500).json(error);
        };
    },
    async addReaction (req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                {$push: {reactions: req.body} },
                {new: true, runValidators: true});

                if(!reaction) {
                    return res.status(404).json({message: 'No thought found with this ID.'});
                };

            res.status(202).json(reaction);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async removeReaction (req, res) {
            try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.status(202).json(reaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};