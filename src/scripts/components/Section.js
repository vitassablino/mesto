export default class Section {
  constructor(data, containerSelector) {
    this._items = data.items;
    this.renderer = data.renderer;
    this._container = containerSelector;
  }

  /* Рендер стартовых объектов */
  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  /* Добавление нового элемента в контейнер */
  addItem(item) {
    /* this.renderer(this._containerSelector, item); */
    this._container.prepend(item);
  }
}
