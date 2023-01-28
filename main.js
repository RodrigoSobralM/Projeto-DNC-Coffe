const text = [
    {paragraph: 'e em São José dos Campos.'},
    {paragraph: ' Aproveite, pois Melhor que a DNC não existe!'},
    {paragraph: ' torrado por especialistas e preparado de forma enriquecedora.'},
    {paragraph: ''}
];

var intervalId
var progress = 0
var progressContainer = document.querySelector('#progress-container')
function atualizarProgresso() {
    progress +=10;
    progressContainer.innerHTML = progress + "%"
    if(progress == 110) {
        clearInterval(intervalId)
        document.querySelector('.loading-page').style.display = 'none'
    }
}
window.onload = function() {
    intervalId = setInterval(atualizarProgresso, 600);
}

function expandir(){
    setTimeout(function (selector1, selector2, selector3) {
        let cards = document.querySelectorAll(selector1)
        let texts = document.querySelectorAll(selector2)
        let btnCard = document.querySelectorAll(selector3)
        let arrayCard = Array.from(document.querySelectorAll('.card'))

        for(let i = 0; i < cards.length; i++) { 
            texts[i].innerHTML = text[arrayCard.indexOf(cards[i])].paragraph
            cards[i].style.height = '434px';
            btnCard[i].style.visibility = 'visible'
        }
    }, 5000)
}   

function restaurar(selector1, selector2 ,selector3) {

    let cards = document.querySelectorAll(selector1)
    let texts = document.querySelectorAll(selector2)
    let btnCard = document.querySelectorAll(selector3)
    for(let i = 0; i < cards.length; i++) {
        cards[i].style.height = '337px'
        texts[i].innerHTML = '...'
        btnCard[i].style.visibility = 'hidden'
    }
    
}
