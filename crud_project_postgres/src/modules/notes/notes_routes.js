import express from 'express';
import {
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getNotes,
} from "./controller/note_controller.js";
const router = express.Router();

router.post('/notes/:id', createNote);
router.put('/notes/:noteId', updateNote);
router.delete('/notes/:noteId', deleteNote);
router.get('/notes/:noteId', getNote);
router.get('/notes/:id/', getNotes);

export default router;







