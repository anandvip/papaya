// let fruitTaste = ()=> {
//     return {1:'sweet',2:'tasteLess',3:'bitter'}
//     }
// console.log(fruitTaste());

// let taste = fruitTaste()
// console.log(taste[1]);


function FruitTaste(taste,gender,treeNumber){
    this.taste = taste;
    this.gender = gender;
    this.treeNumber = treeNumber;
    this.getTaste = ()=> this.taste;
    this.getGender = ()=> this.gender
}

let papayaTree18 = new FruitTaste('sweet', 'female', 18);

console.log(papayaTree18.getTaste());
let myNumber = new Number(18)

console.log(myNumber.constructor);


//Generator function

function* idMaker(){
    let id = '0'
    while (true) {
        yield id++     
    }
}

let gen = idMaker()
console.log(typeof(gen.next));
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

var fibonacci = {
    [Symbol.iterator]: function*() {
      var pre = 0, cur = 1;
      for (;;) {
        var temp = pre;
        pre = cur;
        cur += temp;
        yield cur;
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }
  