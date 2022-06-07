let add = document.getElementById('add')
let sub = document.getElementById('sub')

let int = document.getElementById('number')
let integer = 0;

add.addEventListener('click', ()=> {
    integer +=1;
    int.innerHTML = integer;
})

sub.addEventListener('click', ()=>{
    integer -= 1;
    int.innerHTML = integer;
})