export default class Section {
  constructor(data, containerSelector) {
    this._items = data.items;
    this.renderer = data.renderer;
    this._containerSelector = containerSelector;
  }

  /* Рендер стартовых объектов */
  startingRendering() {
    this._items.forEach((item) => {
      this.renderer(this._containerSelector, item);
    });
  }

  /* Добавление нового элемента в контейнер */
  addItem(item) {
    this.renderer(this._containerSelector, item);
  }
}
