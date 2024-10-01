import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onSearchNote(event) {
    this.setState({ keyword: event.target.value });
    this.props.searchNote(event.target.value);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes📝</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Search note..."
            value={this.state.keyword}
            onInput={this.onSearchNote}
          />
        </div>
      </div>
    );
  }
}

export default Header;
