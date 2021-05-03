let firstInput = document.getElementById('input1')
let secondInput = document.getElementById('input2')

function repeat() {
    setTimeout(function () {
        secondInput.value = firstInput.value
    }, 1000)
}
