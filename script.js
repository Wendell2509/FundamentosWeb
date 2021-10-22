let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.getElementById("mapa")

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%";
email.style.width = "100%";

function validaNome(){
    let txt = document.getElementById("txtNome")

    if (nome.value.length < 3) {
        txt.innerHTML = "campo invalido"
        txt.style.color = "red"
        nomeOk = false
    } else {
        txt.innerHTML = "campo válido"
        txt.style.color = "green"      
        nomeOk = true  
    }
}

function validaEmail(){
    let txt = document.getElementById("txtEmail")

    if (!email.value.includes('@') || !email.value.includes('.')) {
        txt.innerHTML = "campo invalido"
        txt.style.color = "red"
        emailOk = false
    }else{
        txt.innerHTML = "campo válido"
        txt.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txt = document.getElementById("txtAssunto")

    if(assunto.value.length > 100){
        txt.innerHTML = "campo invalido"
        txt.style.color = "red"
        assuntoOk= false
    }else{
        txt.innerHTML = "campo válido"
        txt.style.color = "green"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk && emailOk && assuntoOk) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente!")
    }
}


function mapaZoom(){
mapa.style.width = "800px"
mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}