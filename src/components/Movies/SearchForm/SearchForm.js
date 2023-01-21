import React, { useState } from "react";
import './SearchForm.css';
import loupe from '../../../images/loupe.svg';

function SearchForm(props) {
    
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    

    function handleChange(e) {
        setInputValue(e.target.value);

        if (e.target.value.length === 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

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
                        required
                        value={inputValue || ""}
                        onChange={handleChange}
                    >
                    </input>
                    <button className="animation button search-form__button" type="submit" aria-label="Найти"></button>
                </fieldset>
                <fieldset className="search-form__fieldset search-form__fieldset_type_tumb">
                    <input className='checkbox' type='checkbox'></input>
                    <h2 className="search-form__title">Короткометражки</h2>
                </fieldset>
            </form>
            <span className="search-form__error">{isValid && "Нужно ввести ключевое слово"}</span>
        </section>
    )
}

export default SearchForm;