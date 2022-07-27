const { Schema, model } = require('mongoose');

// Schema to create a course model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
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
            default: Date.now,
            get: (timestamp) => timestamp  
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
    );
    
    const Reaction = model('reaction', reactionSchema);
    
    module.exports = Reaction;