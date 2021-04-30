let mybtn = document.getElementById('btn')

mybtn.onclick = function () {
    setTimeout(function () {
        let interval = setInterval(function () {
            console.log('Check started')
            const myStatus = document.querySelectorAll('.status')
            for (let i = 0; i <= myStatus.length - 1; i++) {
                if (myStatus[i].innerHTML === 'Pending') {
                    myStatus[i].innerHTML = 'Done'
                    myStatus[i].style.color = '#85929E'
                } else if (myStatus[i].innerHTML !== 'Pending') {
                    clearInterval(interval)
                }
            }
        }, 1000)
    }, 1000)
}
