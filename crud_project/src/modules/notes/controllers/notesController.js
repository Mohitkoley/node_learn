import {serviceCreateNoteAsync, serviceGetAllNotesAsync,
    serviceGetNoteByIdAsync,
    serviceUpdateNoteByIdAsync,
    serviceDeleteNoteByIdAsync
    } from "../service/notesService.js";

const createNoteAsync = async(req,res) => {
    try{
        const {title,content,userId } = req.body;
        serviceCreateNoteAsync(title,content,userId);
        res.status(201).json({message: "Note created", "data": note});
        
    }catch(err){
        console.error(err);
        res.status(err.status).json({message: "Error is"+ err.message});
    }
}

const getAllNotesAsync = async(req,res) => {
    try{
        const notes = await serviceGetAllNotesAsync();
        res.status(200).json({message: "Notes fetched", "data": notes});
    } 
    catch(err){
        console.error(err);
        res.status(err.status).json({message: "Error is"+ err.message});
    }
}

const getNoteByIdAsync = async(req,res) => {
    try{
        const {id} = req.params;
        const note = await serviceGetNoteByIdAsync(id);
        res.status(200).json({message: "Note fetched", "data": note});
    }
    catch(err){
        console.error(err);
        res.status(err.status).json({message: "Error is"+ err.message});
    }
}

const updateNoteByIdAsync = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,content} = req.body;
        const note = await serviceUpdateNoteByIdAsync(id,title,content);
        res.status(200).json({message: "Note updated", "data": note});
    }
    catch(err){
        console.error(err);
        res.status(err.status).json({message: "Error is"+ err.message});
    }
}

const deleteNoteByIdAsync = async(req,res) => {
    try{
        const {id} = req.params;
        const note = await serviceDeleteNoteByIdAsync(id);
        res.status(200).json({message: "Note deleted", "data": note});
    }
    catch(err){
        console.error(err);
        res.status(err.status).json({message: "Error is"+ err.message});
    }
}




export {createNoteAsync,getAllNotesAsync, getNoteByIdAsync, updateNoteByIdAsync, deleteNoteByIdAsync}