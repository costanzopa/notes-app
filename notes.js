const fs = require('fs');


const add = function (title, body) {
	const  notes = loadNotes();
	const  duplicatesNotes = notes.filter(function(note) {
		return note.title === title
	})

	if (duplicatesNotes.length === 0) {
			notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
	}
};


const loadNotes = function() {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON   = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch(e) {
		return [];
	}
}


const saveNotes = function(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
	add: add
};