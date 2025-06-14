import express from 'express';
import auth from '../../middleware/auth.js';
import {
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getNotes,
} from "./controller/note_controller.js";
const router = express.Router();

router.post('/notes/:id',auth, createNote);
router.put('/notes/:noteId',auth, updateNote);
router.delete('/notes/:noteId',auth, deleteNote);
router.get('/notes/:noteId',auth, getNote);
router.get('/notes/:id/',auth, getNotes);

export default router;







