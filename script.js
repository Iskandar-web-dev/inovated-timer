let timer = document.querySelectorAll('.timer div')
let controls = document.querySelectorAll('.controls button')
let [minute, second, mlsecond] = timer
let intrvl 

controls.forEach(btn => {
    btn.onclick = () => {
        let cmd = btn.getAttribute('data-command')

        switch (cmd) {
            case "start":
                clearInterval(intrvl)
                interval()
                break
            case "stop": 
                clearInterval(intrvl)   
                break
            case "save": 
                saveRound()
                break
            case "decrement": 
                clearInterval(intrvl)   
                antiinterval()
                break
            case "reset": 
                clearInterval(intrvl)   
                minute.innerHTML = 00
                second.innerHTML = 00
                mlsecond.innerHTML = 00
                break
        }
    }
})

function interval() {
    intrvl = setInterval(() => {
        mlsecond.innerHTML++
        if(mlsecond.innerHTML >= 100) {
            mlsecond.innerHTML = 0
            second.innerHTML++
            if(second.innerHTML >= 60) {
                second.innerHTML = 0
                minute.innerHTML++
            }
        }
    }, 10);
}
function antiinterval() {
    intrvl = setInterval(() => {
        mlsecond.innerHTML--
        if(mlsecond.innerHTML <= 0) {
            mlsecond.innerHTML = 99
            second.innerHTML--
            if(second.innerHTML <= 0) {
                second.innerHTML = 59
                if(minute.innerHTML <= 0) {
                    clearInterval(intrvl)    
                    second.innerHTML = 0
                    mlsecond.innerHTML = 0
                }
            }
        }
    }, 10);
}

function saveRound() {
    console.log(minute.innerHTML,second.innerHTML,mlsecond.innerHTML);
}