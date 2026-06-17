import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id",getNoteById)
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// mongodb+srv://bm9804074_db_user:ZbCaTXCfICN9vF8R@cluster0.f2f2xub.mongodb.net/?appName=Cluster0