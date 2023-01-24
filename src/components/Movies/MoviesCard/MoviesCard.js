import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import apiConfig from "../../../utils/Utils";
import './MoviesCard.css';

function MoviesCard({ card }) {
    const location = useLocation();

    const isMoviesPage = location.pathname === '/movies';

    const [disabled, setDisabled] = useState(false);

    const likeButtonClassName = (
        `cards__like ${disabled ? "cards__like_type_like" : "cards__like_type_inactive"}`
    );

    function handleClickSaveButton() {
        setDisabled(true);
    };

    function handleClickDeleteButton() {
        setDisabled(false);
    }


    return (
        <li className="cards__item">
            <a className="cards__link" href={card.trailerLink} target="_blank">
                <img className="cards__image" src={`${apiConfig.baseUrl}${card.image.url}`} alt={`Кадр из фильма ${card.nameRU}`}></img>
            </a>
            <div className="cards__description">
                <h2 className="cards__name">{card.nameRU}</h2>
                {isMoviesPage
                    ? (<button className={likeButtonClassName} type="button" aria-label="Избранное" onClick={!disabled ? handleClickSaveButton : handleClickDeleteButton} />)
                    : (<button className="cards__like cards__like_type_delete " type="button" aria-label="Избранное" />)}
            </div>
            <p className="cards__duration">{card.duration}</p>
        </li>
    );
}

export default MoviesCard;

