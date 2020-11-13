function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const drums = [
{ key: 'Q', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{ key: 'W', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{ key: 'E', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{ key: 'A', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{ key: 'S', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{ key: 'D', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{ key: 'Z', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{ key: 'X', beats: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{ key: 'C', beats: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


const App = () =>
React.createElement("div", { id: "drum-machine", className: "container" },
React.createElement("div", { id: "display", className: "display" },
React.createElement("h1", null, "Drum Machine"),
drums.map((drums, i) =>
React.createElement(Box, { text: drums.key, key: i, audio: drums.beats }))));





class Box extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",










    () => {
      this.audio.current.play();
      const parentalNode = this.audio.current.parentNode;
      parentalNode.classList.add('active');

      const id = this.audio.current.id;

      const display = parentalNode.parentNode;
      display.querySelector('h1').innerText = id;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', () => {const parentalNode = this.audio.current.parentNode;parentalNode.classList.remove('active');});}

  render() {
    const { text, audio } = this.props;
    return (
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `'drum-${text}` },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, id: text, className: "clip" })));


  }}


document.addEventListener('keypress', event => {
  const keyPressed = event.key.toUpperCase();
  const audio = document.getElementById(keyPressed);

  if (audio) {
    const parentalNode = audio.parentNode;
    parentalNode.classList.add('active');

    const display = parentalNode.parentNode;
    display.querySelector('h1').innerText = keyPressed;

    audio.play();
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('drum-machine'));