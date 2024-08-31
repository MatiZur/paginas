let contador=0;
let div = document.querySelector('.container');

for(let i=1 ; i<localStorage.length+1 ; i++){
    let p = document.createElement('p');
    let item = localStorage.getItem(i);
    p.textContent = item;
    div.append(p);
}

function handleSubmit(){
    event.preventDefault();
    let input = document.querySelector('.input')
    let texto = input.value;
    let p = document.createElement('p');
    p.textContent = texto;
    div.append(p);
    contador++;
    localStorage.setItem(contador, texto);
}

function handleClear(){
    event.preventDefault();
    localStorage.clear();
    contador = 0;
    div.textContent = '';
}