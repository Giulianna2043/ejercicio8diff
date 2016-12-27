function calcular()
{
	var n = document.getElementById("n").value;
	var diff;
    var salida =document.getElementById("salida");

	/*- Si n>21 entonces 
    - diff = n-21
    - Mostrar (diff*2)
- Si no 
    - diff = 21-n
    - Mostrar diff*/

	
	if (n>21)
    {
        diff = n-21;
        salida.innerHTML="Es el doble de la diferencia absoluta: " + (diff*2); 
	}
	else 
    {
        diff = 21-n;
        salida.innerHTML = diff;
    }
	
}

