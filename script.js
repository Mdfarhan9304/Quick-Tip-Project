function update(){
    let Bill= document.getElementById('Yourbill').value + "₹";
    let tipPercent= document.getElementById('tipInput').value;
    let split= document.getElementById('splitInput').value;
    console.log({Bill, tipPercent, split});
    
}

let containar = getElementById('container');
containar.addEventListener('input', update)


