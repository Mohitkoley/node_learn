import {
    createNotesService,
    updateNoteById,
    deleteNoteById,
    getAllNotesByUserId,
    getNoteById,
    allNotes
} from "../service/note_service.js";


const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.params.id;
        const note = await createNotesService(title, content, userId);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const noteId = req.params.noteId;
        const note = await updateNoteById( title, content, noteId);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteNote = async (req, res) => {
    try{
        const noteId = req.params.noteId;
        const note = await deleteNoteById(req.params.id, noteId);
        res.status(200).json(note);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: error.message });
    }
}

const getNote = async (req, res) => {
    try{
        const noteId = req.params.noteId;
        const note = await getNoteById(noteId, noteId);
        res.status(200).json(note);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}

const getNotes = async (req, res) => {
    try{
        const userId = req.params.id;
        const notes = await getAllNotesByUserId(userId);
        res.status(200).json(notes);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}

const getAllNotes = async (req, res) => {
    try{
        const notes = await allNotes();
        res.status(200).json({
            message: "notes fetched successfully",
            notes: notes
        });
    }catch(e){
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}



export {
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getNotes,
    getAllNotes,
};
