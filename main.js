

let link=document.getElementById('nav-links');
window.addEventListener('click',function(){
    link.style.left="-200px";
},true);
function showMenu(){
    link.style.left="0";
   
}

function hideMenu(){
    link.style.left="-200px";
}


