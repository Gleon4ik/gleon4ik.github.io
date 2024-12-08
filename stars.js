// Функция для создания звезды
function createStar(x, y) {
    const star = document.createElement('div');
    star.classList.add('star');
    document.querySelector('.star-fx-container').appendChild(star);
    star.style.left = `${x - 4}px`; // Центрируем звёздочку
    star.style.top = `${y - 4}px`;
    
    // Удаляем звёздочку через 1 секунду, чтобы не загромождать DOM
    setTimeout(() => {
        star.remove();
    }, 1000);
}

// Слушаем события для курсора
document.addEventListener('mousemove', (e) => {
    createStar(e.pageX, e.pageY);
});

// Слушаем события для касания
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    createStar(touch.pageX, touch.pageY);
});
