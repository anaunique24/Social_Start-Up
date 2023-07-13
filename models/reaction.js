const { Schema } = require('mongoose');
const { Timestamp } = require('bson');

const reactionSchema = new Schema(
    {
      reactionId: {
        // Mongoose's ObjectId data type
        type: Schema.Types.ObjectId,
        // Default value is set to a new ObjectId
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        // Set default value to the current timestamp
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

  module.exports = reactionSchema;