const express = require ('express');

const app = express();
app.use(express.json());

const notes = [
    { id: 1, firstName : 'Anjitha', lastName : 'George', phoneNumber : 78945645678, noteText: 'Colleague from work'},
    { id: 2, firstName : 'John', lastName : 'Wick', phoneNumber : 75545645678, noteText: 'Gardener'},
    { id: 3, firstName : 'Thomas', lastName : 'Edison', phoneNumber : 78885645678, noteText: 'Plumber'},
    ];

//get request    
app.get('/api/notes', (req,res) => {
res.json(notes);
});

//post request

 app.post('/api/notes',(req,res)=>{
    const note={
        id: notes[notes.length-1].id+1,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber,
        noteText:req.body.noteText
    } 
    notes.push(note);
    res.json(note);
});
//delete request
    app.delete('/api/notes/:id',(req,res)=>{
        const note = notes.find(c=>c.id===parseInt(req.params.id));    
        const index = notes.indexOf(note);
        notes.splice(index,1);
        res.json(note);
    });

const port = 5000;

app.listen(port, () =>console.log(`Server started in port ${port}`));
