import React from 'react';
import ReactDOM from 'react-dom';

class AddNote extends React.Component {
  handleSubmit() {
    var noteEl = ReactDOM.findDOMNode(this.refs.note);
    this.props.addNote(noteEl.value);
    noteEl.value = '';
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add new note..." />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
};

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
