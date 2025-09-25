import React, { Component } from 'react';

export class ProfileStatusClass extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  updateStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
        {this.state.editMode && <div><input type="text" autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.updateStatus} value={this.state.status} placeholder='Введите статус'/></div>}
        {/* <button onClick={() => this.updateStatus3('Статус')}>Жмяк</button> */}
      </div>
    )
  }
}

export default ProfileStatusClass;