class Car{
    constructor(marca, preco){
        this._marca = marca
        this._preco = preco
    }

    get marca(){
        return this._marca
    }

    set marca(newMarca){
        this._marca = newMarca
    }
}

const civic = new Car('honda', 130)
console.log(civic.marca)



class Calculator{
    static sum(a, b){
        return a + b
    }
}

console.log(Calculator.sum(10, 20))


class Person {
    constructor(firstName, secondName){
        this.firstName = firstName
        this.secondName = secondName
    }

    get fullName(){
        return Person.joinNames(this.firstName, this.secondName)
    }

    static joinNames(firstName, secondName){
        return `${firstName} ${secondName}`
    }
}

const person = new Person('Arthur', 'Terra')

console.log(person.fullName)

class Veiculo{
    constructor(rodas){
        this.rodas = rodas
    }

    acelerar(){
        console.log('acelerou')
    }
}

class Moto extends Veiculo{
    constructor(rodas, capacete){
        super()
        this.capacete = capacete
    }

    empinar(){
        console.log(`empinou com ${this.rodas} rodas`)
    }

    acelerar(){
        super.acelerar()
        console.log('acelerou muuuuuuuuuuuito')
    }

    taUsandoCapacete(){
        if(this.capacete == true){
            console.log('Tá usando capacete')
        }else{
            console.log('Não tá usando capacete')
        }
    }
}

const bross = new Moto(2, false)

bross.empinar()
bross.acelerar()
bross.taUsandoCapacete()