



function run(){
    var dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    let selector1 = document.querySelector("div#dice1.dice");
    let selector2 = document.querySelector("div#dice2.dice");
    selector1.innerHTML = `<p>Player 1</p><img  class="img" src = "assets/image/${dice1}.png">`;
    selector2.innerHTML = `<p>Player 2</p><img  class="img" src = "assets/image/${dice2}.png">`;
    let winner = document.getElementById("winner");
    if(dice1>dice2){
        winner.innerHTML = "<h3>Player 1 wins</h3>";
    }
    else if(dice1 === dice2){
        winner.innerHTML = "<h3>Draw</h3>";
    }
    else{
        winner.innerHTML = "<h3>Player 2 wins</h3>";
    }
}
