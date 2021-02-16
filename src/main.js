/*const num = [1,2,3,4,5,6]

const total = num.reduce(function(total, next){
    return total + next
})

console.log(total)*/

/*const todos = [
    {text: 'lavar louça', done: true},
    {text: 'apanhar o lixo', done: false},
    {text: 'dobrar as roupas', done: false},
]

const doneTodos = todos.filter((todos) => todos.done)

console.log(doneTodos)

const anything () => 'hello world'

console.log(anything())*/

function sayHello(name = 'Fulano'){
    console.log('Olá ' + name)
}

sayHello()