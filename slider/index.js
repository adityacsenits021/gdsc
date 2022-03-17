console.log("Hello");
var x=document.querySelector('#prev');
var y=document.querySelector('#ahead');
let count=1;
let size=document.querySelectorAll('.image');
let mover=window.innerWidth; 
var yt=document.querySelector('.images');
yt.style.transition="none";
yt.style.transform=`translateX(${-1*count*mover}px)`;
    


y.addEventListener("click",()=>{
    console.log(size.length);
    console.log(count);
    
    
    
    if(count>=size.length-1)
    {
       return;
       
    
    }
  
    
        yt.style.transition="0.2s ease-out"
        count++;
        yt.style.transform=`translateX(${-1*count*mover}px)`;
    
    
    
    
    
})
x.addEventListener("click",()=>{
    
    console.log("Hello")
    let mover=window.innerWidth;
    var yt=document.querySelector('.images');
    
    if(count<=0)
    {
       return;
    }
    
   
        yt.style.transition="0.2s ease-out"
        count--;
        yt.style.transform=`translateX(${-1*count*mover}px)`;
   
    
    
})
var moved=window.innerWidth;
yt.addEventListener("transitionend",()=>{
    if(size[count].id=="lastone"){
        yt.style.transition="none";
        count=size.length-2;
        yt.style.transform=`translateX(${-1*count*moved}px)`;

    }
    if(size[count].id=="firstone"){
        yt.style.transition="none";
        count=size.length-count;
        yt.style.transform=`translateX(${-1*count*moved}px)`;
    }
})
