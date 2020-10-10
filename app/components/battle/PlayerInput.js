import React from "react";

export default class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setPlayer(this.state.username);
  }

  render() {
    const { label } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="player-input-container">
        <label htmlFor="username">{label}</label>
        <input name="username" onChange={this.handleInputChange} />
        <button className='btn' type="submit">Submit</button>
      </form>
    );
  }
}
