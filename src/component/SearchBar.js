import React, { Component } from 'react';
class SearchBar extends Component {
    constructor (props){
        super(props);
        this.state={ term : ''};
    }
    handleChange = evt =>{
        const change = evt.target.value;
        this.setState({term : change})
    }
    handleSubmit = evt =>{
        evt.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui search-bar segment">
                <form className ='ui form' onSubmit={this.handleSubmit}>
                    <div className ='field'>
                        <label>Video Search</label>
                        <input type='text' 
                        value={this.state.term}
                        onChange={this.handleChange}
                        />
                        
                    </div>

                </form>
            </div>
        );
    }
}
export default SearchBar;