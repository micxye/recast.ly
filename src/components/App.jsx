class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this);
    this.changeVideos = this.changeVideos.bind(this);
    this.search = this.search.bind(this);
    //var vids = this.search('cats');
    //console.log('vids', vids);
    //var vid = vids[0]
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      cv: this.changeVideo
    };

    this.search(query);
  }

  render() {
    return (
      <div>
        <nav className="navbar" id="navbar">
          <Search s={this.search}/>
        </nav>
        <div className="row">
          <div className="col-md-7" id="videoplayer">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" id="videolist">
            <VideoList videos={this.state.videos} cv = {this.changeVideo}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.search('cats');
  }

  changeVideo(video) {
    this.setState(state => ({
      currentVideo: video
    }));
  }

  changeVideos(videos) {
    this.setState(state => ({
      videos: videos
    }));
    this.changeVideo(this.state.videos[0]);
  }

  searchYouTube(query) {
    var context = this;
    this.changeVideos = this.changeVideos.bind(this);
    searchYouTube({query: query, maxResults: 10, key: window.YOUTUBE_API_KEY, part: 'snippet'}, function(data) {
      context.changeVideos(data);
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//ReactDOM.render(<Search/>, document.getElementById("navbar"));
//ReactDOM.render(<VideoList/>, document.getElementById("videolist"));
//ReactDOM.render(<VideoPlayer/>, document.getElementById("videoplayer"));
