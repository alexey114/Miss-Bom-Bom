class Error {

    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Нет доступа!</h3>
                    <p>Попробуйте зайти позже :)</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html; //значение innerHTML удаляет всё содержимое элемента и заменяет его на узлы, которые были разобраны как HTML, указанными в строке html
    }
}

const errorPage = new Error ();