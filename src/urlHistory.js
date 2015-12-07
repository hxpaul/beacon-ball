'use strict';
const React = require('react');

const { arrayOf, shape, string, func } = React.PropTypes;

module.exports = React.createClass({

  getInitialState() {
    return {
      deleting: []
    };
  },

  propTypes: {
    delete: func,
    links: arrayOf(shape({
      href: string,
      label: string
    }))
  },

  getDefaultProps() {
    return {
      links: []
    };
  },

  delete(link) {
    const deleting = this.state.deleting;
    deleting.push(link.id);
    this.setState({ deleting });
    this.props.delete(link);
  },

  hasProtocol(url) {
    return /^\w+:\/\//.test(url);
  },

  url(doc) {
    if (this.hasProtocol(doc.href)) {
      return doc.href;
    }
    return 'http://' + doc.href;
  },

  label(doc) {
    if (this.hasProtocol(doc.href)) {
      return doc.href.replace(/^\w+:\/\//, '');
    }
    return doc.href;
  },

  render() {
    const links = this.props.links;
    const { deleting } = this.state;
    return (
      <ul>
      {links.map((link, index) => {
        const isDeleting = deleting.indexOf(link.id) !== -1;
        const doc = link.doc || {};
        return (
          <li key={index}>
            <a href={this.url(doc)}>{this.label(doc)}</a>
            {' '}
            <button disabled={isDeleting} onClick={() => this.delete(link)}>delete</button>
          </li>
        );
      })}
      </ul>
    );
  }
});
