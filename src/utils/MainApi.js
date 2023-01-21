import apiConfig from "./Utils";

const form = document.querySelector(".search-form");
const cards = document.querySelector('.cards');
const result = document.querySelector('.cards__list');
const error = document.querySelector('.cards__error');
const preloader = document.querySelector('.preloader');

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

class MainApi {
    constructor(apiConfig) {
        this._baseUrl = apiConfig.baseUrl;
        this._headers = apiConfig.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // getUserInfo() {
    //     return fetch (`${this._baseUrl}/users/me`, {
    //         headers: this._headers
    //     })
    //     .then (this._handleResponse);
    // }
    
}

function searchMovies(name) {
    fetch(`https://api.nomoreparties.co/beatfilm-movies/${name}`)
        .then(res => res.json())
        .then(handleResponse)
}

// function searchMovies(card, cardId) {
//     return fetch(`https://api.nomoreparties.co/beatfilm-movies/${card}/${cardId}`)
// }
// form.addEventListener('submit', function submit(e) {
//     e.preventDefault();
//     searchMovies(form.elements.card.value, form.elements.cardId.value)
//         .then((res) => {
//             if (res.ok)
//                 console.log('Всё хорошо');
//         })
// });

// function renderResult(text) {

// }

