//módulos nativos

// require -> uma forma de chamar módulos
// const path = require('path')
// Exibir nome do arquivo (a_require.js)
// console.log(path.basename(__filename));
// console.log(path.basename("Users/starter/docs.js"));/

// Meus módulos
//const myModule = require('./exports')
//myModule.getFlag("teste")//

import getFlag from './exports';

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greting')}`);
