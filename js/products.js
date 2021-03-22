class Products {
    render() { //Метод render отображает даные на странице
        let htmlCatalog = '';

        CATALOG.forEach(({id,name,price,img}) => { //Перебираем элементы из catalog.js + деструктуризация через {}
            //console.log(id, name, price, img); //В итоге вывод будет отдельными переменными
            // console.log(element.id); //Получение доступа через точку

            htmlCatalog += ` 
                <li>
                    <span>${name}</span>
                    <img src="${img}" />
                    <span>${price}</span>
                    <button>Добавить в корзину</button>
                </li>
            `; //Добавление элементов li в HTML
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>        
        `; //Добавление элементов ul в HTML
        
        ROOT_PRODUCTS.innerHTML = html;
    };
};

const productsPage = new Products(); //создание экземпляра
productsPage.render();//вызов метода render