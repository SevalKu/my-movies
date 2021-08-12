import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component{
    state = {
        movies : [],
        searchQuery:""
    }
    // FETCH API
    // async componentDidMount(){ 
    //     const baseUrl ="http://localhost:3002/movies"
    //     const response = await fetch(baseUrl);
    //     const data = await response.json();
    //     this.setState({movies:data})
    // }


    // AXIOS API
    async componentDidMount(){ 
        
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({movies:response.data})
    }
    // FETCH API
    // deleteMovie = async (movie)=>{
    //     const baseUrl =`http://localhost:3002/movies/${movie.id}`
    //     await fetch(baseUrl,{
    //         method:"DELETE"
    //     })
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );
    //     this.setState(state =>({
    //         movies:newMovieList
    //     }))
    // }

    // AXIOS API
    deleteMovie = async (movie)=>{
        axios.delete("http://localhost:3002/movies/${movie.id}")

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state =>({
            movies:newMovieList
        }))
    }
    searchMovie = (event) =>{
        this.setState({searchQuery:event.target.value})
    }
    render(){
        let filteredMovies = this.state.movies.filter(
            (movie) =>{
                return movie.Name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return(
            <Router>
        <div className="container">
            <Switch>
            <Route path="/add"component={AddMovie}/>
            <Route path="/" exact render={()=>(
                <React.Fragment>
               <div className="row">
                <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie}/>
                </div>
            </div>
            <MovieList 
            movies={filteredMovies}
            deleteMovieProp = {this.deleteMovie}/>
             </React.Fragment>
            )}>
            </Route>

            
            
            </Switch>
        </div>
        </Router>
        
    )
    }
}

export default App;