// Thought:

// thoughtText
    // String
    // Required
    // Must be between 1 and 280 characters

// createdAt
    // Date
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query

// username (The user that created this thought)
    // String
    // Required

// reactions (These are like replies)
    // Array of nested documents created with the reactionSchema

    // Reaction (SCHEMA ONLY)

    // reactionId
    
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
    // reactionBody
    
    // String
    // Required
    // 280 character maximum
    // username
    
    // String
    // Required
    // createdAt
    
    // Date
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query