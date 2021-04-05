class Products {

    constructor() {
        this.classNameActive = 'producs-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive); //присваиваем стили кнопки producs-element__btn_active
            element.innerHTML = this.labelRemove; //меняем содержимое кнопки на 'Удалить из корзины'
        } else {
            element.classList.remove(this.classNameActive); //удаляем стили кнопки producs-element__btn_active
            element.innerHTML = this.labelAdd; //меняем содержимое кнопки на 'Добавить в корзину'
        }

        headerPage.render(products.length); //отображение кол-ва элементов в корзине
    }

    render() { //Метод render отображает данные на странице
        const productsStore = localStorageUtil.getProducts(); 
        let htmlCatalog = '';
        
        CATALOG.forEach(({id,name,price,img}) => { //Перебираем элементы из catalog.js + деструктуризация через {}
            //console.log(id, name, price, img); //В итоге вывод будет отдельными переменными
            // console.log(element.id); //Получение доступа через точку
            
            let activeClass = '';   //создаем пустую переменную
            let activeText = '';    //создаем пустую переменную
            if (productsStore.indexOf(id) === -1) { //если в массиве пусто отображать Добавить в корзину
                activeText = this.labelAdd;
            } else { //иначе
                activeClass = ' '+this.classNameActive; //применять стили producs-element__btn_active
                activeText = this.labelRemove; // выводить Удалить из корзины
            }

            htmlCatalog += ` 
                <li class="producs-element">
                    <span class="producs-element__name">${name}</span>
                    <img class="producs-element__img" src="${img}" />
                    <span class="producs-element__price">
                        💍 ${price.toLocaleString()} Руб
                    </span>
                    <button class="producs-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')";>
                        ${activeText}
                    </button>
                </li>
            `; //Добавление элементов li в HTML
        });

        const html = `
            <ul class="producs-container">
                ${htmlCatalog}
            </ul>        
        `; //Добавление элементов ul в HTML
        
        ROOT_PRODUCTS.innerHTML = html; //значение innerHTML удаляет всё содержимое элемента и заменяет его на узлы, которые были разобраны как HTML, указанными в строке html
    };
};

const productsPage = new Products(); //создание экземпляра
// productsPage.render();//вызов метода render