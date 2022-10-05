function suma(a,b,c,d,nombre) {
    console.log(arguments.length);
}
suma(5,1,2,3,4,"Francisco");

const numeroArgs = (...args) => {
    console.log(args.length);
}

numeroArgs(2,3,"Francicso");

