import React, { Component } from "react"

class UploadField extends Component {
  render() {
    return (
      <div>
        <input
          type="file"
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          accept=".jpg, .png, .jpeg"
          required={this.props.required}
        />
      </div>
    )
  }
}

export default UploadField
