const { resolve } = require("dns");

function promisifiedSetTimeout(time){
  return new Promise( resolve => {
    setTimeout(resolve,time);
  });
}


promisifiedSetTimeout(5000).then(()=>{
  console.log("5 seconds are gone according to promisified setTimeout")
})