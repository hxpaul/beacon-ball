import React from 'react';

const { arrayOf, shape, string, func } = React.PropTypes;

const link = shape({
  href: string,
  label: string
});

const Form = React.createClass({

  getInitialState() {
    return {
      deleting: []
    };
  },

  delete(link) {
    const deleting = this.state.deleting;
    deleting.push(link.id);
    this.setState({ deleting });
    this.props.delete(link);
  },

  propTypes: {
    delete: func,
    links: arrayOf(link)
  },

  getDefaultProps() {
    return {
      links: []
    };
  },

  url(doc) {
    return doc.href;
  },

  label(doc) {
    return doc.href;
  },

  render() {
    const links = this.props.links;
    const { deleting } = this.state;
    return <ul>
      {links.map((link, index) => {
        const isDeleting = deleting.indexOf(link.id) !== -1;
        const doc = link.doc || {};
        return <li key={index}>
          <a href={this.url(doc)}>{this.label(doc)}</a>
          {' '}
          <button disabled={isDeleting} onClick={() => this.delete(link)}>delete</button>
        </li>;
      })}
    </ul>;
  }
})

export default Form;
