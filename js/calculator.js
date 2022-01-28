function calculator (node, input, maxValue) {
    const start = 3;
    input.addEventListener('input', (event) => {
        let currentPosition  = start
        
        let currentValue = Number(event.target.value);
        if(currentValue < maxValue){
            currentPosition  = (currentValue * 100) / maxValue + start
        }
        else{
            currentValue = maxValue
            currentPosition = 93
        }
        node.style.left = currentPosition + "%" 
    })
}

calculator(
    document.querySelector('#marker-sum'), document.querySelector('#input-sum'), 3900
);

calculator(
    document.querySelector('#marker-term'), document.querySelector('#input-term'), 2800
);