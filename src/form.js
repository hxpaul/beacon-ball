import React from 'react';
import ReactDom from 'react-dom';

const { func } = React.PropTypes;

const Form = React.createClass({

  propTypes: {
    save: func.isRequired
  },

  save(e) {
    e.preventDefault();
    const url = ReactDom.findDOMNode(this.refs.url);
    this.props.save(url.value);
  },

  render( ) {
    return <form onSubmit={this.save}>
      <div>
        <label htmlFor="url">URL</label> <input placeholder="Give me a url..." ref="url" />
      </div>
    </form>;
  }
});

export default Form;
