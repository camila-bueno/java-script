function contar() {
  var caixaini = document.getElementById('txtinicio')
  var caixafim = document.getElementById('txtfim')
  var caixapas = document.getElementById('txtpasso')
  var res = document.getElementById('resultado')

  if (caixaini.value.length == 0 || caixafim.value.length == 0 || caixapas.value.length == 0) {
    window.alert('[Erro] Preencha todos os dados!')

  } else {
    res.innerHTML = 'Contando:'
    var ini = Number(caixaini.value)
    var fim = Number(caixafim.value)
    var pas = Number(caixapas.value)
      if (pas <= 0) {
      window.alert('Passo inválido! Considerando passo 1')
      pas = 1
    }
      if (ini < fim) { //ordem crescente
        for ( var c = ini; c <= fim; c += pas) {
          res.innerHTML += `${c} \u{27A1}`
         }
        } else { // ordem decrescente
            for ( var c = ini; c >= fim; c -= pas) {
              res.innerHTML += `${c} \u{27A1}`
        }
      } 
     res.innerHTML += `\u{1F3C1}`
  }   
}
