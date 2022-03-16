console.log("Hello");
var x=document.querySelector('#prev');
var y=document.querySelector('#ahead');
let count=0;
let size=document.querySelectorAll('.image');

y.addEventListener("click",()=>{
    console.log(size.length);
    console.log(count);
    count++;
    let mover=window.innerWidth; var yt=document.querySelector('.images');
    
    if(count>=size.length-1)
    {
        yt.style.transition="0.2s ease-out"
       
        yt.style.transform=`translateX(${-1*count*mover}px)`;
        count++;
        yt.style.transition="none";
        yt.style.transform=`translateX(${-1*(0)*mover}px)`;
        count=0;
    }
    else{
        yt.style.transition="0.2s ease-out"
       
        yt.style.transform=`translateX(${-1*count*mover}px)`;
    }
    
    
    
    
})
x.addEventListener("click",()=>{
    
    console.log("Hello")
    let mover=window.innerWidth;
    var yt=document.querySelector('.images');
    count--;
    if(count<=0)
    {
        yt.style.transition="0.2s ease-out"
        yt.style.transform=`translateX(${-1*count*mover}px)`;
        count--;
        yt.style.transition="none";
        yt.style.transform=`translateX(${-1*(size.length-1)*mover}px)`;
        count=size.length-1;
        return;

       
    }
    else{
        yt.style.transition="0.2s ease-out"
        yt.style.transform=`translateX(${-1*count*mover}px)`;
    }
  
    
    
})
