imagenBordeRojo = document.getElementById('borde-rojo')
let ConBorde = false

imagenBordeRojo.addEventListener('click', function() {
    if(ConBorde == false){
        imagenBordeRojo.style.border = '2px solid red';
        ConBorde = true
    }else{
        imagenBordeRojo.style.border = 'none';
        ConBorde= false
    }
});

