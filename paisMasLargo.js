const PAISES = ["Mexico", "Panama", "Guatemala", "El Salvador","Peru"];
longestCountry(...PAISES);

function longestCountry () {
    let totales = [];
    for(let palabra of PAISES) {
        totales.push(palabra.length);
      }

      let maximo = Math.max.apply(null, totales);
      
      
      for (let elemento of PAISES) {
        if (elemento.length === maximo) {
          console.log("El pais con mas letras es: ",elemento);
        }
      }
}
