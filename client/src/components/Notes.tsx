import Note, { INote } from './Note';


interface NotesProps{
    notes: INote[],
    onDelete:(id:number)=>void,
}

const Notes:React.FC<NotesProps> = ({notes,onDelete}) => {

    return (
        <>
        {notes.map((note)=>(
         <Note 
         key = {note.id} note = {note} 
         onDelete={onDelete}
     />
        ))}
        </>
    )
}

export default Notes
