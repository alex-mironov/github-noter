import React from 'react';
import Repos from './github/Repos';
import UserProfile from './github/UserProfile';
import Notes from './notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

var base = Rebase.createClass('https://github-noter.firebaseio.com');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      repos: [],
      bio: {}
    };
  }
  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    helpers.getGithubInfo(username)
      .then((dataObj) => {
        this.setState({
          repos: dataObj.repos,
          bio: dataObj.bio
        });
      });
  }
  componentDidMount() {
    this.init(this.props.params.username);
  }
  componentWillReceiveProps(route) {
    base.removeBinding(this.ref);
    this.init(route.params.username);
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  render() {
    var username = this.props.params.username;

    return (
      <div className="row">
          <div className="col-md-4">
            <UserProfile username={username} bio={this.state.bio} />
          </div>
          <div className="col-md-4">
            <Repos username={username} repos={this.state.repos} />
          </div>
          <div className="col-md-4">
            <Notes username={username} notes={this.state.notes} addNote={this.handleAddNote.bind(this)} />
          </div>
      </div>
    );
  }
};

export default Profile;
