function x(arg){
    console.log(arg)
}

let amount = undefined
amount ??= 1

function divide(a, b) {
    return {
      quotient: Math.floor(a / b),
      remainder: a % b,
    }
}

x(divide(5, 2))


let count = 0
function increment(){
    count+=1
    return count
}

increment()
increment()
x(count)