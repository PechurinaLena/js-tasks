let mybtn = document.getElementById('btn')

mybtn.onclick = function () {
    setTimeout(function () {
        const myStatus = document.querySelectorAll('.pending')
        let i = 0
        let interval = setInterval(function () {
            console.log('Check started')
            if (myStatus[i].innerHTML === 'Pending') {
                myStatus[i].innerHTML = 'Done'
                myStatus[i].style.color = '#85929E'
            }
            if (++i === myStatus.length) {
                clearInterval(interval)
            }
        }, 5000)
    }, 3000)
}
