const addNote = (myNote) => {
    console.log(myNote)
}
    module.exports = {
        addNote
    }

    const fs = require('fs')

    const loadNotes = () => {
        try {
            const dataBuffer = fs.readFileSync('notes.json');
            const notesJson = dataBuffer.toString();
            return JSON.parse(notesJson);
        } catch (error) {
            return [];
        }
    };

    const addNote = myNote => {
        const allNotes = loadNotes()
        allNotes.push({reminder: myNote})
    }

    const saveNotes = allNotes => {
        const notesJson = JSON.stringify(allNotes);
        fs.writeFileSync('notes.json', notesJson);
    }

    const listNotes = () => {
        const allNotes = loadNotes();
        allNotes.map((note, index) => {
            console.log(`${index + 1}. ``${notes.reminder}`);
        });
    }

    module.exports = {
        addNote,
        listNotes,
    };