import React, { useState, useEffect } from "react";
import NotesList from "./NotesList.component";


const Form = () => {
    const [notes, setNotes] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [noteId, setNoteId] = useState('');

    // Reset Function
    const handleReset = () => {
        setIsEditing(false);
        setNoteTitle('');
        setNoteDesc('');
        setNoteId('');
    }
    useEffect(()=>{
        setNotes(JSON.parse(localStorage.getItem('notes')));
    },[]);

    // Add Note Function
    const handleClick = () => {
        const notesObj = {
            title: noteTitle,
            desc: noteDesc,
            id: Math.random() + noteTitle
        }
        setNotes([...notes, notesObj]);
        handleReset();
        localStorage.setItem('notes',JSON.stringify(notes));

    }

    const handleUpdate =()=>{
       const updatedArr= notes.map((element)=>{
            if(noteId === element.id){
                element.title = noteTitle;
                element.desc = noteDesc;
            }
            return element;
        })
        setNotes(updatedArr);
        handleReset();
        localStorage.setItem('notes',JSON.stringify(notes));
    }


    return (
        
            <div className="container">
                <div className="my-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Note Title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" value={noteTitle} placeholder={noteTitle} onChange={e => setNoteTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Note Details</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={noteDesc} placeholder={noteDesc} onChange={e => setNoteDesc(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary" onClick={isEditing? handleUpdate: handleClick}>{isEditing ? 'Update Note' : 'Add Note'}</button>
                {isEditing && <button className="btn btn-primary mx-2" onClick={handleReset}>Cancel</button>}
                <hr />
                <h1>Notes:</h1>
                <NotesList notes={notes} setNotes={setNotes} setIsEditing={setIsEditing} setNoteTitle={setNoteTitle} setNoteDesc={setNoteDesc} setNoteId={setNoteId}/>
            </div>
    )
}

export default Form;