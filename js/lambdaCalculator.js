/* EL CONS ES PARA FUNCIONES LAMBDA */
const add = (num1, num2)=>{
    var result=parseInt(document.getElementById(num1).value)+parseInt(document.getElementById(num2).value);
    console.log(result)
    
    document.getElementById("result").innerText = result
}
const resta = (num1, num2)=>{
    var result=parseInt(document.getElementById(num1).value)-parseInt(document.getElementById(num2).value);
    console.log(result)
   
    document.getElementById("result").innerText = result;
}
const mult = (num1, num2)=>{
    var result=parseInt(document.getElementById(num1).value)*parseInt(document.getElementById(num2).value);
    console.log(result)
  
    document.getElementById("result").innerText = result;
}
const div = (num1, num2)=>{
    var result=parseInt(document.getElementById(num1).value)/parseInt(document.getElementById(num2).value);
    console.log(result)

    document.getElementById("result").innerText = result;
}

function addElement(){
    /* El innerHTML sirve para seleccionar un elemento que está dentro de un elemento */
    /* En este caso, dentro del div */
    document.getElementById('divDivision').innerHTML="<button>NEW</button>";
}

function quitarElement(){
    /* El innerHTML sirve para seleccionar un elemento que está dentro de un elemento */
    /* En este caso, dentro del div */
    document.getElementById('divDivision').innerHTML="";
}
function conceptosJS(){
    /* Tipos de dato */
    /* let  */
    /* cons -> Para asignar a valores que no se modifican (Constantes) */
    const IVA =15
    console.log(IVA)
    /* var, let -> variables que puedo modificar. Var está quedando en desuso porque "let" maneja mejor la memoria*/
    var name = "RH"
    console.log(name)
    name = "oolo"
    console.log("cambio de nombre a "+name)
  
    let lastName = "BB"
    console.log(lastName)
    lastName = "Cruz"
    console.log("cambio de apellido a "+lastName)
}

