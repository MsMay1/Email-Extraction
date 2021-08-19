var fs = require('fs')
const input = fs.readFileSync('test.txt', 'utf8');
var counter = 0
let re = /[\w.'_%+-]+@[\w.]+/g;
const found = input.match(re)

let domObj = {}

for(let i= 0; i < found.length; i++){
    let dom = found[i].slice(found[i].indexOf("@"))
    if (!(dom in domObj)) {
         domObj[dom] = 1;
    } else {
        domObj[dom]++
    }
}

let domArr = []
for(const dom in domObj){
    domArr.push([dom, domObj[dom]]);
}

domArr.sort(function(x,y){return y[1] - x[1]})
console.log(domArr.slice(0,10))