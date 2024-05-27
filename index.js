// Alinha a esquerda
function alingLeft() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'left'
}
// Centraliza
function alingCenter() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'center'
}
// Alinha a direita
function alingRight() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'right'
}
// Justifica
function alingJustify() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'justify'
}
// Negrito
function bold() {
    var textarea = document.getElementById('area-texto')
    textarea.style.fontWeight = 'bold'
}
// Italico
function italic() {
    var textarea = document.getElementById('area-texto')
    textarea.style.fontStyle = 'italic'
}
// Sublinhado
function underline() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textDecoration = 'underline'
}
// Muda a cor do texto
function color() {
    var color = document.getElementById('text-color').value
    var textarea = document.getElementById('area-texto')
    textarea.style.color = color
}
// Tamanho da fonte
function fontSize() {
    var fontSize = Number(document.getElementById('font-size').value)
    var textarea = document.getElementById('area-texto')
    textarea.style.fontSize = fontSize + 'px'
}
// Reseta os estilos
function resetStyles() {
    var textarea = document.getElementById('area-texto')
    textarea.style.fontWeight = ''
    textarea.style.fontStyle = ''
    textarea.style.textDecoration = ''
    textarea.style.color = ''
}
// Aumenta +1 
function uppercase() {
    var textarea = document.getElementById('area-texto')
    var fontSize = window.getComputedStyle(textarea, null).getPropertyValue('font-size')
    fontSize = parseFloat(fontSize)
    fontSize++
    textarea.style.fontSize = fontSize + 'px'
}
// Diminui -1
function lowercase() {
    var textarea = document.getElementById('area-texto')
    var fontSize = window.getComputedStyle(textarea, null).getPropertyValue('font-size')
    fontSize = parseFloat(fontSize)
    fontSize--
    textarea.style.fontSize = fontSize + 'px'
}
// Apaga o texto
function erease() {
    var textarea = document.getElementById('area-texto')
    textarea.value = ''
}
// Dark mode
function darkMode() {
    var darkmode = document.querySelector('main')
    var textarea = document.getElementById('area-texto')
    var header = document.querySelector('header')
    var buttons = document.querySelectorAll('button')
    var select = document.querySelector('select')
    var option = document.querySelectorAll('option')

    darkmode.classList.toggle('main-dark-mode')
    textarea.classList.toggle('textarea-dark-mode')
    header.classList.toggle('header-dark-mode')
    buttons.forEach(function(button) {
        button.classList.toggle('button-dark-mode')
    });
    select.classList.toggle('button-dark-mode')
    option.forEach(function(option) {
        option.classList.toggle('option-dark-mode')
    });
}
// Reseta o texto com o teclado
document.getElementById('area-texto').addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'f') {
        event.preventDefault()
        resetStyles()
    }
});
// Funcionalidades no teclado
document.getElementById('area-texto').addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        switch(event.key) {
            case 'q':
                event.preventDefault()
                alingLeft()
                break
            case 'e':
                event.preventDefault()
                alingCenter()
                break
            case 'r':
                event.preventDefault()
                alingRight()
                break
            case 'j':
                event.preventDefault()
                alingJustify()
                break
            case 'b':
                event.preventDefault()
                bold()
                break
            case 'i':
                event.preventDefault()
                italic()
                break
            case 's':
                event.preventDefault()
                underline()
                break
            case '+':
                event.preventDefault()
                uppercase()
                break
            case '-':
                event.preventDefault()
                lowercase()
                break
            case 'u':
                event.preventDefault()
                erease()
                break
        }
    }
});