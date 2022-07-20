//Armazena a tag do meu id 'binario'
let binario = document.querySelector('#binario')
binario.addEventListener('input', pegar)
//A variável resposta armazenará o valor(value) contido no label 'Binário'
let resposta
//Função para pegar o valor de 'binario' para a variável resposta
function pegar(){
   resposta = 0
    var temp = binario.value.split('')
    for(c in temp){
        //Adiciona o valor ativo caso seja igual a 1
        if(temp[c] == '1'){
            resposta += Math.pow(2, binario.value.length - c - 1)
        }
        //Caso o valor não seja 1 ou 0, remove o valor e refaz a operação
        else if(temp[c] != '0'){
            resposta = 0
            temp.splice(c, 1)
            binario.value = ''
            for(i in temp){
                binario.value += temp[i]
                if (temp[i] == '1'){
                    resposta += Math.pow(2, temp.length - i - 1)
                }
            }
        }            
    }            
    document.querySelector('#resposta').innerHTML = resposta
}