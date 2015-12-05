import React from 'react';
import Form from './form';
import UrlHistory from './urlHistory';
import db from './db';

const App = React.createClass({
  getInitialState() {
    return {
      err: null,
      links: []
    };
  },
  componentWillMount() {
    this.getLinks();
  },
  getLinks() {
    db.allDocs({include_docs: true}, (err, data) => {
      if (err) return this.setState({ err });
      this.setState({ links: data.rows });
    });
  },
  save(url) {
    db.saveURL(url, (err, result) => {
      if (err) return this.setState({ err });
      this.getLinks();
    });
  },
  delete(link) {
    db.remove(link.id, link.value.rev, (err, result) => {
      if (err) return this.setState({ err });
      this.getLinks();
    });
  },
  render() {
    const links = this.state.links;
    return <div>
      <h1>Beacon ball</h1>
      {this.state.err ? <p className="err">{JSON.stringify(this.state.err, null, 2)}</p> : null}
      <Form save={this.save} />
      <UrlHistory links={links} delete={this.delete} />
      <p>Add a url here and it'll be attached to the beacon ball, which you can throw around the office.</p>
      <p>See <a href="https://github.com/hxpaul/beacon-ball">repo maintainer</a> for the username and password and beacon ball.</p>
      <p><a href="http://www.clarkeology.com/m/23732/More+beacon+fun">Read more about beacons</a>.</p>
    </div>;
  }
});

export default App;
