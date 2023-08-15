
var numpantalla="0";
var numespera=0;
var operapendiente="";
var solucion= "";
 
function ingresarnumero(x)
{
    if(numpantalla=="0")
    {
        document.Calculadora.txtboxnros.value=x;
        numpantalla=x;
    }
    else
    {
        document.Calculadora.txtboxnros.value+=x;
        numpantalla+=x;
    }

}

function ingresaoperacion(y){
    if(operapendiente =="")
    {
    numespera=document.Calculadora.txtboxnros.value;
    document.Calculadora.txtboxnros.value +=y;
    operapendiente = y;
    numpantalla = "";
    }
}

function limpiar(){

}

function borrar(){

}

function resultado(){
 
        solucion=numespera+operapendiente+numpantalla;
        document.Calculadora.txtboxnros.value=eval(solucion);
        numpantalla=eval(solucion);
   
}