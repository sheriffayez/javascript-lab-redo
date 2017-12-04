
var player1 = 40;
var player2 = 10;
var playing = true;
var win = 0;

/*code*/

var userResponse = prompt ("do you want to play?")

if (userResponse === yes ){
  
 prompt ("what is you name?")
}

while(playing){
  
 player1 -= MATH.FLOOR(MATH.RANDOM()*2)+1;
 player2 -= MATH.FLOOR(MATH.RANDOM()*2)+1;
  
}

if (player1 <= 0 )
  playing = false;
}

else if (player2 <= 0 ){
  win++;
  player2 = 10;
}


if (win === 3){
  
  console.log("i won")

  playing = false;
}
}