import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        <div onClick={()=> props.onVideoSelect(props.video)} className="ui item video-item">
            <img alt={props.video.snippet.title} className="ui image" src={props.video.snippet.thumbnails.medium.url} />
            <div className="ui content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
            {/* <div>
                {props.video.snippet.description}
            </div> */}
        </div>
    )
}

export default VideoItem;