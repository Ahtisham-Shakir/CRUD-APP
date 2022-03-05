import React from "react";

const NotesList = ({ notes, setNotes }) => {
    const handleDelete = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    }
    return (
        <div style={{ display: "flex" , flexWrap:'wrap'}}>
            {notes.map((element) => (

                <div key={element.id} className="card" style={{ width: '18rem', margin: '5px' }}>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.desc}</p>
                        <button className="btn btn-primary" onClick={() => handleDelete(element.id)}>Delete</button>
                    </div>
                </div>
            )
            )
            }
        </div>
    )
}

export default NotesList;