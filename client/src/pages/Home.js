import React from 'react';
import Movie from '../components/Movie.js';
import { CardColumns, Container } from 'react-bootstrap';
import useFetch from '../hooks/useFetch.js';

function Home() {
  const { 
    data: movies, 
    error: errorMovies, 
    loading: loadingMovies, 
  } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US&page=1")
  
  return (
    <Container>
      {loadingMovies && <p class="display-3">Loading...</p>}
      {errorMovies && <p>{errorMovies.message}</p>}
      <CardColumns>
        {!loadingMovies && movies.results.map((movie) => {
          return (
            <Movie movie={movie} key={movie.id}/>
          ) 
        })}
      </CardColumns>
    </Container>
  )
}

export default Home