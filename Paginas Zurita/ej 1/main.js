function power(x,n){
    let result = 1;
    for(let i=0 ; i<n ; i++){
        result *= x;
    }
    return result;
}

function handleSubmit(event){
    event.preventDefault();
    let x = +event.target.x.value;
    let n = +event.target.n.value;
    let p = document.createElement('p');
    p.textContent = `${x} elevado a ${n} es igual a ${power(x,n)}`;
    document.body.append(p);
}