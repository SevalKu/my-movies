import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component{
    state = {
        movies : [
        {
            "id":1,
            "Name":"A",
            "rating":8.3,
            "overview":"Lorem ipsum dolor",
            "image": "https://picsum.photos/id/1027/200/300"
        },
        {
            "id":2,
            "Name":"B",
            "rating":5.3,
            "overview":"Lorem ipsum dolor",
            "image": "https://picsum.photos/id/1028/200/300"
        },
        {
            "id":3,
            "Name":"C",
            "rating":8.9,
            "overview":"Lorem ipsum dolor",
            "image": "https://picsum.photos/id/1029/200/300"
        }
        ]
    }
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SearchBar/>
                </div>
            </div>
            <MovieList 
            movies={this.state.movies}/>
        </div>
    
    )
    }
}

export default App;