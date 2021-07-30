import { FaTimes } from 'react-icons/fa';
interface Note{
    firstName: string,
    lastName: string,
    phoneNumber: string,
    noteText:string,
}
export interface INote extends Note {
    id: number;
  }


interface NoteProps{
    note: INote;
    onDelete:(id:number)=>void,
}

const Note: React.FC<NoteProps> = ({note,onDelete}) => {
    return (
    <div className="note">
            <h3>{note.firstName} {note.lastName}
                <FaTimes style ={{color:'red', cursor:'pointer'}} 
                onClick = {()=>onDelete(note.id)}/>
            </h3>
            <p>{note.phoneNumber}<br></br>{note.noteText}</p>
        </div>
    )
}

export default Note
