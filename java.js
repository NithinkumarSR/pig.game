'use strict'
let c=0;
let res=0;
let ch=0;

 const n=function(){
    res=0;
    document.querySelector('.d1').textContent=0;
    document.querySelector('.d2').textContent=0;
    document.querySelector('.c1').textContent=0;
    document.querySelector('.c2').textContent=0;
    document.querySelector('img').classList.add('hidden');
};
document.querySelector('.n').addEventListener('click',n);
let x,y,z;
y='.d1'
z='.c1'
const w=function(){
    if(Number(document.querySelector('.d1').textContent)>10){
        document.querySelector('.wp').textContent=`player 1 win`;
        document.querySelector('.player').classList.add('hidden');
        document.querySelector('.win').classList.remove('hidden');
    }
    if(Number(document.querySelector('.d2').textContent>10)){
        document.querySelector('.wp').textContent=`player 2 win`;
    
        document.querySelector('.player').classList.add('hidden');
        document.querySelector('.win').classList.remove('hidden');
    }
}  
   const chance= function(){
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
   } 
document.querySelector('.h1').addEventListener('click',function(){
  
    c=0;
     let sum=Number(document.querySelector(y).textContent)+Number(res);
  document.querySelector(y).textContent=sum;
  document.querySelector('.c1').textContent=0;
  document.querySelector('.c2').textContent=0;
  
w();
})
const img=document.querySelector('.img');
const inc=function(){
  let c=Math.trunc(Math.random()*6)+1;
   img.src=`/image/dice-${c}.png`;
   res+=Number(c) ;
   w();
   img.classList.remove('hidden');
   document.querySelector(z).innerHTML=res;
   if(c===1){
    document.querySelector(z).textContent=0;
    c=0;
    res=0;
    chance();
    }

}
document.querySelector('.r1').addEventListener('click',inc);
document.addEventListener('keydown',function(e){
    if(e.key==="Enter"){
        document.querySelector('.win').classList.add('hidden');
        document.querySelector('.player').classList.remove('hidden');
        
       n();
      }
    }
  )