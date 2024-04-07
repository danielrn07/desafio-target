const fibonacci = (number) => {
    let a = 0
    let b = 1
    let c

    if (number === a || number === b) return true

    while (true) {
        c = a + b
        if (c === number) return true
        if (c > number) return false
        a = b
        b = c
    }
}

const number = 21
if (fibonacci(number)) {
    console.log(`${number} pertence à sequencia de Fibonacci`)
} else {
    console.log(`${number} não pertence à sequencia de Fibonacci`)
}