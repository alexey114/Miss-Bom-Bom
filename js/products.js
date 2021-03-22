class Products {
    render() { //Метод render отображает даные на странице
        CATALOG.forEach(({ id, name, price, img}) => { //Перебираем элементы из catalog.js + деструктуризация через {}
            console.log(id, name, price, img); //В итоге вывод будет отдельными переменными
            // console.log(element.id); //Получение доступа через точку
        })
    }
}

const productsPage = new Products(); //создание экземпляра
productsPage.render();//вызов метода render