const monedaUno = document.querySelector("#monedaUno");
const monedaDos= document.querySelector("#monedaDos");

const moneda = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
const fragment= document.createDocumentFragment();
const fragment1= document.createDocumentFragment();

moneda.forEach((monedas) =>{
    const option = document.createElement("option");
    option.textContent = monedas;
    fragment.appendChild(option);
 

});

monedaUno.appendChild(fragment);
moneda.forEach((monedas1) =>{
    const option1 = document.createElement("option");
    option1.textContent = monedas1;
    fragment1.appendChild(option1);
 

});

monedaDos.appendChild(fragment1);
function boton(){
    botonOn = getElementById("cotizar");
    botonOn.setAttribute("tittle", "destacado" );
};

function convertir(){
    let valor = document.getElementById("cantidad").value;
    monedaU = document.getElementById("monedaUno").value;
    monedaD = document.getElementById("monedaDos").value;
    valordeVerdad = isNaN(valor);
    resultado = 0;
    Dolar = 4;
    pesoMexicano = 180;
    pesoColombiano = 4000;
    Euro = 4;
    libraEsterlina = 5;
    miboton=document.getElementById("cotizar");
    




//Dolar a Pesomexicano

if(monedaUno==2&&monedaDos==3){
    resultado = valor/ pesoMexicano;
}

//Dolar a peso colombiano

else if(monedaUno==2&&monedaDos==4){
    resultado = valor/pesoColombiano;
}
//Dolar a Euro
else if(monedaUno==2&&moneda==5){
    resultado = valor/ Euro;
}
//Dolar a libra Esterlina
else if (monedaUno==2&&monedaDos==6){
    resultado = valor/libraEsterlina;
}
//peso mexicano a Dolar
else if( monedaUno==3&&monedaDos==2){
    resultado= valor*Dolar;
}
//peso mexicano a peso Colombiano
else if(monedaUno==3&&monedaDos==4){
    resultado= valor/pesoColombiano;
}
//peso mexicano a euro
else if(moneda==3&&monedaDos==5){
    resultado= valor/Euro;
}
//peso mexicano a Libra Esterlina
else if(monedaUno==3&&monedaDos==6){
    resultado= valor/libraEsterlina
}
//peso colombiano a Dolar 
else if(monedaUno==4&&monedaDos==2){
    resultado=  valor* pesoColombiano;
}
//peso colombiano a mexicano
else if (monedaUno==4&&monedaDos==3){
    resultado = valor* pesoColombiano;
}
//peso colombiano a Euro 
else if(monedaUno==4&&monedaDos==5){
    resultado = valor/ Euro;
}
//peso colombiano a libra Esterlina
else if(monedaUno==4&&monedaDos==6){
    resultado = valor/ libraEsterlina;
}
//Euro a Dolar
else if (monedaUno==5&&monedaDos==2){
    resultado = valor * Euro;
}
//Euro a peso a mexicano
else if (monedaUno==5&&monedaDos==3){
    resultado = valor * pesoMexicano;
}
//Euro a peso colombiano
else if (monedaUno==5 &&monedaDos==4){
    resultado= valor * pesoColombiano;
}
//Euro a libra esterlina 
else if (monedaUno==5&&monedaDos==6){
    resultado = valor / libraEsterlina;
}
// libra esterlina a Dolar
else if (monedaUno==6&&monedaDos==2){
    resultado= valor*Dolar;
}
//libra esterlina a peso mexicano
else if(monedaUno==6&&monedaDos==3){
    resultado= valor* pesoMexicano;
}
// libra Esterlina a peso colombiano
else if (monedaUno==6&&monedaDos==4){
    resultado= valor* pesoColombiano;
}
// libra Esterlina a Euro
else if (monedaUno==6&&monedaDos==5){
    resultado = valor * Euro;
    
}
else{
    resultado= "incorrecto";
}
document.getElementById(resultado).innerHTML="Resultado: $" +resultado.toFixed(2);
miboton.addEventListener("click",convertir);
}

















    


