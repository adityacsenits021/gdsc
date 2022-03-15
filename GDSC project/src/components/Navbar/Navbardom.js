var btns=document.getElementsByClassName("btn");
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click", function() {
        console.log('button is cliccked')
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}