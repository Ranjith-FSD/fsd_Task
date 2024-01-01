const text = document.createElement("h1")
// console.log(text)
document.body.appendChild(text)

let countDown = 10;

setTimeout(() => {
    text.innerHTML = countDown--;
    setTimeout(() => {
        text.innerHTML = countDown--;
        setTimeout(() => {
            text.innerHTML = countDown--;
            setTimeout(() => {
                text.innerHTML = countDown--;
                setTimeout(() => {
                    text.innerHTML = countDown--;
                    setTimeout(() => {
                        text.innerHTML = countDown--;
                        setTimeout(() => {
                            text.innerHTML = countDown--;
                            setTimeout(() => {
                                text.innerHTML = countDown--;
                                setTimeout(() => {
                                    text.innerHTML = countDown--;
                                    setTimeout(() => {
                                        text.innerHTML = countDown--;
                                        setTimeout(() => {
                                            text.innerHTML = countDown--;
                                            text.innerHTML = "Happy Independence Day"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)