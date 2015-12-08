'use strict';
const React = require('react');
const Form = require('./form');
const UrlHistory = require('./urlHistory');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>Beacon ball</h1>
        {this.props.err ? <p className="err">{JSON.stringify(this.props.err, null, 2)}</p> : null}
        <Form save={this.props.save} />
        <UrlHistory links={this.props.links} delete={this.props.delete} />
        <p>Add a url here and it'll be attached to the beacon ball, which you can throw around the office.</p>
        <p>Install <a href="https://github.com/dermike/physical-web-scan">physical web scan</a> or <a href="https://play.google.com/store/apps/details?id=physical_web.org.physicalweb&hl=en">this app</a> or ios equivalent to scan the beacon ball.</p>
        <p><a href="http://www.clarkeology.com/m/23732/More+beacon+fun">Read more about beacons</a>.</p>
      </div>
    );
  }
});
