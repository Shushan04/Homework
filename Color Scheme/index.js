const colorBoxes = document.querySelectorAll('.color');
colorBoxes.forEach(box => {
    box.addEventListener('click',() =>{
        document.body.style.backgroundColor = box.style.backgroundColor;
    });
});