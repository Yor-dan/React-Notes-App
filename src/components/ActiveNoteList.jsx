import React from 'react';
import NoteItem from './NoteItem';

function ActiveNoteList({ notes, deleteNote, archiveNote }) {
  if (notes.length === 0)
    return <p className="notes-list__empty-message">There is no notes</p>;

  return (
    <div className="notes-list">
      {notes.map((note) => {
        if (!note.archived) {
          return (
            <NoteItem
              key={note.id}
              {...note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          );
        }
      })}
    </div>
  );
}

export default ActiveNoteList;
