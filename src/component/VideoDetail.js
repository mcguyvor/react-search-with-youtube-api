import React, { Component } from 'react';
import '../style/Loading-animation.css'
import Spinner from 'react-spinner-material';

class VideoDetail extends Component{
    
    render(){
        return(
            
            <div> 
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={this.props.spinner} />

                {console.log('test selectedvideo',this.props.selectedVideo)}
               {this.props.selectedVideo!=null?
                <div className='ui embed'>
                    <iframe src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`}
                    title='video player'
                    />
                </div> : null
               }
                {this.props.selectedVideo!=null? 
                    <div className='ui segment'>
                        <h4 className='ui header'>
                            {this.props.selectedVideo.snippet.title}
                        </h4>
                        <p>
                           {this.props.selectedVideo.snippet.description} 
                        </p>
                    </div>
                        : null
                    }
            </div> 
        );
    }
}
export default VideoDetail;