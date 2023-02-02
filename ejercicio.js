function devolverTrue() {
    return true
}

function funAsin() {
    timeOut = setTimeout(devolver, 5000)
}
    
function devolver() {
    console.log("Hola soy una promesa")
}

function* generaIndices() {
    let i = 0;
    while(true) {
        i += 2;
        if (i === 60) {
            return i
        }
        yield i
    }
}
