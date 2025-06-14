import Notes from '../model/notes.js';


const createNotesService = async (title, content, userId) => {
  
        const note = await Notes.create({
            title,
            content,
            userId
        });
        return note;
}

const updateNoteById = async ( title, content,id) => {
    try {
        const note = await Notes.findByPk(id);
        if (!note) {
            throw new Error('Note not found');
        }
        note.title = title;
        note.content = content;
        await note.save();
        return note;
    } catch (error) {
        throw error;
    }
}

const deleteNoteById = async (id) => {
    try {
        const note = await Notes.findByPk(id);
        if (!note) {
            throw new Error('Note not found');
        }
        await note.destroy();
        return note;
    } catch (error) {
        throw error;
    }
}

const getAllNotesByUserId = async (userId) => {
    try {
        const notes = await Notes.findAll({
            where: {
                userId
            }
        });
        return notes;
    } catch (error) {
        throw error;
    }
}

const getNoteById = async (id) => {
    try {
        const note = await Notes.findByPk(id);
        if (!note) {
            throw new Error('Note not found');
        }
        return note;
    } catch (error) {
        throw error;
    }
}

const allNotes = async () => {
    try {
        const notes = await Notes.findAll();
        return notes;
    } catch (error) {
        throw error;
    }
}

export{
    createNotesService,
    updateNoteById,
    deleteNoteById,
    getAllNotesByUserId,
    getNoteById,
    allNotes,
};


