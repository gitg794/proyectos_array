var arreglo=[];

arreglo[0]= 1;
arreglo[1]= 2;
arreglo[2]= 3;
arreglo[3]= "hola";

// update de array segun la posicion
arreglo[1]= "javascript";

// agregar elemento en ultima posicion de array 
arreglo.push(31);

// for normal 
// for(i=0;i< arreglo.length; i++ ){
//     console.log("for normalito: "+arreglo[i]);
// }

// for in 
for(var i in arreglo){
    console.log("for in: "+arreglo[i]);
}

//elimina el primer elemento
//arreglo.shift();

//eliminar el ultimo elemento
//arreglo.pop();

//borrar en posicion requerida
arreglo.splice(1,1);

arreglo.unshift(9,"mm");

// une todos los valores
console.log("fun  join: "+arreglo.join());




//console.log(arreglo[1]);
