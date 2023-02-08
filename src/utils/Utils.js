export const serializeSavedMovie = (card) => (
  {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://api.nomoreparties.co/${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${card.image.url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN
  }
);

const apiConfig = {
    baseUrl: 'https://api.nomoreparties.co',
    mainBaseUrl: 'https://api.komkova.diploma.nomoredomains.club',
    // mainBaseUrl: 'http://localhost:3003',
    headers:
    {
        'Authorization': '',
        'Content-Type': 'application/json'
    }
}

export default apiConfig;
