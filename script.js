let contGrande = document.getElementById("grande-container");
let puntos = document.getElementsByClassName("punto");
let totalImagenes = contGrande.children.length; // Contar cuántas imágenes hay

console.log(puntos);

for (let i = 0; i < puntos.length; i++) {
    puntos[i].addEventListener("click", () => {
        let posicionPunto = i;
        let posicionContenedor = -(100 / totalImagenes) * posicionPunto; // Mueve de acuerdo con la cantidad de imágenes

        contGrande.style.transform = `translateX(${posicionContenedor}%)`;

        // Remover la clase "punto-activo" de todos
        for (let j = 0; j < puntos.length; j++) {
            puntos[j].classList.remove("punto-activo");
        }

        // Agregar "punto-activo" al clickeado
        puntos[i].classList.add("punto-activo");
    });
}