import { useState } from "react";
import Note from "./Note";

interface AddNotePropes{
    onAdd:(note:Note)=>void
}

const initUser: Note = { firstName:'', lastName: '', phoneNumber: '',noteText: ''};
const AddNote:React.FC<AddNotePropes> = ({onAdd}) => {
    const [formValue, setFormValue] = useState(initUser);


    

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setFormValue({
           ...formValue,
           [e.target.name]: e.target.value
       })
      };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onAdd(formValue)
        setFormValue(initUser);

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>First Name</label>
            <input type='text' 
            placeholder="Enter first name"
            value = {formValue.firstName} 
            name="firstName"
            onChange={onInputChange}
            ></input>
        </div>
        <div className="form-control">
            <label>Last Name</label>
            <input type='text' 
            placeholder="Enter last name"
            value={formValue.lastName}
            name="lastName"
            onChange={onInputChange}
            ></input>
        </div>
        <div className="form-control">
            <label>Phone Number</label>
            <input type='text' 
            placeholder="Enter phone number"
            value={formValue.phoneNumber}
            name="phoneNumber"
            onChange={onInputChange}
            ></input>
        </div>
        <div className="form-control">
            <label>Note</label>
            <input type='text' 
            placeholder="Enter note"
            value={formValue.noteText}
            name="noteText"
            onChange={onInputChange}
            ></input>
        </div>

        <input type="submit" 
        disabled={!formValue.firstName||!formValue.lastName||!formValue.phoneNumber||!formValue.noteText} 
        value='Save Note' 
        className="btn btn-block">
        </input>
        </form>
    )
}

export default AddNote
