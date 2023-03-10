import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import '../App/App.css';
import './Profile.css';

function Profile(props) {
    //подписываемся на контекст
    const currentUser = useContext(CurrentUserContext);

    const [formValue, setFormValue] = useState({
        name: "",
        email: ""
    })
    const [error, setError] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [apiError, setApiError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setFormValue((state) => ({
            ...state,
            name: currentUser.name,
            email: currentUser.email
        })
        );
    }, [currentUser.name, currentUser.email]);

    React.useEffect(() => {
        if(!isValid || (formValue.name === currentUser.name && formValue.email === currentUser.email)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [currentUser.name, currentUser.email, formValue.name, formValue.email, isValid]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue, [name]: value
        })
        setError({
            ...error, [name]: e.target.validationMessage
        });
        setIsValid(e.target.checkValidity());
        if (isValid || ((formValue.name === currentUser.name) && (formValue.email === currentUser.email))) {
            setDisabled(false)
        } else {
            setDisabled(true)
        };
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = formValue;
        props.onUpdateUser(name, email, setApiError(error.message))
    }

    return (
        <main className="main-profile">
            <form className="profile" noValidate>
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <div className="profile__form">
                    <p className="profile__name" htmlFor='name'>Имя</p>
                    <input
                        className="profile__input"
                        id='name'
                        name='name'
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                </div>
                <span className="register__error">{error.name}</span>
                <div className="profile__form">
                    <p className="profile__name" htmlFor='email'>E-mail</p>
                    <input
                        className="profile__input"
                        id='email'
                        name='email'
                        type="email"
                        pattern=".+@.+\..+"
                        value={formValue.email}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                </div>
                <span className="register__error">{error.email}</span>
                <span className="register__error">{apiError}</span>
                <button className="button profile__button" type="submit"
                    onClick={handleSubmit}
                    disabled={disabled}
                >Редактировать</button>
                <button className="button profile__button profile__button_type_link" onClick={props.onLogout}>Выйти из аккаунта</button>
                <button className="button button_bg_black profile__button profile__button_type_save" type='submit'>Сохранить</button>
            </form>
        </main>
    )
};

export default Profile;