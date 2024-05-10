function add(num1, num2){
    var result=parseInt(document.getElementById(num1).value)+parseInt(document.getElementById(num2).value);
    console.log(result)
    /* Con el innerText para darle un valor a un elemento en el documento  */
    document.getElementById("result").innerText = result
}
function resta(num1, num2){
    var result=parseInt(document.getElementById(num1).value)-parseInt(document.getElementById(num2).value);
    console.log(result)
    /* Con el innerText para darle un valor a un elemento en el documento  */
    document.getElementById("result").innerText = result
}
function mult(num1, num2){
    var result=parseInt(document.getElementById(num1).value)*parseInt(document.getElementById(num2).value);
    console.log(result)
    /* Con el innerText para darle un valor a un elemento en el documento  */
    document.getElementById("result").innerText = result
}
function div(num1, num2){
    var result=parseInt(document.getElementById(num1).value)/parseInt(document.getElementById(num2).value);
    console.log(result)
    document.getElementById("result").innerText = result
}