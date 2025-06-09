import Notes from "../../../models/notes.js";

const serviceCreateNoteAsync = async(title, content, userId) => {
    const  note = new Notes(
        {
            title: title,
            content: content,
            authorId: userId
        }
    );
    await note.save();
    return note;

}

const serviceGetAllNotesAsync = async () => {
   return Notes.find();
}

const serviceGetNoteByIdAsync = async (id) => {
    const note = Notes.findById(id);
    return note;
}

const serviceUpdateNoteByIdAsync = async (id, title, content) => {
    const note = Notes.findById(id);
    note.title = title;
    note.content = content;
    await note.save();
    return note;
}

const serviceDeleteNoteByIdAsync = async (id) => {
    const note = Notes.findById(id);
    await note.deleteOne();
    return note;
}



export {
    serviceCreateNoteAsync,
    serviceGetAllNotesAsync,
    serviceGetNoteByIdAsync,
    serviceUpdateNoteByIdAsync,
    serviceDeleteNoteByIdAsync
}