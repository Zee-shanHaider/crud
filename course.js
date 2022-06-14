

let person={
    name : 'Ali',
    age: 23,
    greet: function(){
        console.log(`Hi! this is ${this.name}`)
    }
}
person.greet();