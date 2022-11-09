import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./components/MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2b6816c9'
const movie1 = {
    
    "Title": "The Last Black Man in San Francisco",
    "Year": "2019",
    "imdbID": "tt4353250",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTQ5OTUwYjQtYmM5Ni00YTY5LWFiOWEtYTg1MTg2Y2NmY2JhXkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_SX300.jpg"
}





const App = () => { // 2b6816c9
    const [movies, setmovies] = useState([[]]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setmovies(data.Search)
    }

    useEffect(() => {
       searchMovies('Black man')  
     
    }, []);

    
   
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange = {(e)=> {setSearchTerm(e.target.value)}}
                />
                <img
                src={searchIcon}
                alt="search"
                onClick={()=>{searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie)=>
                            // <MovieCard movie={movie}/>
                           <MovieCard Title={movie.Title} Poster={movie.Poster} Year={movie.Year} Type={movie.Type}/>

                        )}
                    {/* <MovieCard Title={movie1.Title} Poster={movie1.Poster} Year={movie1.Year} Type={movie1.Type}/> */}
    
                </div>

                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

           


        </div>       
        
    );
}

export default App