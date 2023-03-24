// roda uma função após tempo especificado (ms ou s)
// cancela um evento de tempo

const timeOut = 3000;
const finished = () => console.log("well done"); // callback

let timer = setTimeout(finished, timeOut);
clearTimeout(timer);
