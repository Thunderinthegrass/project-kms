import React, { Component } from 'react';

export class ProfileStatusClass extends Component {
  state = {
    editMode: true,
    status: this.props.status,
  }

  editModeHandle = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  addStatus = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode && <span onDoubleClick={this.editModeHandle}>{this.state.status}</span>}
        {!this.state.editMode && <div><input type="text" autoFocus={true} onBlur={this.editModeHandle} onChange={this.addStatus} value={this.state.status} placeholder='Введите статус'/></div>}
      </div>
    )
  }
}

export default ProfileStatusClass;