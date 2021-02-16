const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(()=> {
        resolve('ok')
        reject('deu ruim')
    }, 2000)
})

/*myPromise().then((response) => {
    console.log('primeira vez')

    myPromise().then((response) => {
        console.log('segunda vez')
        
        myPromise().then((response) =>{
            console.log('terceira vez')
        })
    })
})*/

//ES8 async/await
async function exec(){
    const response = await myPromise()
    console.log(response)
}

//arrow function
const exec2 = async() => {
    const response = await myPromise()
    console.log(response)
}

const exec3 = async() => {
    try{
        await myPromise()
        console.log('primeira vez')

        await myPromise()
        console.log('segunda vez')

        await myPromise()
        console.log('terceira vez')
    }catch(error){
        console.warn(error)
    }finally{
        console.log('finalizou')
    }
}

exec()
exec2()
exec3()