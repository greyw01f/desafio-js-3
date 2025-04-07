const sticker01 = document.getElementById('dato01')
const sticker02 = document.getElementById('dato02')
const sticker03 = document.getElementById('dato03')
const botonSticker = document.getElementById('mostrarDato')
const muestraValor = document.getElementById('muestra-stickers')

botonSticker.addEventListener('click',function() {
    let valor01 = parseInt(sticker01.value) 
    let valor02 = parseInt(sticker02.value)
    let valor03 = parseInt(sticker03.value)
    let valorTotal = Number(valor01 + valor02 + valor03)
    
    if(valorTotal<10){
        muestraValor.innerHTML = "LLevas :" + "" + valorTotal + "" +"Stickers"
    }else{
        muestraValor.innerHTML = "Llevas demasiados Stickers"
    }
})
