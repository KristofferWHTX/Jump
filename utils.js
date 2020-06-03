/// <reference path="./p5.global-mode.d.ts" />

function spawner (){

    if (gameEnd || gameStart == false) { //reset spawner when game ends
        this.startspwn = false; 
        this.spawnRate = spawnRate;
        for (var i = 0; i <enemiesList.length; i++) {
            enemiesList[i].ypos = height *2; //place current enemies outside screen
        }
    }

    //-t * log(r)  poisson distribution/process  r = rand 0-1    t = avg time between arrivals, 1 = 0.1 secs
   this.r = random();

   this.spawnRand = random(0, 31);
   if (this.spawnRand >= this.spawnRate) {
       if (this.spawnRand >= this.spawnRate + 13) {
           this.enemyType = 3;
            if (this.spawnRand >= this.spawnRate + 22) {
                this.enemyType = 4;
            }
       }
       else {
           this.enemyType = 2;
       }
   }
   else {
       this.enemyType = 1;
   }

 
    if (this.spawnRate <= 5) { // makes sure spawnrate doesnt get too low
        this.spawnRate = 6;
    }


    if ((this.startspwn == true && this.runTime != timerVal) || (timerVal == 20 && this.startspwn != true)) {
        this.runTime = timerVal;
        this.startspwn = true;
        if (timerVal == this.lastSpwnTime + this.spwnTime || timerVal == 20){ //if the current timer value is equal to last spawn time + time until next spawn

            enemiesList.push(new Enemy(this.enemyType)); //add the new enemy to array
            this.lastSpwnTime = timerVal;             // set spawntime to current timer value
            this.spwnTime =  round(this.spawnRate * -1 * log(this.r)) +1;    //calculate time until next spawn
            this.spawnRate = this.spawnRate * 0.97; // spawns faster after some spawns

            if (this.spwnTime >= 50)  {  //Spawn time max 5 seconds
                this.spwnTime = 50;
            }
            if (this.spawnRate >= 25) {
                if (this.spwnTime <= 10) { //if spawntime is less one second before spawnrate is below 25, it will be 2 seconds
                    this.spwnTime = 20;
            }

            }
            if (this.spawnRate <= 25) {
                if (this.spwnTime >= 30)  { 
                    this.spwnTime = 30;
                }
                if (this.spawnRate <= 17){
                    if (this.spwnTime >= 20) {
                        this.spwnTime = 20;
                    }
                }

            }

            console.log("spawnRate   " + this.spawnRate);
            console.log("lastspw:  " + this.lastSpwnTime );
            console.log("spwnTime:  "+ this.spwnTime);
            console.log(enemiesList);

        }
    }



    //check if enemy is dead, (outside screen) and splice from array.
    for (var i = 0; i <enemiesList.length; i++) {
        if (enemiesList[i].xpos < -200 || enemiesList[i].xpos > width + 200) {
            enemiesList.splice(i, 1);
            continue;
        }
        if (enemiesList[i].ypos > height + enemiesList[i].diam) {
            enemiesList.splice(i, 1);
        }
    }


}




function pointText(streak, value) { //create new point text.
    if (this.textVal != null) {
        delete this.textVal;
    }
    this.textVal = new PointText(streak, value);


}