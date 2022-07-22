let caixanum = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function éNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, lis) {
    if (lis.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }    
}

function adicionar() {
    if (éNumero(caixanum.value) && !naLista(caixanum.value, valores)) {    // ! significa NAO
        valores.push(Number(caixanum.value))       // PUSH adiciona elemento ao vetor
        let item = document.createElement('option')     // cria um elemento pelo JS
        item.text = `valor ${caixanum.value} adicionado.`    //parte de dentro do elemento 'option'
        lista.appendChild(item)      // adiciona na var 'lista'
        res.innerHTML = ''   // limpa o resutado anterior
    } else {    
        window.alert('[ERRO] Valor inválido ou já inserido na lista.')
   }
   caixanum.value = ''    // limpa o campo 
   caixanum.focus()       // o cursor pisca sem precisar ir com o mouse
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores [pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
}