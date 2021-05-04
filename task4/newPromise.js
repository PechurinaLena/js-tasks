setInterval(function () {
    const promise = new Promise((resolve, reject) => {
        setInterval(function () {
            const current = Math.floor(Math.random() * 8 + 1)

            if (current <= 2) {
                resolve('result')
            } else {
                reject('error')
            }
        }, 2000)
    })
    promise
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.error(error)
        })
}, 2000)
