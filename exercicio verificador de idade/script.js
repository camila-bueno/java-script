function verificar() {
    var data = new Date() //data do PC
    var ano = data.getFullYear() // ano completo. ex 2022
    var caixaAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('resultado')

    if (caixaAno.value.length == 0 || caixaAno.value > ano) { //se nao for inserido nada ou se for maior que ano atual.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(caixaAno.value) // calculo do ano atual menos o ano digitado
        var gênero = '' // fica em branco pois nao sabemos o que o usuario vai escolher.
        var img = document.createElement('img')  // cria uma tag img
        img.setAttribute('id', 'foto') // cria um id com o nome foto

        if(sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-menino.png') // insere uma imagem.
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso.png')
            }
            document.body.style.background = '#A8DDF0'
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-menina.png') 
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idosa.png')
            }
            document.body.style.background = '#F3CAC0'
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
        res.appendChild(img) // aparece a imagem após a mensagem da linha acima.
    }

}