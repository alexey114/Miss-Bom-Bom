class Header {
    handlerOpenShoppingPage () {
        shoppingPage.render();
    }

    render(count) { //отображение данных на экран + добовляем переменную count для подсчета кол-ва товаров
        const html = `
                <span onclick="headerPage.handlerOpenShoppingPage();">
                    🛒 ${count}
                </span>
        `;

        ROOT_HEADER.innerHTML = html;
    }
    
};

const headerPage = new Header (); //экземпляр класса

const productsStore = localStorageUtil.getProducts(); //для отображения кол-ва вызываем экземплял класса и метод + заключаем в переменную
headerPage.render(productsStore.length); //вызов метода render + отображение кол-ва выбранных товаров (длинну массива))

