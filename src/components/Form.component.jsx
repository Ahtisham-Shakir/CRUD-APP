import React from "react";

const Form = () => (
    <div className="container">
        <div className="my-3">
            <label for="exampleFormControlInput1" className="form-label">Note Title</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add note title"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Note Details</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add note details"></textarea>
        </div>
        <button className="btn btn-primary">Add Note</button>
    </div>
)

export default Form;