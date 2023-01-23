

function showModal() {
    let modal = document.querySelector('#modal')
    console.log(modal)
    modal.innerHTML = ""
    modal.innerHTML = `
    <div id="modal-card">
        <div id="closeModal">
            <img onclick="closeModal()" src="img/close.svg" alt="">
        </div>
        <div id="textModal">
            <h1>Quem somos nós? </h1>
            <p>Tudo o que fazemos procura respeitar essa conexão, 
                desde nosso compromisso com o café de melhor
                qualidade do mundo até a forma como nós interagimos 
                com nossos clientes e nossas comunidades para
                conduzir nosso negócio de modo responsável.
            </p>
        </div>
        <div id="logoModal">
            <img src="img/logoModal.svg" alt="">
        </div>
    </div>`
    modal.style.visibility = 'visible';
}

function closeModal() {
    modal.style.visibility = 'hidden'
}