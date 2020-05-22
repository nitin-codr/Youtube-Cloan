import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const KEY = 'AIzaSyAuemM9CGFNzLR2Js50KUQl0ec0_tH2C5I';
class App extends React.Component {
    
    state= { 
        videos: [],
        selectedVideo: null
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    componentDidMount = () => {
        this.onTermSubmit('Buildings')
    }
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                q: term,
                key: KEY
            }
        }).then((response) => {
            this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
            console.log(this.state.videos);
        });
    };
    loadClient=() => {
        youtube.client.setApiKey(KEY)
        return youtube.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("youtube client loaded for API"); },
                function(err) { console.error("Error loading youtube client for API", err); });
    }
    execute=() => {
        return youtube.client.youtube.comments.list({
        "part": "snippet",
        "parentId": "UgzDE2tasfmrYLyNkGt4AaABAg"
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }
    render() {
        return (
            <div className="jumbotron container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video = {this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>

                    </div>
                </div>
            </div>
        );
    };
};

export default App;