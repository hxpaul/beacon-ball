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
    const self = this;
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
  nuke() {
    console.warn('nuking whole db');
    db.destroy();
    this.getLinks();
  },
  render() {
    if (!this.state) return null;
    const links = this.state.links;
    return <div>
      <h1>Beacon ball</h1>
      {this.state.err ? <p className="err">{JSON.stringify(this.state.err, null, 2)}</p> : null}
      <Form save={this.save} />
      <UrlHistory links={links} delete={this.delete} />
      <button onClick={this.nuke}>Nuke it</button>
    </div>;
  }
});

export default App;
