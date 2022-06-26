var incheck = document.getElementById("calculator");

var calculation =(number)=> {
    incheck.value+= number;

}

var result=()=>{
    try{
        incheck.value=eval(incheck.value) 
    }
    catch(err){
        alert('Invalid input');
    }
}

function clr() {
    incheck.value = ' ';
}

function del(){
    incheck.value=incheck.value.slice(0,-1);

}