function update(){
    let date = new Date();
    let h2 = document.querySelector('h2');
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    h2.textContent = `${h}:${m}:${s}.${ms}`;
}
setInterval(update,1);