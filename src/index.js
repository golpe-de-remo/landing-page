// require('babel-polyfill');

// La aplicación

var React = require('react');
var ReactDOM = require('react-dom');
window.jQuery = window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');
var DisplayTable = require("./DisplayTable.js");

var task = {
  participants: ["Arslaan", "Juan", "Lluc"],
  states: ["candidate", "candidate", "candidate"]
};

var App = React.createClass({
  render: function () {
    return (
      <div>
        <DisplayTable participants={task.participants} states={task.states}/>
      </div>

      );
  }
});

ReactDOM.render(<App/>,
  document.getElementById('root')
);

window.$.material.init();

window.$.material.ripples();
