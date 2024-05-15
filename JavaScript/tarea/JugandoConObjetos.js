var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

console.log("su edad es:" + users[0].age)
console.log("su nombre es:" + users[0].name)
function datos() {
    for (var index = 0; index < users.length; index++) {
        console.log(users[index].name + "-" + users[index].age)
    }
}

function mayores() {
    for (let index = 0; index < users.length; index++) {
        if (users[index].age > 18) { console.log("los mayores son:" + users[index].age ) }
    }
}

    datos()
    mayores()