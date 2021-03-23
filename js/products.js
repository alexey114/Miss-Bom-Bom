class Products {
    render() { //Метод render отображает данные на странице
        let htmlCatalog = '';

        CATALOG.forEach(({id,name,price,img}) => { //Перебираем элементы из catalog.js + деструктуризация через {}
            //console.log(id, name, price, img); //В итоге вывод будет отдельными переменными
            // console.log(element.id); //Получение доступа через точку

            htmlCatalog += ` 
                <li class="producs-element">
                    <span class="producs-element__name">${name}</span>
                    <img class="producs-element__img" src="${img}" />
                    <span class="producs-element__price">
                        💍 ${price.toLocaleString()} Руб
                    </span>
                    <button class="producs-element__btn">Добавить в корзину</button>
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