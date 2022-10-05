const palindromos = (str) => {
let re = /[^A-Za-z0-9]/g;//Caracteres que acepta
 str = str.toLowerCase().replace(re, ''); //remplaza todas las mayusculas por minisculas
 let len = str.length;//numerodeletras en la frase
 
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 console.log(str); 
 console.log(len);
 return true;
}

console.log(palindromos("Anita lava la tina"));


