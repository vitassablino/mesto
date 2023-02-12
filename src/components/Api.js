export default class Api {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  #checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  /* Получение стартовых данных о профиле */
  getUserData() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this.#checkResponse);
  }

  setUserData(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description,
      }),
    }).then(this.#checkResponse);
  }

  /* Получение ствртовых каточек */
  getInitialCards() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this.#checkResponse);
  }

  /* Получение данные */
  getData() {
    return Promise.all([this.getInitialCards(), this.getUserData()]);
    console.log(`getUserData = ${this.getUserData()}`);
  }

  /*установка лайка*/
  like(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this.#checkResponse);
  }

  /* снятие лайка */
  notLike(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this.#checkResponse);
  }

  addNewCard(items) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: items.name,
        link: items.link,
      }),
    }).then(this.#checkResponse);
  }
}
