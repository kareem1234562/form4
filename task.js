let x=document.querySelectorAll("input")

function supmit(){
    for(let i=0;i<x.length;i++){

        if(x[i].value===""){
            window.alert("You should Fill Form")
        }
    }
}