export default class UserInfo {
  constructor(data) {
    this._name = data.name;
    this._about = data.about;
    this._avatar = data.avatar;
  }

  /* Получение информации о пользователе */
  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return this._userInfo;
  }

  /* Установка информации о пользователе */
  setUserInfo(item) {
    this._about.textContent = item.about;
    this._name.textContent = item.name;
    this.setUserAvatar(item);
  }

  setUserAvatar(item) {
    this._avatar.src = item.avatar;
  }
}
