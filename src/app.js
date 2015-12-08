'use strict';
const React = require('react');
const Form = require('./form');
const UrlHistory = require('./urlHistory');
const App = require('./statelessApp');
const db = require('./db');

module.exports = React.createClass({
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
    db.allDocs({ include_docs: true }, (err, data) => {
      if (err) return this.setState({ err, data });
      this.setState({ links: data.rows });
    });
  },
  save(url) {
    db.saveURL(url, (err, result) => {
      if (err) return this.setState({ err, result });
      this.getLinks();
    });
  },
  delete(link) {
    db.remove(link.id, link.value.rev, (err, result) => {
      if (err) return this.setState({ err, result });
      this.getLinks();
    });
  },
  render() {
    return <App delete={this.delete} save={this.save} links={this.state.links} err={this.state.err} />;
  }
});
