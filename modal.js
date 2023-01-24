function showModal() {
    let modal = document.querySelector('#modal')
    modal.innerHTML = `
    <div id="modal-card">
        <div id="closeModal">
            <img onclick="closeModal()" src="img/close.svg" alt="">
        </div>
        <div id="textModal">
            <h1>Quem somos nós? </h1>
            <p>
                Tudo o que fazemos procura respeitar essa conexão, 
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

let showModalAt = () => {
    let modal = document.querySelector('#modal')
    modal.innerHTML = `
    <div id="modal-card">
        <div id="closeModal">
            <img onclick="closeModal()" src="img/close.svg" alt="">
        </div>
        <div id="textModalAt">
            <h1>Atendimento</h1>
            <p>
                Rua José de Alencar, 111, Centro<br>
                CEP: 12209-000 | +55 (11) 3333-8000
            </p>
        </div>
        <div id="buttonModal">
            <button>ENTRAR EM CONTATO</button>
        </div>
    </div>`
    modal.style.visibility = 'visible';
}
