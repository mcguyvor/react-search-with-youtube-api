import React,{Component} from 'react';
import './App.css';
import SearchBar from './component/SearchBar';
import axios from 'axios';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';
class App extends Component {
  constructor(props){
    super(props);
    this.state={video:[],selectedVideo:null,spinner:true};
  }
  componentDidMount(){
      setTimeout(() => {
        this.onTermSubmit('bnk48');
      }, 1000);
    
  }
  onTermSubmit = async (term) =>{
    console.log(term,'test on termsubmit');
    //request api to youtube api by using axios 
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
          part:'snippet',
          maxResults : 5,
          q:term,
          key: 'AIzaSyBZvnZ94pSdFbwIhjKvueG8xx4XMR8zI3k' // key for api
          }
        })
    this.setState({video: response.data.items,selectedVideo:response.data.items[0],spinner:false});
  }
  onVideoSelect = video =>{
    console.log(video);
    
      this.setState({selectedVideo: video})

   
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail spinner={this.state.spinner} selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.video}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
 