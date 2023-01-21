import React, { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([moviesApi.getMovies()])
        .then(([dataCards]) => {
            setCards(dataCards);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList cards={cards}/>
        </div>
    )
}

export default Movies;