import React from "react";

// Sound Effects
import ding from '../../assets/music/ding.mp3'
import tada from '../../assets/music/tada.mp3'
import up from '../../assets/music/1up.mp3'
import wrong from '../../assets/music/wrong.mp3'
import yehey from '../../assets/music/yehey.mp3'

class SoundLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [ding, wrong, tada, up, yehey],
    };

    this.audioElement = React.createRef();
  }

  componentDidMount() {
    this.pause();
    this.audioElement.current.src = this.state.music[this.props.num];
    this.play();
  }

  play = () => {
    this.setState({ play: true, pause: false });
    this.audioElement.current.play();
  };

  pause = () => {
    this.audioElement.current.pause();
  };

  render() {
    return <audio src="" ref={this.audioElement} />;
  }
}

export default SoundLoader;
