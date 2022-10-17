// roda uma função após tempo especificado (ms ou s)

const timeOut = 3000;
const finished = () => console.log("well done"); // callback

console.time("#setTimeout");
setTimeout(finished, timeOut);
console.timeEnd("#setTimeout");

console.log("Mostrar");
