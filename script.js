let images= document.querySelectorAll(' .heroimg img');
let index=0;
let currentimage=images[0];
currentimage.style.display='inline';


function forward(n){
    index+=n;
    display();
}

function display(){
   if(index==images.length) index=0;
   else if(index==-1) index=images.length-1;
   currentimage.style.display='none';
   currentimage=images[index];
   currentimage.style.display='inline';
}