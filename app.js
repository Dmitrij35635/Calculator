// Находим экран калькулятора (берем первый элемент с классом "exercise")
let exercise = document.getElementsByClassName("exercise")[0];

// Находим все кнопки по классу .btn
let buttons = document.querySelectorAll(".btn");

// Перебираем каждую кнопку и вешаем обработчик событий
for (let i = 0; i < buttons.length; i++) {
    
    // Эффект нажатия (затемнение) при mousedown
    buttons[i].addEventListener("mousedown", function() {
        this.style.opacity = "0.8";
        
        // Получаем значение кнопки из атрибута data-value
        let value = this.getAttribute("data-value");

        // Обработка кнопки очистки "C"
        if (value === "C") {
            exercise.innerHTML = "0";
            return;
        }

        // Обработка кнопки расчета "="
        if (value === "=") {
            try {
                // eval безопасно вычисляет математическую строку (например, "2+2*2")
                exercise.innerHTML = eval(exercise.innerHTML);
            } catch (error) {
                exercise.innerHTML = "Error";
            }
            return;
        }

        // Если на экране сейчас "0", заменяем его на первую введенную цифру, 
        // иначе — добавляем символ в строку
        if (exercise.innerHTML === "0" || exercise.innerHTML === "Error") {
            exercise.innerHTML = value;
        } else {
            exercise.innerHTML += value;
        }
    });

    // Возвращаем нормальную прозрачность при отпускании кнопки (mouseup)
    buttons[i].addEventListener("mouseup", function() {
        this.style.opacity = "1";
    });
}