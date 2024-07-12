/*
Todo lo referente a la vacunación
*/





/*
Todo lo referente a la accesibilidad
*/
document.querySelector("#aumentar").addEventListener("click", ()=>{
    ajustarFuente(1);
});
document.querySelector("#reducir").addEventListener("click",() =>{
    ajustarFuente(-1);
});
document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);
document.querySelector("#altoContraste").addEventListener("click", altoContraste);
document.querySelector("#restablecer").addEventListener("click", restablecerTodo);

function ajustarFuente(cambio) {
    let elementos = document.querySelectorAll("body *:not(.accesibilidad):not(.accesibilidad *)"); //Selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo = window.getComputedStyle(elem); // Toma el estilo de cada elemento
        let fontSize = parseFloat(estilo.fontSize);
        console.log(fontSize);
        elem.style.fontSize = fontSize + cambio + 'px';
    })
}

function escalaGrises() {
    document.body.style.filter="grayscale(100%)";
}

function altoContraste() {
    document.body.style.backgroundColor="#1c1f22";
    let elementos=document.querySelectorAll("body *");// Selecciona todos los elementos del body

    elementos.forEach(function(elem){
        let estilo = window.getComputedStyle(elem);
        elem.style.color = "#ffd700";
    })
}

function restablecerTodo() {
    let elementos = document.querySelectorAll("body *");
    elementos.forEach(function(elem){
        elem.style.fontSize="";
        elem.style.color="";
    })

    document.body.style.backgroundColor="";
    document.body.style.filter="";
}

function mostrarOcultar() {
    let barra = document.querySelector(".accesibilidad");
    barra.classList.toggle("mostrar");

    let boton = document.querySelector(".icono-accesibilidad");
    boton.classList.toggle("mostrar");
}


  let mapa = new Map([
    ["Prenatal", "Difteria, Tétanos, Tosferina"],
    ["2 meses", "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo"],
    ["4 meses", "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo"],
    ["11 meses", "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo"],
    ["12 meses", "Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B"],
    ["15 meses", "Varicela"],
    ["4 años", "Sarampión, Rubeola, Parotiditis, Varicela"],
    ["6 años", "Difteria, Tétanos, Tosferina, Polimielitis"],
    ["12 años", "Varicela, Meningococo ACWY, Papilomavirus2"],
    ["14 años", "Difteria, Tétanos"],
    ["65 años", "Difteria, Tétanos, Herpes Zóster, Neumococo"],
    ["80 años", "Herpes Zóster"],
  ]);

  let select = document.querySelector("#edad");

  for (let [vacuna, resultVac] of mapa) {
    let vacunaOpcion = document.createElement("option");
    
    vacunaOpcion.textContent = vacuna; 
    vacunaOpcion.value = vacuna;

    select.appendChild(vacunaOpcion); 
  }

  select.addEventListener("change", function () {
    let edad = mapa.get(select.value); 
    console.log(edad); 

    document.querySelector("#resultEdad").innerHTML = "Edad: " + select.value ;
    document.querySelector("#resultVac").innerHTML = "Vacunas: "+ edad ;
  });