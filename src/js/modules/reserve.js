import IMask from 'imask';

export function sendingTheApplication() {
    const form = document.getElementById('form')
    // вешаем событие на переменную form и чтобы перейти к отправке формы подключаем функцию formSend
    form.addEventListener('submit', formSend)
    
    // маска для інпута №tell
    const element = document.getElementById('user-phone');
    const maskOptions = {
        mask: '+{38} (000)-000-00-00',
        lazy: false
    };
    new IMask(element, maskOptions);
    
    async function formSend(e) {
        // запрещаем стандартную отправку формы
        e.preventDefault()

        // валидация формы
        let error = formValidate(form)

        // в formData получаем все данные с инпутов
        let formData = new FormData(form)

        if (error === 0) {
            // если ошибок валидации нет то добавляет класс на форму (для лоадера)
            form.classList.add('_sending')

            // записывает данные в файл php 
            let response = await fetch('sender.php', {
                method: 'POST',
                body: formData
            });
            // проверка на выполнение запроса 
            if (response.ok) {
                // если запрос ок то получаем результат в переменную result
                let result = await response.json()
                // выводим сообщение
                alert(result.message);

                // очищаем форму(инпуты)
                form.reset();

                // когда форма отправлена удаляем класс с формы
                form.classList.remove('_sending')
                    
            } else {
                alert('Помилка');
                form.classList.remove('_sending')
            }
        } else {
            alert('Заповніть обов`язкові поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        // в переменную formReq собираем все элементы с классом _req (обязательные поля для заполнения)
        let formReq = document.querySelectorAll('._req')
        // запускаем цикл  для проверки
        for (let index = 0; index < formReq.length; index++) {
            // получаем все данные в переменную input
            const input = formReq[index];
            // каждый раз когда приступаем к проверке убирает класс _error
            formRemoveError(input)
            // начинаем проверку tell
            if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    // если тест не пройден вешаем класс error 
                    formAddError(input)
                    // и увеличиваем нашу переменную на 1
                    error++;
                }
            } else {
                // проверка заполненны ли поля вообще
                if (input.value === '') {
                    formAddError(input)
                    error++;
                }
            }
        }
        return error;
    }

    // добавляет самому обьекту класс _error и родительскому обьекту класс _error
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }
    // удаляет у самомого обьекта класс _error и родительского обьекта класс _error
    function formRemoveError(input) {
        // родитель
        input.parentElement.classList.remove('_error');
        // сам обьект
        input.classList.remove('_error')
    }
    // проверка валидация номена тел
    function phoneTest(input) {
        return !/^\+[0-9]{2}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/.test(input.value)
    }
}
