let cel = document.getElementById("cel");
let feh = document.getElementById("feh");

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) +32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4); // we fixed dicimal digit
    }
    feh.value = f;
});

feh.addEventListener("input",function(){
    let f = this.value;  //  value f is store
    let c = (f -32) *5/9;  // give the formula
    if(!Number.isInteger(c)){
        c = c.toFixed(4);  
    }
    cel.value=c;
});