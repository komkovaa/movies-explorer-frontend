import apiConfig from "./Utils";

class MainApi {
    constructor(apiConfig) {
        this._mainBaseUrl = apiConfig.mainBaseUrl;
        this._headers = apiConfig.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


}

const mainApi= new MainApi(apiConfig);
export default mainApi;
