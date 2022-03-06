import React from "react";

const NotesList = ({ notes, setNotes, setIsEditing, setNoteTitle, setNoteDesc, setNoteId }) => {

    // Function to Delete Note
    const handleDelete = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    }

    // Function on Edit Button
    const handleEdit = (id) => {
        setIsEditing(true);
        for (let index = 0; index < notes.length; index++) {
            const note = notes[index];
            if(note.id === id){
                setNoteId(note.id);
                setNoteTitle(note.title);
                setNoteDesc(note.desc);
                break;
            }
            
        }
    }

    return (
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {notes.map((element) => (

                <div key={element.id} className="card" style={{ width: '18rem', margin: '5px' }}>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.desc}</p>
                        <button className="btn btn-primary" onClick={() => handleDelete(element.id)}>Delete</button>
                        <button className="btn btn-primary mx-2" onClick={() => handleEdit(element.id)}>Edit</button>
                    </div>
                </div>
            )
            )
            }
        </div>
    )
}

export default NotesList;