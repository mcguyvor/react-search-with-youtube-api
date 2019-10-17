import React, { Component } from 'react';
import VideoItem from './VideoItem';
import uuid from 'uuid';
class VideoList extends Component{
    render(){
        return(
            <div className ='ui relaxed divided list'>
                {this.props.videos.map((idx)=>{
                    return(<VideoItem key={uuid()} video={idx} onVideoSelect={this.props.onVideoSelect} />) 
                })}
            </div>
        );
    }
}
export default VideoList;