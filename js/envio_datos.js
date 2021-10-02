window.onload = function(){
    datos =[];
}

function agregarElemento(){
    let elem = document.getElementById('texto').value;
    datos.push(elem);

    document.getElementById('texto').value = "";
    //elem.innerHTML="";

}

function mostrarElemento(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML='';

    for (const dato_l of datos){
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = dato_l;

        resultado.appendChild(datoParrafo);
    }
}

