//call back function

const displayit = () => {
    document.getElementById('clickMe').addEventListener('click', ()=>{
        console.log('i got clicked')
    })
}
setTimeout(displayit, 3000)

//function chaining

const obj = function(){
    let i = 0;

    const add = function(j) {
        i += j;
        return this;
    };
    const sub = function(j) {
        i -= j;
        return this;
    }
    const print = function(){
        console.log(i);
    };

    return { add: add, sub: sub, print: print }
}

var x = obj();

x.add(3).sub(2).print();
