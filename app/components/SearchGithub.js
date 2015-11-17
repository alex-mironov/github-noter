import React from 'react';
import ReactDOM from 'react-dom';
import history from '../utils/history';

class SearchGithub extends React.Component {
  handleSubmit(ev) {
    ev.preventDefault();
    var noteEl = ReactDOM.findDOMNode(this.refs.username);
    history.pushState(null, `/profile/${noteEl.value}`);
    noteEl.value = '';
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button className="btn btn-block btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchGithub;
