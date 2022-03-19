// caching btns 

const btns = document.querySelectorAll(".btn");
let result = document.getElementById("results");
const ans = document.getElementById('equals');
const AllClear = document.getElementById('Allclear');
const del = document.getElementById('delete');

AllClear.addEventListener('click', ()=> {
    result.value = "";
})


del.addEventListener('click', ()=> {
    result.value = result.value.slice(0,-1);
})


ans.addEventListener('click', ()=> {
    result.value = eval(result.value);
})

btns.forEach(function(currentbtn){
    currentbtn.addEventListener('click', ()=> {
        // console.log(currentbtn.value);
        result.value += currentbtn.value;
    })
})