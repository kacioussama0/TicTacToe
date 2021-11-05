 // Start Variables
 let table = document.querySelector('.table');
 let attension = document.querySelector('.alert');
 let n = 0;
 let circle = '<div class="circle"></div>';
 let cross = '<div class="cross"></div>';
 let one = document.querySelector('.case-one');
 let two = document.querySelector('.case-two');
 let three = document.querySelector('.case-three');
 let four = document.querySelector('.case-four');
 let five = document.querySelector('.case-five');
 let six = document.querySelector('.case-six');
 let seven = document.querySelector('.case-seven');
 let eight = document.querySelector('.case-eight');
 let nine = document.querySelector('.case-nine');
 let crossWins = document.querySelector('span.cross-win p');
 let circleWins = document.querySelector('span.circle-win p');
 let Draw = document.querySelector('span.draw p')
 let random = Math.floor(Math.random() * 9)
 let xwin = 0;
 let owin = 0;
 let draw = 0;
 let restart = document.querySelector('#again');
 let winnerPara = document.querySelector('div.win p');
 let start = document.querySelector('button.start');

// End Variables
// Start Function

start.onclick = function() {
  document.querySelector('div.starting').style.display = 'none';
  document.querySelector('div.statistic').style.display = 'flex';
  document.querySelector('div.table').style.display = 'grid';
}
     table.addEventListener('click',(event)=> {
     if(event.target.matches('span')){
         if(event.target.innerHTML == ""){
          if(n%2 == 0){           // X Turn
              event.target.innerHTML = cross;
              n++;
          }
          else { // O Turn
              event.target.innerHTML = circle; 
              n++;
          }
          // Start For Check Winner
  let win = setInterval(()=> {
  if((one.innerHTML == cross && five.innerHTML == cross && nine.innerHTML == cross) || (one.innerHTML == cross && two.innerHTML == cross && three.innerHTML == cross) || (four.innerHTML == cross && five.innerHTML == cross && six.innerHTML == cross) || (seven.innerHTML == cross && eight.innerHTML == cross && nine.innerHTML == cross) || (one.innerHTML == cross && five.innerHTML == cross && nine.innerHTML == cross) || (two.innerHTML == cross && five.innerHTML == cross && eight.innerHTML == cross) || (three.innerHTML == cross && six.innerHTML == cross && nine.innerHTML == cross) || (three.innerHTML == cross && five.innerHTML == cross && seven.innerHTML == cross) || (one.innerHTML == cross && four.innerHTML == cross && seven.innerHTML == cross)) {
      document.querySelector('#winner').play();
      let Win = setTimeout(
          ()=> {
              document.querySelector('div.table').style.display = 'none';
              winnerPara.style.color = '#3989D4';
              document.querySelector('div.win button').style.borderColor = '#3989D4';
              document.querySelector('div.win').style.display = 'flex';
              document.querySelector('div.win span.x').style.display = 'block';
              document.querySelector('div.win span.o').style.display = 'none';
              document.querySelector('div.win span.draw').style.display = 'none';
              document.querySelector('div.win p').innerHTML = 'Winner';
              n = 0;
          }
      ,500);
      xwin++;
      crossWins.innerHTML =  `${xwin} wins`;  
     let clearAll = setTimeout(()=> {
          for(let i = 0 ; i < 9 ; i++){
          document.querySelectorAll('.table span')[i].innerHTML= "";
      }
      clearTimeout(clearAll);
      },500)
         
  }
  else if((one.innerHTML == circle && five.innerHTML == circle && nine.innerHTML == circle) || (one.innerHTML == circle && two.innerHTML == circle && three.innerHTML == circle) || (four.innerHTML == circle && five.innerHTML == circle && six.innerHTML == circle) || (seven.innerHTML == circle && eight.innerHTML == circle && nine.innerHTML == circle) || (one.innerHTML == circle && five.innerHTML == circle && nine.innerHTML == circle) || (two.innerHTML == circle && five.innerHTML == circle && eight.innerHTML == circle) || (three.innerHTML == circle && six.innerHTML == circle && nine.innerHTML == circle) || (three.innerHTML == circle && five.innerHTML == circle && seven.innerHTML == circle) || (one.innerHTML == circle && four.innerHTML == circle && seven.innerHTML == circle)) {
      document.querySelector('#winner').play();
      let Wino = setTimeout(()=> {
          document.querySelector('div.table').style.display = 'none';
              document.querySelector('div.win').style.display = 'flex';
              winnerPara.style.color = '#39BCD4';
              document.querySelector('div.win button').style.borderColor = '#39BCD4';
              document.querySelector('div.win span.x').style.display = 'none';
              document.querySelector('div.win span.o').style.display = 'block';
              document.querySelector('div.win span.draw').style.display = 'none';
              document.querySelector('div.win p').innerHTML = 'Winner';
              n = 0;
      
      
      },500)
      owin++;
      circleWins.innerHTML =  `${owin} wins`;
      setTimeout(()=> {
          for(let i = 0 ; i < 9 ; i++){
          document.querySelectorAll('.table span')[i].innerHTML= "";
      }
 
      },800);
   
  }
  else if (one.innerHTML != '' && four.innerHTML != '' && two.innerHTML != '' && three.innerHTML != '' && five.innerHTML != '' && six.innerHTML != '' && seven.innerHTML != '' && eight.innerHTML != '' && nine.innerHTML != '' ){
          setTimeout(()=>{
              document.querySelector('#round-draw').play();
              let Win = setTimeout(
          ()=> {
              
              document.querySelector('div.table').style.display = 'none';
              document.querySelector('div.win').style.display = 'flex';
              winnerPara.style.color = '#3989D4';
              document.querySelector('div.win button').style.borderColor = '#A4B5B8';
              document.querySelector('div.win span.x').style.display = 'none';
              document.querySelector('div.win span.o').style.display = 'none';
              document.querySelector('div.win p').style.color = '#A4B5B8';
              document.querySelector('div.win p').innerHTML = 'Draw';
              document.querySelector('div.win span.draw').style.display = 'block';
              n = 0;
          }
      ,300);
              draw++;
              Draw.innerHTML =  `${draw} draws`
              for(let i = 0 ; i < 9 ; i++){
          document.querySelectorAll('.table span')[i].innerHTML= "";
          }
          },200)
         
         
      }
       clearInterval(win);
 },10)
 



 restart.onclick = function () {
  document.querySelector('div.table').style.display = 'grid';
  document.querySelector('div.win').style.display = 'none';
 }
 // End Function     
   

     

 
 
 
 
         }}})


 
//    document.querySelector(".turn").style.setProperty('--turn-color', 'green');
