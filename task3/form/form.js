const TIME = {
    delay: 1000,
}

function repeat() {
    let firstInput = document.getElementById('firstInput')
    let secondInput = document.getElementById('secondInput')
    firstInput.addEventListener('keyup', function () {
        setTimeout(function () {
            secondInput.value = firstInput.value
        }, TIME.delay)
    })
}
