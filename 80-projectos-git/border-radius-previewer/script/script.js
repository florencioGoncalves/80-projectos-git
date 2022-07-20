
const elemento = document.querySelector('#elemento').style


tl = addEventListener('input', setar)
tr = addEventListener('input', setar)
bl = addEventListener('input', setar)
br = addEventListener('input', setar)

function setar(){
    msg = document.querySelector('#msg')
    msg.innerHTML = ''
    tl = document.querySelector('#tl').value
    tr = document.querySelector('#tr').value
    bl = document.querySelector('#bl').value
    br = document.querySelector('#br').value
    elemento.borderTopLeftRadius = tl + 'px' 
    elemento.borderTopRightRadius = tr + 'px' 
    elemento.borderBottomLeftRadius = bl + 'px'
    elemento.borderBottomRightRadius = br + 'px'
    if (tl != '')
        msg.innerHTML += `border-top-left-radius: ${tl}px;`
    if (tr != '')
        msg.innerHTML += `<br>border-top-right-radius: ${tr}px;`
    if (bl != '')
    msg.innerHTML += `<br>border-bottom-left-radius: ${bl}px;`
    if (br != '')
    msg.innerHTML += `<br>border-bottom-right-radius: ${br}px;`
}
