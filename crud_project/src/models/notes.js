import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    content: {
        type: String,
        required: [true, "content is required"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "authorId is required"],
    },
    tags: {
        type: [String],
        default: ["general"],
        required: false,
    },
    isPinned: {
        type: Boolean,
        default: false,
        required: false,
    },
    isArchived: {
        type: Boolean,
        default: false,
        required: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    },
    color:{
        type: String,
        default: "ffffff",
        validate: {
            validator: function(v) {
                return /^[0-9a-fA-F]{6}$/.test(v);
            },
            message: props => `${props.value} is not a valid hex color!`
        }

    },
    attachments:{
            type: [String], 
            default: [],
    }
    
},{timestamps: true});

// Create a compound index on authorId and isDeleted fields
// This improves query performance when filtering notes by author and deleted status
NotesSchema.index({
    authorId: 1,      // Ascending index on authorId
    isDeleted: 1,     // Ascending index on isDeleted
});

const Notes = mongoose.model("Notes", NotesSchema);

export default Notes;