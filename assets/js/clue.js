const selectorNumero01 = document.getElementById('selectorNumero01');
const selectorNumero02 = document.getElementById('selectorNumero02');
const selectorNumero03 = document.getElementById('selectorNumero03');
const muestraPass = document.getElementById('mostrarPassword')
const botonSelectores = document.getElementById('boton-selectores');

botonSelectores.addEventListener('click',function(){
    const valorSelect01 = parseInt(selectorNumero01.value);
    const valorSelect02 = parseInt(selectorNumero02.value);
    const valorSelect03 = parseInt(selectorNumero03.value);

    const valoresConcatenados = valorSelect01.toString() + valorSelect02.toString() + valorSelect03.toString();

    if(valoresConcatenados==="911"){
        muestraPass.innerHTML = "Password 1 correcto"
    }else if(valoresConcatenados==="714"){
        muestraPass.innerHTML = "Password 2 correcto"
    }else{
        muestraPass.innerHTML = "Password incorrecto"
    }
    })