var pessoa = {
    nome: 'nome',
    endereco: undefined,
    telefone: undefined,
    aniversario: undefined
}

var listaPessoas = [
]
const nNomes = ['Florêncio Saulo Gonçalves', 'Aldina Sebástian Cassua', 'Georgina da Silva Lumbe', 'José Salvador Gaspar', 'António Mingas Luvu', 'Sidney Scaccio', 'Lucas A.R.T.', 'Gabriel Rodrigues', 'Pablo Matheus', 'Pedro Alvez', 'Second Time']
const nEnderecos = ['Angola, Luanda - Viana', 'Angola, Benguela', 'Portugal, Lisboa', 'Angola, Luanda - Catete', 'Angola, Luanda - Cacuaco', 'Brasil, Brasília', 'Brasil, São Paulo', 'Brasil, São Paulo', 'Brasil, São Paulo', 'Brasil, São Paulo', 'Brasil, Salvador']
const nTelefones = [934567825, 964875210, 968754895, 930120547, 987956849, '+55 958457994', '+55 942742573', '+55 942742574', '+55 942742575', '+55 942742576', '+55 924356598']
const nAniversarios = ['2002, 03, 08', '2006, 03, 20', '2000, 04 08', '2003, 01, 13', '2009, 03, 19', '1992, 11, 30', '1999, 03, 21', '2001, 09, 7', '2002, 06, 17', '2000, 01, 12',  '2003, 02, 27']

lista = document.querySelector('#ul-nomes')
for (c in nEnderecos){
    listaPessoas[c] = Object.create(pessoa)
    listaPessoas[c]['nome'] = nNomes[c]
    listaPessoas[c]['endereco'] = nEnderecos[c]
    listaPessoas[c]['telefone'] = nTelefones[c]
    listaPessoas[c]['aniversario'] = new Date(nAniversarios[c]).toDateString()
    var elemento = document.createElement('li')
    elemento.className = c
    elemento.addEventListener('mouseover', setarDados)
    elemento.innerText = listaPessoas[c]['nome']
    lista.appendChild(elemento)
}

function setarDados(){
    document.querySelector('#nome').innerHTML = listaPessoas[this.className]['nome']
    document.querySelector('#endereco').innerHTML = listaPessoas[this.className]['endereco']
    document.querySelector('#telefone').innerHTML = listaPessoas[this.className]['telefone']
    console.log(listaPessoas[c]['aniversario'])
    document.querySelector('#aniversario').innerHTML = listaPessoas[this.className]['aniversario']
}

