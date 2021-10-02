var arreglo=[];
var persona;

function agregar(){
    var nombre= document.getElementById('nombre').value;
    var documento= document.getElementById('documento').value;
    var telefono= document.getElementById('telefono').value;

    persona ={
        "nombre": nombre,
        "documento": documento,
        "telefono": telefono
    }

    arreglo.push(persona);

    document.getElementById('nombre').value="";
    document.getElementById('documento').value="";
    document.getElementById('telefono').value="";
    
}

function mostrar(){
    console.log(arreglo);
    alert(arreglo[1]['nombre']);
}