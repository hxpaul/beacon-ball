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
    console.log('in url history, deleting', link );
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

  render() {
    const links = this.props.links;
    const { deleting } = this.state;
    return <ul>
      {links.map((link, index) => {
        console.log(index, link);
        const isDeleting = deleting.indexOf(link.id) !== -1;
        const doc = link.doc || {};
        return <li key={index}>
          <a href={doc.href}>{doc.label || doc.href}</a>
          {' '}
          <button disabled={isDeleting} onClick={() => this.delete(link)}>delete</button>
        </li>;
      })}
    </ul>;
  }
})

export default Form;
