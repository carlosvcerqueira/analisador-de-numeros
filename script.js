let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    /*verifica se é número */
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    /*verifica se é está na lista*/
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    /*adiciona o número*/
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já está na lista.')
    }
    num.value= ''
    num.focus()
}

function finalizar(params) {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        média = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, foram adicionados <strong>${tot}<strong> números.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}<strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}<strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}<strong>.</p>`
        res.innerHTML += `<p>A média de todos os valores é <strong>${média}<strong>.</p>`
    }
}