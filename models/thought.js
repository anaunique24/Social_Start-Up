const {Schema, model} = require('mongoose');

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
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

const thoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: "Text is required",
        minLength: 1,
        maxLength: 280,
       },
    createdAt: {
        type: Date, 
        default: Date.now
       },
    username: {
        type: String,
        required: true,
    },
    // Array of nested documents created with the reactionSchema
    reaction: [reactionSchema],

toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

thoughtSchema.virtual("reactionCount").get(function () {
return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;