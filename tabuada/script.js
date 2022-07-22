function tabuada() {
    let caixanum = document.getElementById('txtnum')
    let tabu = document.getElementById('seletab')
    if (caixanum.value.length == 0) {
        window.alert('[Erro] Por favor, digite um número!')        
    } else {
       let n = Number(caixanum.value)
       let c = 1
       tabu.innerHTML = '' // Serve para limpar a tabuada antes de inserir outro numero.
       while (c <= 10) {
           let item = document.createElement('option') // Serve para criar elemento no JS
           item.text = `${n} x ${c} = ${n*c}` // parte de dentro do elemento 'option'
           tabu.appendChild(item) // APPENDCHILD - adiciona um elemento filho.
           c++
       }
    }   
}