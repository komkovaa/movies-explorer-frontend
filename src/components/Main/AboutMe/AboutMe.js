import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='line'>
                <h2 className='title'>Студент</h2>
            </div>
            <article className='two-columns about-me__two-columns'>
                <div className='two-columns__column about-me__column'>
                    <div className='about-me__description'>
                        <h3 className='about-me__name'>Анастасия</h3>
                        <h3 className='about-me__subtitle'>Фронтенд-разработчик, 32 года</h3>
                        <p className='about-me__text'>Я из Москвы, закончила факультет экономики ВГНА МинФина. В настоящее время делаю диплом по Frontend-разработке от Яндекс.Практикума. В свободное время занимаюсь танцами и делаю красивые вкусные букеты.</p>
                    </div>
                    <a className='animation about-me__link' href="https://github.com/komkovaa">Github</a>
                </div>
                <figure className='two-columns__column about-me__image-container'>
                    <img className='avatar' src={avatar} alt="Моё фото"></img>
                </figure>
            </article>
        </section>
    )
}

export default AboutMe;