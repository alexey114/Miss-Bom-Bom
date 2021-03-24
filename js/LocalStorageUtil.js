class LocalStorageUtil {
    constructor () {
        this.keyName = 'products'; //задаём свойство в конструкторе, т.к.  будем использовать его несколько раз
    }

    getProducts () {
        const productsLocalStorage = localStorage.getItem (this.keyName); //если будет значение верется строка, иначе вернется null
        if (productsLocalStorage !== null) {
            return  JSON.parse(productsLocalStorage);
        }
        return []; //в противном случае получаем пустой массив
    } //метод позволяющий получить данные из локального хранилища

    putProducts (id) { 
        let products = this.getProducts(); //берем всё, что находится в локальном хранилище
        let pushProduct = false; //Для выделения кнопки при удалении товара и добавления определяем переменную
        const index = products.indexOff(id); //что бы не добавлялись дубли индексов, а удалялись делаем проверку

            if(index===-1){ //если равен -1 (отсутствует), то нужнол записать
                products.push(id);
                pushProduct = true;
            } else {
                products.splice(index, 1); //в ином случае удалить
            }

        products.push(id); //закидываем новый id
        localStorage.setItem(this.keyName, JSON.stringify(products)); //Устанавливаем в локальное хранилище

        return {
            pushProduct, products //Если значение и ключ совпадает, то указываем один ключ
        } //Возвращаем pushProduct и products в виде объекта
    } //метод добавления значений в локальное хранилище

    //ВАЖНО! localStorage принимает только строки, следовательно делаем преобразование из массива через 
}

//Проверка вывода через экземпляр класса
const localStorageUtil = new LocalStorageUtil ();

//Преобразование из массива в строку - метод JSON.stringify
//Преобразование из строки в массив - метод JSON.parse