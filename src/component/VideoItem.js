import React, { Component } from 'react';
import '../style/VideoItem-css.css'
class VideoItem extends Component{
    render(){
        return(
            <div onClick={()=>this.props.onVideoSelect(this.props.video)}className='video-item item'>
                <img 
                className='ui image'
                src={this.props.video.snippet.thumbnails.medium.url} 
                alt={this.props.video.snippet.title}
                />
                <div className='content'>
                    <div className='ui small header'>
                    {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoItem; 