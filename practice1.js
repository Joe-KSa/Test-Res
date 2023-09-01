const MY_MUTABLE_VALUE_CONSTANST = Object.freeze({food: 'apple'})

MY_MUTABLE_VALUE_CONSTANST.food = 'pear'
const VALUE = 5

function add(a, b){
    return a + b
}

function print(args){
    console.log(args)
}

module.exports = {VALUE, add, print}