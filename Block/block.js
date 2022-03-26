/**
 * Import crypto-js/SHA256 library
 */
 const SHA256 = require('crypto-js/sha256');

 /**
  * Class with a constructor for block 
  */
 class Block {
 
     constructor(data){
         this.id = 1;
         this.nonce = 144444;
           this.body = data;
           this.hash = "";
     }
     
       generateHash() {
           let self = this;
              return new Promise(function(resolve, reject) {
                  self.hash = SHA256(JSON.stringify(self)).toString();
                  resolve(self);
              });
     }
 }
 
 module.exports.Block = Block;