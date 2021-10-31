import React from "react";

import sceneMusic from "../../assets/music/scene-music.mp3";
import inGameMusic from "../../assets/music/in-game.mp3";

class MusicLoader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      music: [sceneMusic, inGameMusic],
    };

    this.audioElement = React.createRef();
  }

  componentDidMount() {
    this.pause();
    this.audioElement.current.src = this.state.music[this.props.num];

    if (this.props.playMusic) {
      this.play();
    }
  }

  componentDidUpdate() {
    this.pause()
    if (this.props.playMusic) {
      this.play();
    }
  }

  play = () => {
    this.audioElement.current.play();
  };

  pause = () => {
    this.audioElement.current.pause();
  };

  render() {
    return <audio src="" ref={this.audioElement} preload="true" loop />;
  }
}

export default MusicLoader;
