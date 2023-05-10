
const span = document.querySelector('.value');
const decrement = document.getElementById('btn1');
const increment = document.getElementById('btn2');
const reset = document.getElementById('.btn reset');


let number = 0;

decrement.addEventListener('click', function(){
    span.textContent = number--
    span.style.color = 'red'
});

increment.addEventListener('click', function(){
    span.textContent = number++
    span.style.color = 'green'
 });



