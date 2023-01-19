import React from "react";
import './SearchForm.css';
import loupe from '../../../images/loupe.svg';

function SearchForm() {
    return (
        <section className="search">
            <form className="search-form">
                <fieldset className="search-form__fieldset">
                    <img className="loupe" alt='Лупа' src={loupe}></img>
                    <input
                        className="search-form__input"
                        type="text"
                        placeholder="Фильм"
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                    <button className="animation button search-form__button" type="submit" aria-label="Найти"></button>
                </fieldset>
                <fieldset className="search-form__fieldset search-form__fieldset_type_tumb">
                    <input className='checkbox' type='checkbox'></input>
                    <h2 className="search-form__title">Короткометражки</h2>
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;