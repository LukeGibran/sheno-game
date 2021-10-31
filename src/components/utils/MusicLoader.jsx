import React from "react";

// Sound Effects
import sceneMusic from "../../assets/music/scene-music.mp3";
import inGame1 from "../../assets/music/in-game.mp3";

class SoundLoader extends React.Component {
  constructor(props) {
    super(props);

    this.sceneMusicRef = React.createRef();
    this.inGame1Ref = React.createRef();

    this.musicRef = [this.sceneMusicRef, this.inGame1Ref];
  }

  componentDidMount() {
    if (!this.props.num) return;
    this.pause();

    if (this.props.playMusic) {
      this.play();
    }
  }

  componentDidUpdate() {
    this.pause();
    if (this.props.playMusic) {
      this.play();
    }
  }

  play = () => {
    this.musicRef[this.props.num].current.play();
  };

  pause = () => {
    this.musicRef[this.props.num].current.pause();
  };

  render() {
    return (
      <>
        <audio src={sceneMusic} ref={this.sceneMusicRef} preload="true" loop />
        <audio src={inGame1} ref={this.inGame1Ref} preload="true" loop />
      </>
    );
  }
}

export default SoundLoader;
