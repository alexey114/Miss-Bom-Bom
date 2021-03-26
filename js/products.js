class Products {

    constructor() {
        this.classNameActive = 'producs-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    render() { //Метод render отображает данные на странице
        const productsStore = localStorageUtil.getProducts(); 
        let htmlCatalog = '';
        
        CATALOG.forEach(({id,name,price,img}) => { //Перебираем элементы из catalog.js + деструктуризация через {}
            //console.log(id, name, price, img); //В итоге вывод будет отдельными переменными
            // console.log(element.id); //Получение доступа через точку
            
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
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
        
        ROOT_PRODUCTS.innerHTML = html;
    };
};

const productsPage = new Products(); //создание экземпляра
productsPage.render();//вызов метода render