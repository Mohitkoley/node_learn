import { createNoteAsync, getAllNotesAsync, getNoteByIdAsync, updateNoteByIdAsync, deleteNoteByIdAsync } from "./controllers/notesController.js";
import express from "express";
const router = express.Router();
router.post("/notes",createNoteAsync);
router.get("/notes",getAllNotesAsync);
router.get("/notes/:id",getNoteByIdAsync);
router.put("/notes/:id",updateNoteByIdAsync);
router.delete("/notes/:id",deleteNoteByIdAsync);
export default router;

