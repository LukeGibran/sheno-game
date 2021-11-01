import React from "react";

// Sound Effects
import ding from "../../assets/music/ding.mp3";
import tada from "../../assets/music/tada.mp3";
import up from "../../assets/music/1up.mp3";
import wrong from "../../assets/music/wrong.mp3";
import yehey from "../../assets/music/yehey.mp3";

class SoundLoader extends React.Component {
  constructor(props) {
    super(props);

    this.dingRef = React.createRef();
    this.tadaRef = React.createRef();
    this.upRef = React.createRef();
    this.wrongRef = React.createRef();
    this.yeheyRef = React.createRef();

    this.musicRef = [
      this.dingRef,
      this.wrongRef,
      this.upRef,
      this.tadaRef,
      this.yeheyRef,
    ];
  }

  componentDidMount() {
    this.upRef.current.volume = 0.4
    this.tadaRef.current.volume = 0.6
    this.wrongRef.current.volume = 0.4
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
        <audio src={ding} ref={this.dingRef} preload="true" />
        <audio src={wrong} ref={this.wrongRef} preload="true" />
        <audio src={tada} ref={this.tadaRef} preload="true" />
        <audio src={up} ref={this.upRef} preload="true" />
        <audio src={yehey} ref={this.yeheyRef} preload="true" />
      </>
    );
  }
}

export default SoundLoader;
