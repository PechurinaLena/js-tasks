const STATUSES = {
    pending: 'Pending',
    done: 'Done',
    failed: 'Failed',
}

const COLORS = {
    grey: '#85929E',
}

const TIME = {
    delay: 3000,
    repeat: 5000,
}

const myBtn = document.getElementById('btn')

myBtn.onclick = function () {
    setTimeout(function () {
        const interval = setInterval(function () {
            console.log('Check started')
            const pendingStatuses = document.querySelectorAll('.pending')
            const countOfElementsToChange = pendingStatuses.length
            if (countOfElementsToChange) {
                pendingStatuses[0].classList.remove('pending')
                pendingStatuses[0].innerHTML = STATUSES.done
                pendingStatuses[0].style.color = COLORS.grey
            } else {
                clearInterval(interval)
            }
        }, TIME.repeat)
    }, TIME.delay)
}
