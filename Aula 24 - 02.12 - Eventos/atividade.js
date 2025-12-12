const titulo = document.querySelector('h1');
function mudarcor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    titulo.style.color = `rgb(${r},${g},${b})`;
};
setInterval(mudarcor, 30000);