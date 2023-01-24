import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';




function App(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} email={currentUser.email} />
        <Routes>

          <Route exact path='/' element={<Main />} />
          <Route path='/movies' element={<Movies cards={props.cards} />} />
          <Route path='/saved-movies' element={<SavedMovies cards={props.cards} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/' element={loggedIn ? <Navigate to='/movies' replace /> : <Navigate to='signin' replace />} />

        </Routes>

        <Footer />
      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;
