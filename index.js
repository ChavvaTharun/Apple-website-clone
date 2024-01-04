// Header Modal

function modal1(i,j){
  // document.getElementsByClassName('modal-content-box')[i].style.height='100%';

  document.getElementsByClassName('modal')[i].style.display='block';
  document.getElementsByClassName('modal')[i].style.overflow='visible';
  document.getElementsByClassName('modal')[i].style.left='-200'-j+'px';
}
function modal2(i){
  document.getElementsByClassName('modal')[i].style.display='none';
  document.getElementsByClassName('modal')[i].style.overflow='hidden';

}

 document.getElementsByClassName('tool-tip')[0].onmouseover=function()
 {
   modal1(0,0);
  }
 document.getElementsByClassName('tool-tip')[0].onmouseleave=function()
 {
   modal2(0);
  }

  document.getElementsByClassName('tool-tip')[1].onmouseover=function()
  {
    // document.getElementsByClassName('modal')[1].style.left='-260px';
   modal1(1,60);
   }
  
  document.getElementsByClassName('tool-tip')[1].onmouseleave=function()
  {
    modal2(1);
   }

   document.getElementsByClassName('tool-tip')[2].onmouseover=function()
   {
    // document.getElementsByClassName('modal')[2].style.left='-320px';
    modal1(2,120);
    }
   
   document.getElementsByClassName('tool-tip')[2].onmouseleave=function()
   {
     modal2(2);
    }

  document.getElementsByClassName('tool-tip')[3].onmouseover=function()
  {
    // document.getElementsByClassName('modal')[3].style.left='-380px';

   modal1(3,180);
   }
  
  document.getElementsByClassName('tool-tip')[3].onmouseleave=function()
  {
    modal2(3);
   }

   document.getElementsByClassName('tool-tip')[4].onmouseover=function()
   {
    modal1(4,250);
    }
   
   document.getElementsByClassName('tool-tip')[4].onmouseleave=function()
   {
     modal2(4);
    }

    document.getElementsByClassName('tool-tip')[5].onmouseover=function()
    {
     modal1(5,390);
     }
    
    document.getElementsByClassName('tool-tip')[5].onmouseleave=function()
    {
      modal2(5);
     }

     document.getElementsByClassName('tool-tip')[6].onmouseover=function()
     {
      modal1(6,470);
      }
     
     document.getElementsByClassName('tool-tip')[6].onmouseleave=function()
     {
       modal2(6);
      }

    document.getElementsByClassName('tool-tip')[7].onmouseover=function()
    {
      modal1(7,570);
    }
    
    document.getElementsByClassName('tool-tip')[7].onmouseleave=function()
    {
      modal2(7);
    }

    document.getElementsByClassName('tool-tip')[8].onmouseover=function()
   {
    modal1(8,690);
    }
   
    document.getElementsByClassName('tool-tip')[8].onmouseleave=function()
   {
     modal2(8);
    }


    document.getElementsByClassName('tool-tip')[9].onmouseover=function()
    {
     modal1(9,800);
     }
    
    document.getElementsByClassName('tool-tip')[9].onmouseleave=function()
    {
      modal2(9);
     }

  
    






// Carousel

let ml=100;
let slider= setInterval(()=>{
  document.getElementById('carousel').style.marginLeft=-ml+'%';
  document.getElementById('carousel').style.transition='1s';
  // document.getElementById('c2div').style.backgroundColor='black';
  // document.getElementById('c2div').style.transition='.8s';
  // setTimeout(()=>{
  //   document.getElementById('c2div').style.backgroundColor='white';
  // },2000)

  if(ml==1000)
  {
    setTimeout(()=>{
      ml=100;
      document.getElementById('carousel').style.transition='0s'
      document.getElementById('carousel').style.marginLeft='0';
    },800)
  }
  ml+=100;
},2000)


// setInterval(()=>{
//   document.getElementById('c2div').style.backgroundColor='black';
// // },2000)

