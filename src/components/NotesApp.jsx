// copilot:ignore
import React from 'react';
import Header from './Header';
import Body from './Body';
import { getNotes } from '../utils';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      searchKeyword: '',
    };

    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNote(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  onSearchNote = (keyword) => {
    this.setState({ searchKeyword: keyword });
  };

  componentDidUpdate() {
    // sync notes state to localStorage
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  render() {
    let notes;

    if (this.state.searchKeyword) {
      notes = this.state.notes.filter((note) => {
        return note.title
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase());
      });
    } else {
      notes = this.state.notes;
    }

    return (
      <>
        <Header searchNote={this.onSearchNote} />
        <Body
          notes={notes}
          addNote={this.onAddNote}
          deleteNote={this.onDeleteNote}
          archiveNote={this.onArchiveNote}
        />
      </>
    );
  }
}

export default NotesApp;
