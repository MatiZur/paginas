function getRandomInt() {
    return Math.floor(Math.random() * (6-(-1)) + (-1));
}

let container = document.querySelector('.container');

for(let i=0 ; i<9 ; i++){
    let div = document.createElement('div');
    div.textContent = getRandomInt();
    div.classList.add('box');
    container.append(div);
}

document.addEventListener('click', handleClick);
let body = document.querySelector('body');
function handleClick(){
    if(event.target.textContent==-1){
        event.target.textContent = 'kaboom';
        event.target.classList.add('bomba');
    }
    else if(event.target.textContent==1){
        event.target.classList.add('uno');
    }
    else if(event.target.textContent==2){
        event.target.classList.add('dos');
    }
    else if(event.target.textContent==3){
        event.target.classList.add('tres');
    }
    else if(event.target.textContent==4){
        event.target.classList.add('cuatro');
    }
    else if(event.target.textContent==5){
        event.target.classList.add('cinco');
    }
}