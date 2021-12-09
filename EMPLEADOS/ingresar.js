const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cui = document.getElementById("cui");
const depa = document.getElementById("depa");

function ingresar(){
    console.log("Nombre: "+nombre.value);
    console.log("Apellido: "+apellido.value);
    console.log("CUI: "+cui.value);
    console.log("Departamento: "+depa.value);
}