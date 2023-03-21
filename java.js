'use strict'
let c=0;
let res=0;
let ch=0;
const w=function(){
let a;

if(Number(document.querySelector(y).textContent)>10||Number(document.querySelector(z).textContent>10)){
    document.querySelector('.player').classList.add('hidden');
    document.querySelector('.win').classList.remove('hidden');
    if(z==='.c1') a=1;
else a=2;
    document.querySelector('.wp').textContent=`player ${a} win`;
}
}
document.querySelector('.n').addEventListener('click',function(){
    res=0;
    document.querySelector('.d1').textContent=0;
    document.querySelector('.d2').textContent=0;
    document.querySelector('.c1').textContent=0;
    document.querySelector('.c2').textContent=0;
    document.querySelector('img').classList.add('hidden');
});
let x,y,z;
y='.d1'
z='.c1'
document.querySelector('.h1').addEventListener('click',function(){
    w();
    c=0;
     let sum=Number(document.querySelector(y).textContent)+Number(res);
  document.querySelector(y).textContent=sum;
  document.querySelector('.c1').textContent=0;
  document.querySelector('.c2').textContent=0;
  if(ch===1){
    console.log("ch");
    y='.d1'
    z='.c1'
    ch=0;
    res=0;
}
else{
    console.log("cgt");
    y='.d2';
    z='.c2';
    ch=1;
    res=0;
}
})
const img=document.querySelector('.img');
const inc=function(){
  let c=Math.trunc(Math.random()*6)+1;
   img.src=`image/dice-${c}.png`;
   img.classList.remove('hidden')
   res+=Number(c) ;
   document.querySelector(z).innerHTML=res;
   if(c===1){
    document.querySelector(z).textContent=0;
    c=0;
    res=0;
    }
   
    w();
}
document.querySelector('.r1').addEventListener('click',inc);
document.addEventListener('keydown',function(e){
    if(e.key==="Enter"){
        document.querySelector('.player').classList.remove('hidden');
      
        document.querySelector('.win').classList.add('hidden');
        n();
      }
    }
  )