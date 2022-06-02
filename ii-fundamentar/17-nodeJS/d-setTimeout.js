const timeOut_1 = 1000
const timeOut_2 = 2000
const timeOut_3 = 3000
const finished_1 = () => console.log('1')
const finished_2 = () => console.log('2')
const finished_3 = () => console.log('done!')

setTimeout(finished_1, timeOut_1)
setTimeout(finished_2, timeOut_2)
setTimeout(finished_3, timeOut_3)
console.log('Mostrar')