import React from 'react';

import { useState } from "react";

import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import Note, { INote } from './components/Note';
import axios from 'axios';

const defaultNotes:INote[] = [];


function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [notes, setNotes]:[INote[], (posts: INote[]) => void] = React.useState(defaultNotes);

  React.useEffect(() => {
    axios
      .get<INote[]>('/api/notes',{
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => {
        setNotes(response.data);
        console.log('Notes displayed',response.data);
        
      });
  }, []);

    //Add a Note

    const addNote=(note:Note)=>{
      axios
      .post('/api/notes/', note)
      .then(response=>{
        setNotes([...notes,response.data]);
      });
      console.log("Note Created");

    }

    //Delete a Note
    const deleteNote = (id:number) =>{
      axios.delete(`/api/notes/${id}`)
      .then(response=>{
        console.log(response);
        console.log(response.data);
      })
      setNotes(notes.filter((note)=>note.id!==id));
      console.log("Note deleted");
    }

  

  return (
    <div className="container">
      <Header  clickAdd ={()=>
        setShowAddTask(!showAddTask)} 
        showAdd ={showAddTask}/>
      {showAddTask && 
        <AddNote onAdd={addNote}/>}
      {notes.length>0?
      (<Notes notes={notes} onDelete={deleteNote}></Notes>):('No notes to show') 
      }
    </div>
  );
}

export default App;
