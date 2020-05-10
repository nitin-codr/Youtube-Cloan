import React from 'react';

const VideoDetails = (props) => {
    if(props.video) {
        const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title={props.video.snippet.title} src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4>{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
};

export default VideoDetails;