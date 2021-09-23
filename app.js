function user (name,password){
    this.name = name;
    this.password = password;
    this.loggedin = ()=>{
        console.log(`${this.name} is logged in`);
    }
}

let user1 = new user("Qasim", "Qasim@671994");
let user2 = new user("Sama" , "Sama@1281969");

console.log(user1.loggedin(), user2.loggedin());
console.log(user1,user2);