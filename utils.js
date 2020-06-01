/// <reference path="./p5.global-mode.d.ts" />

function spawner (){

    if (gameEnd || gameStart == false) { //reset spawner when game ends
        this.startspwn = false; 
        this.spawnRate = spawnRate;
    }

    //-t * log(r)  poisson distribution/process  r = rand 0-1    t = avg time between arrivals, 1 = 0.1 secs
   this.r = random();

   this.spawnRand = random();
   if (this.spawnRand >= 0.75) {// temp
       this.enemyType = 3;
   }
   else {
       this.enemyType = 1;
   }

 
    if (this.spawnRate <= 7) { // makes sure spawnrate doesnt get too low
        this.spawnRate = 7;
    }


   /* if (timerVal == 20 && this.startspwn != true) { //start spawning after 2 seconds
        this.startspwn = true;
        enemiesList.push(new Enemy(1));
        this.lastSpwnTime = timerVal;
        this.spwnTime =  round(this.spawnRate * -1 * log(this.r)) +1;

        console.log("lastspw  " + this.lastSpwnTime );
        console.log("spwnTime  "+ this.spwnTime);
        console.log(enemiesList);
    }*/

    if ((this.startspwn == true && this.runTime != timerVal) || (timerVal == 20 && this.startspwn != true)) {
        this.runTime = timerVal;
        this.startspwn = true;
        if (timerVal == this.lastSpwnTime + this.spwnTime || timerVal == 20){ //if the current timer value is equal to last spawn time + time until next spawn

            enemiesList.push(new Enemy(this.enemyType)); //add the new enemy to array
            this.lastSpwnTime = timerVal;             // set spawntime to current timer value
            this.spwnTime =  round(this.spawnRate * -1 * log(this.r)) +1;    //calculate time until next spawn
            this.spawnRate = this.spawnRate * 0.98; // spawns faster after some spawns



            console.log("spawnRate   " + this.spawnRate);
            console.log("lastspw:  " + this.lastSpwnTime );
            console.log("spwnTime:  "+ this.spwnTime);
            console.log(enemiesList);

        }
    }
    if (this.spwnTime >= 50)  {  //Spawn time max 5 seconds
        this.spwnTime = 50;
    }
    if (this.spwnTime <= 5) { //if spawntime is less that half a second, it will be 1 second
        this.spwnTime = 10;
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