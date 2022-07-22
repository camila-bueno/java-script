function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s).`
    
    if ( hora < 12) {
        img.src = 'imagens/manha1.png'
        msg.innerHTML += '<p>Bom dia!</p>'
        document.body.style.background = '#F3CAC0' 
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde1.png'
        msg.innerHTML += '<p>Boa tarde!</p>'
        document.body.style.background = '#F0CF89'
    } else {
        img.src = 'imagens/noite1.png'
        msg.innerHTML += '<p>Boa noite!</p>'
        document.body.style.background = '#0378A6'
    }
}



