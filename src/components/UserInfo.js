export default class UserInfo {
  constructor(data) {
    this._name = data.name;
    this._description = data.description;
  }

  /* Получение информации о пользователе */
  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      description: this._description.textContent,
    };
    return this._userInfo;
  }

  /* Установка информации о пользователе */
  setUserInfo(data) {
    this._description.textContent = data.description;
    this._name.textContent = data.name;
  }
}
