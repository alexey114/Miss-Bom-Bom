class Shopping {
    handleClear () { //очишаем браузер от содержимого блока
        ROOT_SHOPPING.innerHTML = ''; //передачей пустой строки
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';   
        let sumCatalog = 0;

        CATALOG.forEach(({id,name,price}) => { // перебираем элементы
            if (productsStore.indexOf(id) !== -1){  // при наличии в хранилище добавляем имя и цену
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">💍 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} руб </td>                        
                    </tr>
                `;
                sumCatalog += price; //в конце добавляем сумму price, изначально sumCatalog = 0
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear ()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💰 Сумма: </td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} руб </td>
                        <td></td>
                    </tr>
                </table>
            </div>
        `;

        //добавляем элемент для закрытия и навешиваем событие
        //отображаем название и сумму
        //отображаем сумму всех позиций

        ROOT_SHOPPING.innerHTML = html;
    }    
}

const shoppingPage = new Shopping(); //экземпляр класса

//toLocaleString() - Метод возвращает строковое представление элементов массива.