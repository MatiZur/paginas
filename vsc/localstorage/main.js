let contador=localStorage.length;
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
    input.value = '';
}

function handleClear(){
    event.preventDefault();
    localStorage.clear();
    div.textContent = '';
}