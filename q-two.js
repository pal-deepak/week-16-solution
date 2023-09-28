 let time=2;
 const countdown=setInterval(()=>
{
   console.log(`Time is remaining  : ${time-1} second`)
   time--;
   if(time==0)
   {
    clearInterval(countdown)
    console.log(` Random num is :${Math.random()}`);
   }
  

},1000)