const nombre = document.getElementById("Nombre");
const email = document.getElementById("email");
const usuario = document.getElementById("usuario");
const contrasenia = document.getElementById("password1");
const contrasenia2 = document.getElementById("password2");


function checkIn(){
    if(contrasenia.value != contrasenia2.value){
        alert(contrasenia2.value+ " y "+contrasenia+" INVALIDA, no son iguales");
    } else{
        console.log("Nombre " +nombre.value);
        console.log("email "+email.value);
        console.log("Nombre de usuario "+usuario.value);
        console.log("contrasenia "+contrasenia.value);
        alert("Registrado");
    }
}