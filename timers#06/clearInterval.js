// roda uma função após tempo especificado (ms ou s)
// cancela um evento de tempo

const timeOut = 500;
const checking = () => console.log("well done"); // callback

let interval = setInterval(checking, timeOut);

setTimeout(() => clearInterval(interval), 3000);
