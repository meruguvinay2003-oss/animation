let arr=[
    {
        image:"https://mircement.com/blog/wp-content/uploads/2021/08/civil-engineering-methods.jpg",
        text:"CIVIL ENGINEER"
    },
    {
       image:"https://online.maryville.edu/wp-content/uploads/sites/97/2020/07/software-developer-coding.jpg",
        text:"SOFTWARE DEVELOPER"
 
    },
    {
        image:"https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
        text:"DOCTOR"

    },
    {
        image:"https://img.freepik.com/free-photo/beautiful-brunette-woman-singing-microphone-isolated-gray-wall_231208-12884.jpg",
        text:"SINGER"

    },
    {
      image:"https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/aerotek/business-insights/plumbing_career_social-jpg.jpg?h=627&iar=0&w=1200&rev=d535c3705c67442fb68fe4404fae26d1&hash=F08087B1995CDF5F18566FE16998FFB6",
        text:"PLUMBER"

    },
    {
        image:"https://thedemostop.com/blogs/wp-content/uploads/2024/06/famous-modern-dancers-img.jpg",
        text:"DANCER"

    },
    {
        image:"https://static.vecteezy.com/system/resources/previews/051/844/343/non_2x/indian-police-officer-salute-in-uniform-front-view-vector.jpg",
        text:"POLICE"

    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjHD9J7w-J2i57MdLTkN4BtPP0tg5Sd3Iuw&s",
        text:"LAWYER"

    },
    {
        image:"https://img.freepik.com/premium-vector/indian-politician-delivering-speed-election-period-vector-illustration_667085-57.jpg",
        text:"POLITICIAN"
    }
]
let img=document.getElementById("img");
let name=document.getElementById("name");
let heading=document.getElementById("heading");
let button=document.getElementById("button");
let result=document.getElementById("result");




button.onclick=function(){
    if(name.value==""){
      alert("please enter your name");
      return
    } else if(name.value=="swetha"){
        alert("vinay's bestfreind is swetha  do you want know your future goal")
    }
    result.innerHTML="";
    let count=0;
let res=setInterval(()=>{
     let random=Math.floor(Math.random()*arr.length)
    img.src=arr[random].image;
    heading.innerText=arr[random].text;
    count++;
 if(count==50){
       clearInterval(res)
       result.innerText=name.value+" future goal is "+arr[random].text;
       name.value="";
 }
 },100)
 
}



