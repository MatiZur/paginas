function factorial(n){
    for(let i=0 ; i<n ; i++){
        result = 1;
    }
    return result;
}

function handleSubmit(event){
    event.preventDefault();
    let n = +event.target.n.value;
    let p = document.createElement('p');
    p.textContent = `${n}! es igual a ${factorial(n)}`;
    document.body.append(p);
}