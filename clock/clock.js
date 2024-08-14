
let  display_c =()=>{
    let refresh=1000; 
    let mytime = setTimeout('display()',refresh)
    }
let display =()=>{
    let d = new Date();
    let n = d.toLocaleTimeString();    
    let clock = document.querySelector('.clock').innerHTML= n ;
    display_c()
}

display()
