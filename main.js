const text = [
    {paragraph: 'e em São José dos Campos.' },
    {paragraph: '. Aproveite, pois Melhor que a DNC não existe!'},
    {paragraph: ' torrado por especialistas e preparado de forma enriquecedora.'},
]
let texts = document.querySelectorAll('#allCard')
let card = document.querySelectorAll('.card')
let btnCard = document.querySelectorAll('.btnCard')



function expandir() {
    for(let i = 0; i < text.length; i++) {
        texts[i].innerHTML = text[i].paragraph
    }

    for(let i = 0; i < card.length; i++){
        card[i].classList.toggle('card-highLigth')
    }
}

function restaurar() {
    for(let i = 0; i < btnCard; i++){
        btnCard.style.visibility = 'hidden'
    }
    
    for(let i = 0; i < texts.length; i++) {
        texts[i].innerHTML = '...'
    }
}