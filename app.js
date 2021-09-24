let array1 = new Array()
let array2 = new Array()

array1.push(5 , 6 ,7 ,8 ,9)
let [a,b,c,,d] = array1

console.log(d)

let msg = "My name is Qasim Mohamme Jawad"

array2 = msg.split(' ')

let [a1,b1,,...d1] = array2 

console.log(d1)