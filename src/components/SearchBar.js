import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
   
    handleFormSubmit =(event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-3">
                    <div className="col-12">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search a movie" />
                    </div>
                    <div className="col-12">
                        <Link type="button" 
                        to="/add"
                        className="btn btn-md btn-danger mt-4 mb-5" 
                        style={{float:'right'}}>Add Movie</Link> 
                    </div>

                </div>
            </form>
        )
    }
}
export default SearchBar;