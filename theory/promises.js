// Promise

let p = new Promise((resolve, reject) => {
    let a = 1+1
    if(a == 2) {
        resolve('Success')
    }else{
        reject('failed')
    }
})


p.then((result)=>{
    console.log('this is in the then ' + result)
}).catch((result) => {
    console.log('this catch '+result)
})


// Promises Chaning

let promise = new Promise((resolve, reject) =>{
    resolve();
});

promise.then((result)=> {
    console.log('first')
}).then(()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('second');
            resolve();
        }, 2000);
    }
}).then(()=>{
        setTimeout(()=> {
            console.log('third');
        }, 1000);
});
