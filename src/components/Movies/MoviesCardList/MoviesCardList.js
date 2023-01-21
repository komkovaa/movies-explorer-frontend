import React from "react";
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="cards">
            <ul className="cards__list">
                {props.cards.map((card, cardId) => {
                    return (<MoviesCard key={cardId} card={card}/>)
                })}
            </ul>
            <button className="button button_bg_white cards__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;