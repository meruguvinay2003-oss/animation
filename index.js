let timer=document.getElementById("timer");
let image=document.getElementById("image")
let count=10;
 let bomb=setInterval(()=>{
count--;
timer.innerText="Time Left:0"+count;
if(count<=3){
    timer.style.color="red";
}
if(count==0){
    clearInterval(bomb)
    image.src="https://e7.pngegg.com/pngimages/777/977/png-clipart-explode-game-orange.png"
    timer.innerText="BOMB BLASTED.";

}
},1000)