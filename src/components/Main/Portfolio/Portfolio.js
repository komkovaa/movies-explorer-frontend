import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';
import pfeil from '../../../images/pfeil.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__subtitle'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://komkovaa.github.io/how-to-learn/' target="_blank">
                        <p className="portfolio__name">Статичный сайт</p>
                        <img className='portfolio__pfeil' src={pfeil}></img>
                    </a >
                </li>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://komkovaa.github.io/russian-travel/' target="_blank">
                        <p className="portfolio__name">Адаптивный сайт</p>
                        <img className='portfolio__pfeil' src={pfeil}></img>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://komkovaa.github.io/signin' target="_blank">
                        <p className="portfolio__name">Одностраничное приложение</p>
                        <img className='portfolio__pfeil' src={pfeil}></img>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;