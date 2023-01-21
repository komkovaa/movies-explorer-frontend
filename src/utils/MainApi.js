import apiConfig from "./Utils";

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
}
