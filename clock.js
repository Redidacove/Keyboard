 let a;
 let date;
 let time;
 const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
 setInterval(()=>{
     a = new Date();
    let date =a.toLocaleDateString(undefined,options);
    let time=a.getHours()+":"+ a.getMinutes()+":"+a.getSeconds();
    document.getElementById('time').innerHTML=time+" "+date;
 }, 1000);

 let searched = document.getElementById('searchbar');
 let btn= document.getElementById('searchbtn');



//  btn.addEventListener('click',searched(){

//  });
