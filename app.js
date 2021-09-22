let add = (num1, num2)=>{
    if (num1<0 || num2<0) {
        return "Negitive number"
    }
    else {
        return num1 + num2
    }
}

let result = add(5,6)

console.log(result)