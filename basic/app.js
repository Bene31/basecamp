var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('click', function(event){
    event.preventDefault()
    console.log('sua idade é: ' + input.value)
})

var element = document.querySelector('body')
element.style.backgroundColor = 'green'

/*button.addEventListener('click', function(event){
    axios
        .get('https://api.github.com/users')
        .then(function(response){
            console.log(response.data[0])
        })
        .catch(function(error){
            console.log(error)
        }).finally(function(){
            console.log('finalizou')
        })
})

button.addEventListener('click', function(){
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var data = JSON.parse(xhr.responseText)
            console.log(data[0].login)
        }
    }
})*/