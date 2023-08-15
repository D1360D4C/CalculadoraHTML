
var numpantalla="0";
var x = 0;
 
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