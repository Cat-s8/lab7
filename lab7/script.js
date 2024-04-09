function startGame() {
    let maxAttempts = 5;
    let attempts = 0;
    let rannum = Math.floor(Math.random() * 10) + 1;
    while (attempts < maxAttempts) {
        let userNum = prompt("Угадайте число от 1 до 10. У вас осталось " + (maxAttempts - attempts) + " попыток.");
        if (userNum == rannum) {
            alert("Поздравляем! Вы угадали число: "+rannum);
            break;
        } else if (userNum > rannum) {
            alert("Ваше число больше загаданного");
        } else if(userNum < rannum) {
            alert("Ваше число меньше загаданного");
        } else {
            alert("Вы ввели не число. Следует попробовать еще раз");
            continue;
        }
        attempts++;
    }
    if (confirm("Хотите сыграть еще раз?")) {
        startGame();
    } else {
        alert("Спасибо за игру. До свидания!");
    }
}

startGame();