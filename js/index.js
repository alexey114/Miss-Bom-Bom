function render() {

    const productsStore = localStorageUtil.getProducts(); //для отображения кол-ва вызываем экземплял класса и метод + заключаем в переменную
    
    headerPage.render(productsStore.length); //вызов метода render + отображение кол-ва выбранных товаров (длинну массива))
    productsPage.render();//вызов метода render
}

let CATALOG = [];

fetch('server/catalog.json') //не поддерживает IE
    .then(res => res.json())    
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });


