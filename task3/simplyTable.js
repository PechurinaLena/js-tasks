let mybtn = document.getElementById('btn')

mybtn.onclick = function () {
    setTimeout(function () {
        const myStatus = document.querySelectorAll('.pending')
        let i = 0
        let interval = setInterval(function () {
            if (myStatus[i].innerHTML === 'Pending') {
                console.log('Check started')
                myStatus[i].innerHTML = 'Done'
                myStatus[i].style.color = '#85929E'
            }
            if (++i === myStatus.length) {
                clearInterval(interval)
            }
        }, 5000)
    }, 3000)
}
