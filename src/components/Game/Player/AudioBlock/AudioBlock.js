import React, { Component } from "react";

class AudioBlock extends Component {
  render() {
    const audio = (
      <audio src={this.props.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
    return audio;
  }
}

export default AudioBlock;
