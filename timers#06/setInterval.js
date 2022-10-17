// roda uma função após tempo especificado (ms ou s)
// cancela um evento de tempo

const timeOut = 2000;
const checking = () => console.log("well done"); // callback

setInterval(checking, timeOut);
