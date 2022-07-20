//Pegar o valor contido em #resposta
function pegar(){
    conteudo = document.querySelector('#resposta').textContent
}

//AC - Apagar tudo
var apagarTudo = document.querySelector('.ac')
apagarTudo.addEventListener('click', apagTudo)
function apagTudo(){
    document.querySelector('#resposta').innerHTML = ''
    pegar()    
    apag()
}

//C - Apagar caractere
var apagar = document.querySelector('.c')
apagar.addEventListener('click', apag)
function apag(){
    pegar()
    conteudo = conteudo.substring(0, conteudo.length - 1)
    if(conteudo == '')
        conteudo = '0'
    document.querySelector('#resposta').innerHTML = conteudo
}
apag()
//Para pegar os digitos da calculadora
var digitos = []
for (c = 0; c < 10; c++){
    digitos[c] = document.querySelectorAll('.dig')[c]
    digitos[c].addEventListener('click', addDig)

}
//Adiciona dígitos ao label de id resposta
function addDig(){
    pegar()
    if(conteudo == 0)
        conteudo = ''
    conteudo += this.textContent
    document.querySelector('#resposta').innerHTML = conteudo
}

var igual = document.querySelector('#equal');
igual.addEventListener('click', igualar)
function igualar(){
    pegar()
    conteudo = eval(conteudo)
    document.querySelector('#resposta').innerHTML = conteudo
}
//operações
var operacoes = []
for (c = 0; c < 5; c++){
    operacoes[c] = document.querySelectorAll('.opera')[c]
    operacoes[c].addEventListener('click', operacao)
}
function operacao(){
    pegar()
    if(conteudo == 0 || conteudo == '+' || conteudo == '-' || conteudo == '.')
        conteudo = ''

    if(conteudo == '' && this.textContent == '/'){
        document.querySelector('#resposta').innerHTML = ''
        apag()
    }
    else if(conteudo == '' && this.textContent == '*'){
        document.querySelector('#resposta').innerHTML = ''
        apag()
    }
    else{
        var teste = ['/', '*', '+', '-']
        if(teste.indexOf(this.textContent) != -1){
            //Adiciona os operadores aritméticos presentes em var teste
            if (conteudo[conteudo.length - 1] >= 0 && conteudo[conteudo.length -1] <= 9){
                conteudo += this.textContent
                document.querySelector('#resposta').innerHTML = conteudo
            }
            else{
                conteudo = conteudo.substring(0, conteudo.length - 1)
                conteudo += this.textContent
                document.querySelector('#resposta').innerHTML = conteudo
            }
        }
        //Adiciona '.' a última posição
        else if (conteudo[conteudo.length - 1] != this.textContent){
            conteudo += this.textContent
            document.querySelector('#resposta').innerHTML = conteudo
        }
    }
}