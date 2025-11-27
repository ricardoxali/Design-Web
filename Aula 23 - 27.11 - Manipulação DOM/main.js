const pcomid = document.getElementById('pcomid');
const pcomclass = document.querySelector('.pcomclass span');
// similar ao seletor do css
pcomclass.innerHTML = '<b>NOVO</b> texto para o span.';

document.querySelector('.pcomclass').classList.add('destaque');
// adiciona uma class 'destaque' na tag selecionada

document.getElementsByTagName('li')[1].style.color = 'green';
console.log(document.getElementsByTagName('li').length);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));


imagens = ['https://cdn.msnoticias.com.br/upload/dn_arquivo/2025/11/bolsonaro-meme02-768x889.png','https://tvtnews.com.br/wp-content/uploads/2025/11/Bolsonaro-soldador-Reproducao-1024x576.jpg','https://www.diariodocentrodomundo.com.br/wp-content/uploads/2025/08/bolsonaro-memes-prisao.png','https://static.poder360.com.br/2023/08/print-tweet-trending-topics-bolsonaro-preso-4-ago-2023-8.png']
const trocar = document.querySelector('.trocar');
trocar.addEventListener('click', trocarimagem);
function trocarimagem(){
    while(true){
        let n = Math.floor(Math.random() * imagens.length);
        if(img.getAttribute('src') != imagens[n]){
            img.setAttribute('src',imagens[n]);
            break;
        }
    }
}

const lista = document.querySelector('ol');
console.log(lista.getAttribute('quantidade'));
console.log(lista.hasAttribute('quantidade'));
lista.removeAttribute('quantidade');
console.log(lista.hasAttribute('quantidade'));
console.log(lista.dataset.produtos);
console.log(lista.attributes);