export const getMovies = () => {
  return async (dispatch, getState) => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US&page=1"
    const res = await fetch(url);
    const movies = await res.json();
    dispatch({
      type: "GET_MOVIES",
      payload: {
        movies: movies.results
      }
    })
  };
}

export const getMovie = (id) => {
  return async (dispatch, getState) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US`
    const res = await fetch(url);
    const movie = await res.json();
    dispatch({
      type: "GET_MOVIE",
      payload: {
        movie
      }
    })
  }
}