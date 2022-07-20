let luzes = document.querySelectorAll('.luz')
let rainbow = []
let cores = ['0', '30', '60', '120', '180', '240', '273']
let pode = true
let comece = document.querySelector('#start')
comece.addEventListener('click', ligDeslig)
let tempoIntervalo = 1000
let condicao = false
let intervalo = document.querySelector('#intervalo')
intervalo.addEventListener('input', pegarIntervalo)
function pegarIntervalo(){
    tempoIntervalo = parseInt(intervalo.value) * 1000
}


function ligDeslig(){
    condicao = !condicao
    if (condicao == true){
        alert('Let is Beggin')
        comece.textContent = 'STOP'
        intervalO = setInterval(brilhar, tempoIntervalo)
    }
    else{
        comece.textContent = 'START'
        clearInterval(intervalO)
        alert('Ending the apresentation')
        for (i in luzes){
            luzes[i].style.backgroundColor = 'rgb(82, 81, 81)'
            luzes[i].style.boxShadow = 'none'
        }
    }
}

function brilhar() {
        //Atribuindo as cores e luz
    for (c in luzes) {
        if (pode == true)
            luz = '50'
        else
            luz = '10'
        rainbow[c] = 'hsl(' + cores[c] + ', 100%, ' + luz + '%)'
        luzes[c].style.backgroundColor = rainbow[c]
        luzes[c].style.boxShadow = '0px 0px 15px 0px ' + rainbow[c]
        luzes[c].style.borderColor = 'rgba(255, 255, 255, ' + parseInt(luz)/100+ ')'
        luzes[c].style.transition = ' '+(tempoIntervalo/1000)+'s'
        pode = !pode
    }

}
