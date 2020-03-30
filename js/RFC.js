function valida(campo){
  var bRet = false;
  if (campo.value == ""){
    document.getElementById("w").innerHTML="Faltan datos";}

  else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)){
      document.getElementById("w").innerHTML="No tiene formato RFC";}

    else{
      bRet = true;}
  return bRet;
}
