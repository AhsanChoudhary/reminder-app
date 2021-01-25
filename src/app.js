const yargs = require('yargs');
const { addNote, listNotes } = require('../utils/notes');

const command = process.argv[3];
 



if (command == 'add') {
console.log('adding a note...');
addNote(yargs.argv.note)
} else if (command == 'remove') { 
console.log('removing a note');
} else if (command == 'list') {
console.log('listing all notes');
listNotes();
 } else {
     console.log('command not recognised');
 }
    
listNotes()