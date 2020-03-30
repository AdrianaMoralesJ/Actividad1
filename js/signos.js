function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
              nDia = parseInt(valor.substring(0,2), 10);
        			nMes = parseInt(valor.substring(3,5), 10);
        			nAnio = parseInt(valor.substring(6,10), 10);

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }
        function creasigno(nDia,nMes){

        var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
        var newContent = document.createTextNode("SIGNO ARIES"+" Numero de la suerte: 5");
        newDiv.style="border: 3px solid #999999; background-color:#ff0000; width: 200px ;height:300px ";
        }
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          var newContent = document.createTextNode("SIGNO TAURO"+" Número de la suerte: 12");
          newDiv.style="border: 3px solid #999999; background-color:#00ff03; width: 200px ;height:300px ";}

          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            var newContent = document.createTextNode("SIGNO GEMINIS"+"  Número de la suerte: 3");
            newDiv.style="border: 3px solid #999999; background-color:#fffc00; width: 150px ;height:100px ";

          }
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              var newContent = document.createTextNode("SIGNO CANCER"+" Número de la suerte: 2");
              newDiv.style="border: 3px solid #999999; background-color:#ffffff; width: 150px ;height:100px ";

            }
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                var newContent = document.createTextNode("SIGNO LEO"+" Número de la suerte: 9");
                newDiv.style="border: 3px solid #999999; background-color:#fea205; width: 150px ;height:100px ";

              }
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                  var newContent = document.createTextNode("SIGNO VIRGO"+" Número de la suerte: 17");
                  newDiv.style="border: 3px solid #999999; background-color:#877b65; width: 150px ;height:100px ";

                }
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                    var newContent = document.createTextNode("SIGNO LIBRA"+" Número de la suerte: 6");
                    newDiv.style="border: 3px solid #999999; background-color:#ff00c7; width: 150px ;height:100px ";

                  }
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      var newContent = document.createTextNode("SIGNO ESCORPIO"+" Número de la suerte: 8");
                      newDiv.style="border: 3px solid #999999; background-color:#a30202; width: 150px ;height:100px ";

                    }
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                        var newContent = document.createTextNode("SIGNO SAGITARIO"+" Número de la suerte: 4");
                        newDiv.style="border: 3px solid #999999; background-color:#ff047c; width: 150px ;height:100px ";

                      }
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                          var newContent = document.createTextNode("SIGNO CAPRICORNIO"+" Número de la suerte: 23");
                          newDiv.style="border: 3px solid #999999; background-color:#5b5757; width: 150px ;height:100px ";

                        }
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                            var newContent = document.createTextNode("SIGNO ACUARIO"+ " número de la suerte :0");
                            newDiv.style="border: 3px solid #999999; background-color:#afaaaa; width: 150px ;height:100px ";

                          }
                            else if((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                              var newContent = document.createTextNode("SIGNO PICIS "+" número de la suerte: 7");
                              newDiv.style="border: 3px solid #999999; background-color:#9d00fe; width: 150px ;height:100px ";}




        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        //newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";


}
function limpiar(){
    var activo = document.activeElement.id;
    activo.innerHTML = "";
}
