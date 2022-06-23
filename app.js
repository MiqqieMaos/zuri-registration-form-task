const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errorMsg = document.querySelector('#fName-error')
form.addEventListener('submit', function(evt){
    evt.preventDefault()
    for(let input of inputs){
        if(input.value === ''){
            input.classList.add('red')
            errorMsg.textContent = 'First name cannot be empty'
        }
    }
    // if(input.value === ''){
    //     input.classList.add('red')
    //     console.log('submitted')
    // } else{
    //     console.log('sent')
    // }
})
