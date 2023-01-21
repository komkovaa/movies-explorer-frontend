import React from "react";
import { useLocation } from 'react-router-dom';
import apiConfig from "../../../utils/Utils";
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();

    const isMoviesPage = location.pathname === '/movies';

    return (
        <li className="cards__item">
            <a className="cards__link" href={props.card.trailerLink} target="_blank">
                <img className="cards__image" src={`${apiConfig.baseUrl}${props.card.image.url}`} alt={`Кадр из фильма ${props.card.nameRU}`}></img>
            </a>
            <div className="cards__description">
                <h2 className="cards__name">{props.card.nameRU}</h2>
                {isMoviesPage && <button className="cards__like cards__like_type_like" type="button" aria-label="Избранное" />}
                {!isMoviesPage && <button className="cards__like cards__like_type_delete " type="button" aria-label="Избранное" />}
            </div>
            <p className="cards__duration">{props.card.duration}</p>
        </li>
    );
}

export default MoviesCard;

