class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar" id="navbar">
          <Search/>
        </nav>
        <div className="row">
          <div className="col-md-7" id="videoplayer">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" id="videolist">
            <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }

  changeVideo(props) {
    this.setState(state => ({
        currentVideo: props.video
      }));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//ReactDOM.render(<Search/>, document.getElementById("navbar"));
//ReactDOM.render(<VideoList/>, document.getElementById("videolist"));
//ReactDOM.render(<VideoPlayer/>, document.getElementById("videoplayer"));
