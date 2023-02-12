export default class Section {
  constructor(data, container) {
    /* this._items = data.items; */
    this.renderer = data.renderer;
    this._container = container;
  }

  /* Очистка контейнера */
  clear() {
    this._container.innerHTML = "";
  }

  /* Рендер стартовых объектов */
  renderItems(items) {
    this.clear();
    items.forEach((item) => {
      this.renderer(item);
    });
  }

  /* Добавление нового элемента в контейнер */
  addItem(item) {
    this._container.prepend(item);
  }
}
