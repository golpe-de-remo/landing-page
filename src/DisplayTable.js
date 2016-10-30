//  mostrador de tabla

var React = require('react');
var OurButton = require("./OurButton.js");

var STATES = {
  CANDIDATE: "candidate",
  CURRENT: "current",
  DONE: "done"
};

var colors = {};
colors[STATES.CANDIDATE] = "active";
colors[STATES.CURRENT] = "success";
colors[STATES.DONE] = "warning";

var DisplayTable = React.createClass({
  propTypes: {
    participants: React.PropTypes.array.isRequired,
    states: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      participants: this.props.participants,
      states: this.props.states
    };
  },

  addParticipant: function (participantName) {
    var newParticipants = this.state.participants;
    var newStates = this.state.states;
    newParticipants.push(participantName);
    newStates.push("candidate");
    this.setState({participants: newParticipants});
    this.setState({states: newStates});
  },

  handleClick: function () {
    var name = this.refs.textBox.value;
    this.addParticipant(name);
    this.refs.textBox.value = "";
  },

  handleRandomizer: function () {
    var candidates = [];

    candidates = this.state.participants.map(function (name, i) {
      if (this.state.states[i] === STATES.CANDIDATE) {
        return i;
      }
    }, this);

    //  Reload: when no candidates, we set every particpant to "candidate" state.
    if (candidates.length === 0) {
      this.state.states.map(function (state, i) {
        this.state.states[i] = STATES.CANDIDATE;
      }, this);
    }

    else {
      this.state.participants.map(function (name, i) {
        if (this.state.states[i] === STATES.CURRENT) {
          this.state.states[i] = STATES.DONE;
        }
      }, this);
    }

    //  Randomizer: from "candidates" we select new "current"
    this.state.states[candidates[Math.floor(candidates.length * Math.random())]] = STATES.CURRENT;
    this.setState({states: this.state.states});
  },

  render: function () {
    return (
      <div className="bs-component">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Participante</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="info" >
              <td>
                <div className="form">
                  <input id="inputSmall" ref="textBox" placeholder="Nuevo participante"/>
                </div>
              </td>
              <td>
                <span className="input-group-btn input-group-sm">
                  <button type="button" className="btn btn-fab btn-fab-mini" onClick={this.handleClick}>
                    <i className="material-icons">face</i>
                  </button>
                </span>
              </td>
            </tr>

          {this.state.participants.map(function (name, i) {
            return (
              <tr className={colors[this.state.states[i]]} key={"name_" + i}>
                <td>{name}</td>
                <td>{this.state.states[i]}</td>
              </tr>
            );
          }, this)
          }

          </tbody>
        </table>
        <OurButton onClick={this.handleRandomizer}/>
      </div>
      );
  }
});

module.exports = DisplayTable;
