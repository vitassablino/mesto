export default class Section {
  constructor(data, container) {
    this._items = data.items;
    this.renderer = data.renderer;
    this._container = container;
  }

  /* Рендер стартовых объектов */
  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  /* Добавление нового элемента в контейнер */
  addItem(item) {
    this._container.prepend(item);
  }
}
