import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      charsLeft: 50,
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState((prevState) => {
      if (event.target.value.length > 50) {
        return prevState;
      }
      return {
        title: event.target.value,
        charsLeft: 50 - event.target.value.length,
      };
    });
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmit}>
          <p className="note-input__title__char-limit">
            Chars left: {this.state.charsLeft}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Enter a title..."
            value={this.state.title}
            onChange={this.onTitleChange}
            required
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Your note goes here..."
            value={this.state.body}
            onChange={this.onBodyChange}
            required
          ></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
