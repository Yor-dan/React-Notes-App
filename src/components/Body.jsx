import React from 'react';
import NoteInput from './NoteInput';
import ActiveNoteList from './ActiveNoteList';
import ArchivedNoteList from './ArchivedNoteList';

function Body({ notes, addNote, deleteNote, archiveNote }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Active Notes</h2>
      <ActiveNoteList
        notes={activeNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
      <h2>Archive</h2>
      <ArchivedNoteList
        notes={archivedNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </div>
  );
}

export default Body;
