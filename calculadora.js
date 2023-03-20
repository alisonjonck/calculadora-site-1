var numero1 = ''
var esta_adicionando = false

function digita_campo(numero_clicado) {
    var meu_input = document.getElementsByTagName('input')[0]
    
    if (esta_adicionando) {
        numero1 = meu_input.value

        meu_input.value = numero_clicado

        esta_adicionando = false
    } else {
        meu_input.value = meu_input.value + numero_clicado
    }
}

function mostrar_resposta() {
    var meu_input = document.getElementsByTagName('input')[0]

    var resultado = parseFloat(numero1) + parseFloat(meu_input.value)

    meu_input.value = resultado
}

function limpar_campo() {
    var meu_input = document.getElementsByTagName('input')[0]
    meu_input.value = ''
}

function clicou_adicionar() {
    esta_adicionando = true;
}
