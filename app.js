let num = 564782
let num2 = 0
let i =100000
while (num > 0) {
   console.log(num%10)
   num2 = num2 + (num%10 * i)
   i = i/10
   num = parseInt(num / 10)
}


console.log(num2)
