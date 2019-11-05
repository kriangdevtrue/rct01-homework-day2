import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const handleDetailsClick = (film) => {
  console.log("Fetching details for "+film.title);
}

const FilmRow = (props) => {
  const year = new Date(props.film.release_date).getFullYear();
  return(
    <div className="film-row" onClick={()=>{ handleDetailsClick(props.film); }}>
      <FilmPoster posterPath={props.film.poster_path} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
        <Fave/>
      </div>
    </div>
  )
}


export default FilmRow;