function siete(){
var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
resultado *= i;
}
document.getElementById("res").innerHTML= "El factorial es: "+resultado;
}
