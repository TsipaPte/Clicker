const getClickerButton = document.querySelector('.image-container img')
const getResultSection = document.querySelector('.clicker-result')
let clickCount = 0

getClickerButton.addEventListener('click', function () {
    getResultSection.classList.add('clicker-result-on');
    clickCount++
    getResultSection.innerHTML = `<h3> Вы кликнули! </h3>
    <p> Кликнуто раз - ${clickCount} </p>
    <button class="reset-btn"> Сбросить </button>`;
    
    const getResetBtn = document.querySelector('.reset-btn')

    getResetBtn.addEventListener('click', function () {
        clickCount = 0
        getResultSection.innerHTML = `<h3> Кликните! </h3>
        <p> Кликнуто раз - ${clickCount} </p>
        <button class="reset-btn"> Сбросить </button>`;
    })
})
