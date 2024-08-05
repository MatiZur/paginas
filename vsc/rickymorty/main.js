let n=1;
const ant = document.querySelector('.anterior');
const sig = document.querySelector('.siguiente');
fetch(`https://rickandmortyapi.com/api/character?page=${n}`)
    .then(res => res.json())
        .then(data => {
        let container = document.querySelector('.container');            
        let body = document.querySelector('.asd');
        for (let c of data.results) {
            let div = document.createElement('div');
            div.classList.add('card');
            let h3 = document.createElement('h3');
            h3.textContent = c.name;
            let img = document.createElement('img');
            img.src = c.image;
            div.append(img);
            div.append(h3);
            container.append(div);
        }
        if(n==1){
            ant.remove();
        }
        if(n==82){
            sig.renove();
        }
    });

function anterior(){
    let container = document.querySelector('.container');
    container.textContent = '';
    n=n-1;
    fetch(`https://rickandmortyapi.com/api/character?page=${n}`)
        .then(res => res.json())
        .then(data => {
        let container = document.querySelector('.container');            
        let body = document.querySelector('.asd');
        for (let c of data.results) {
            let div = document.createElement('div');
            div.classList.add('card');
            let h3 = document.createElement('h3');
            h3.textContent = c.name;
            let img = document.createElement('img');
            img.src = c.image;
            div.append(img);
            div.append(h3);
            container.append(div);
        }
        if(n==1){
            ant.remove();
        }
        if(n==82){
            sig.renove();
        }
    });
}

function siguiente(){
    let container = document.querySelector('.container');
    container.textContent = '';
    n=n+1;
    fetch(`https://rickandmortyapi.com/api/character?page=${n}`)
        .then(res => res.json())
        .then(data => {
        let container = document.querySelector('.container');            
        let body = document.querySelector('.asd');
        for (let c of data.results) {
            let div = document.createElement('div');
            div.classList.add('card');
            let h3 = document.createElement('h3');
            h3.textContent = c.name;
            let img = document.createElement('img');
            img.src = c.image;
            div.append(img);
            div.append(h3);
            container.append(div);
        }
        if(n==1){
            ant.remove();
        }
        if(n==82){
            sig.renove();
        }
        if(n==2){
            let botonAnt = document.createElement('button')
            botonAnt.innerHTML = '<button class="anterior" onclick="anterior(event)">Anterior</button>';
        }
        if(n==81){
            sig.renove();
        }
    });
}