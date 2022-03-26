const sha256 = require('crypto-js/sha256');

function generateHash(data) {
    data = JSON.stringify(data);
  return sha256(data).toString()
}
const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};
console.log(`First hash — never changes: ${generateHash(data1)}`);
console.log(`Second one — changes, on account of invoked date: ${generateHash(dataObject)}`);