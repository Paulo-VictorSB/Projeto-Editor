function alingLeft() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'left'
}
function alingCenter() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'center'
}
function alingRight() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'right'
}
function alingJustify() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textAlign = 'justify'
}
function bold() {
    var textarea = document.getElementById('area-texto')
    textarea.style.fontWeight = 'bold'
}
function italic() {
    var textarea = document.getElementById('area-texto')
    textarea.style.fontStyle = 'italic'
}
function underline() {
    var textarea = document.getElementById('area-texto')
    textarea.style.textDecoration = 'underline'
}
function color(){
    var color = document.getElementById('text-color').value
    var textarea = document.getElementById('area-texto')
    textarea.style.color = color
}
function fontSize(){
    var fontSize = Number(document.getElementById('font-size').value)
    var textarea = document.getElementById('area-texto')
    textarea.style.fontSize = fontSize + 'px'
}

function resetStyles() {
    var textarea = document.getElementById('area-texto');
    textarea.style.textAlign = '';
    textarea.style.fontWeight = '';
    textarea.style.fontStyle = '';
    textarea.style.textDecoration = '';
    textarea.style.color = '';
    textarea.style.fontSize = '';
}

document.getElementById('area-texto').addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'f') {
        event.preventDefault();
        var textarea = document.getElementById('area-texto');
            textarea.style.textAlign = '';
            textarea.style.fontWeight = '';
            textarea.style.fontStyle = '';
            textarea.style.textDecoration = '';
            textarea.style.color = '';
            textarea.style.fontSize = '';
    }
})

document.getElementById('area-texto').addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
        if (event.key === 'q') {
            this.style.textAlign = 'left';
        }
        else if (event.key === 'e') {
            this.style.textAlign = 'center';
        }
        else if (event.key === 'r') {
            this.style.textAlign = 'right';
        }
        else if (event.key === 'j') {
            this.style.textAlign = 'justify';
        } 
        else if (event.key === 'b') {
            this.style.fontWeight = 'bold'
        }
        else if (event.key === 'i') {
            this.style.fontStyle = 'italic'
        }
        else if (event.key === 's') {
            this.style.textDecoration = 'underline'
        }
    }
});