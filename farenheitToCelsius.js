
const convercionDeGrados = (gradosFarenheit) => {
    let celsius = ((gradosFarenheit - 32) * 0.5556);
    return celsius;
}

console.log(convercionDeGrados(100));

//Fórmula	(gradosFare − 32) × 5/9 = 0 °C
