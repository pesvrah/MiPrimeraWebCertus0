let contGrande = document.getElementById("grande-container");
let puntos = document.getElementsByClassName("punto");
let totalImagenes = contGrande.children.length; 
alert("Mueve el mouse lentamente por toda la pagina");

for (let i = 0; i < puntos.length; i++) {
    puntos[i].addEventListener("click", () => {
        let posicionPunto = i;
        let posicionContenedor = -(100 / totalImagenes) * posicionPunto; 

        contGrande.style.transform = `translateX(${posicionContenedor}%)`;

        for (let j = 0; j < puntos.length; j++) {
            puntos[j].classList.remove("punto-activo");
        }

        puntos[i].classList.add("punto-activo");
    });
}