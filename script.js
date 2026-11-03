function nextScreen(number){
  let screens = document.querySelectorAll(".screen");
  screens.forEach(screen => { screen.style.display = "none"; });
  document.getElementById("screen"+number).style.display = "flex";

  // Start music on first interaction (screen 2)
  if(number === 2){
    let music = document.getElementById("music");
    if(music.paused){
      music.play();  // starts the looped music
    }
    startBananas(); // start banana rain
  }

  // Monkey confetti
  if(number === 3){
    confetti();
  }
}

/* Cake blowing candles triggers dark + final screens */
function blowCandles(){
  nextScreen(7); // dark screen first
  setTimeout(()=>{
    nextScreen(8); // final birthday message
  }, 2500);
}

/* Falling bananas */
function startBananas(){
  setInterval(()=>{
    let banana = document.createElement("div");
    banana.classList.add("falling-banana");
    banana.style.left = Math.random()*100 + "vw";
    banana.innerText = "🍌";
    document.body.appendChild(banana);
    setTimeout(()=>banana.remove(),4000);
  },300);
}

/* Confetti */
function confetti(){
  for(let i=0;i<50;i++){
    let piece = document.createElement("div");
    piece.className = "falling-banana";
    piece.innerText = "🎊";
    piece.style.left = Math.random()*100+"vw";
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(),4000);
  }
}
