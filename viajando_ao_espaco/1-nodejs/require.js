//módulos nativos

// require -> uma forma de chamar módulos nativos ou de terceiros
// path é um objeto com várias propriedades
const path = require('path')
console.log(path)
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

// Meus módulos
const myModule = require('./exports')
console.log(myModule)


//myModule.getFlag("teste")//

//import getFlag from './exports';

//console.log(`Oi ${getFlag('--name')}. ${getFlag('--greting')}`);
