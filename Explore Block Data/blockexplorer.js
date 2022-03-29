const be = require('blockexplorer');

 async function getBlock(height) {
       try {
        be.blockIndex(height)
        .then(hash => be.rawBlock(hash))
        .then(res => console.log(res))
        .catch(error => console.error('whoops', error.message));
       
 } catch (error) {
     console.log('Whoops', error.message)
     // Running out of solutions here. The API is failing from the block explorer.
 }
}
 
 (function theLoop (i) {
     setTimeout(function () {
         getBlock(i);
         i++;
         if (i < 3) theLoop(i);
     }, 3000);
   })(0);