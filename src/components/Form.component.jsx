import React, { useState } from "react";
import NotesList from "./NotesList.component";


const Form = () => {
    const [notes, setNotes] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const handleClick = () => {
        const notesObj = {
            title: noteTitle,
            desc: noteDesc,
            id: Math.random() + noteTitle
        }
        setNotes([...notes, notesObj]);
        // console.log(notes);
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
            <button className="btn btn-primary" onClick={handleClick}>Add Note</button>
            <hr />
            <h1>Notes:</h1>
            <NotesList notes={notes} setNotes={setNotes} />
        </div>
        
    )
}

export default Form;