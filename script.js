function add(){
    var val=document.getElementById("val").value;

    val++;
    document.getElementById("val").value=val;
}
function sub(){
    var val=document.getElementById("val").value;
    if(val>0){
        val--;
    }
    else{
        val=0 ;
    }
    document.getElementById("val").value=val;
}



function range(){

    var range = document.getElementById("range").value;
    document.getElementById("val").value=range;

}

const int = setInterval (test,100)

function test(){

    var s =document.getElementById("s").value ;
    var m =document.getElementById("m").value ;
    var h =document.getElementById("h").value ;
  
    s++;
    var formate ="PM";

    if(s==10){
        s=0;
        m++;
        if(m==10){
            m=0;
            h++;
            if(h==24){
                h=0;
                formate ="AM";
            }
           
        }

    }





    document.getElementById("s").value=s;
    document.getElementById("m").value=m;
    document.getElementById("h").value=h;
    document.getElementById("f").value=formate;

}
function stop(){
    clearInterval (int);
}
