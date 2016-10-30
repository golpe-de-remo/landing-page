//  Botón

var React = require('react');

var OurButton = React.createClass({

  propTypes: {
    onClick: React.PropTypes.listener.isRequired
  },

  render: function () {
    return (
      <div className="bs-component">
        <a className="btn btn-raised btn-primary" onClick={this.props.onClick}>
          button
          <div className="ripple-container">
          </div>
        </a>
      </div>
    );
  }
});

module.exports = OurButton;
