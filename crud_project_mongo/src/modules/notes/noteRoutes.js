import express from "express";
import auth from '../../middleware/auth.js';
import { createNoteAsync, deleteNoteByIdAsync, getAllNotesAsync, getNoteByIdAsync, updateNoteByIdAsync } from "./controllers/notesController.js";
const router = express.Router();
router.post("/notes",auth,createNoteAsync);
router.get("/notes",auth,getAllNotesAsync);
router.get("/notes/:id",auth,getNoteByIdAsync);
router.put("/notes/:id",auth,updateNoteByIdAsync);
router.delete("/notes/:id",auth,deleteNoteByIdAsync);
export default router;

