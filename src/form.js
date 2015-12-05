import React from 'react';

const { func } = React.PropTypes;

const Form = React.createClass({

  propTypes: {
    save: func.isRequired
  },

  save(e) {
    e.preventDefault();
    this.props.save(this.refs.url.value);
  },

  render( ) {
    return <form onSubmit={this.save}>
      <label htmlFor="url">URL</label>
      {' '}
      <input placeholder="Give me a url..." ref="url" />
    </form>;
  }
});

export default Form;
