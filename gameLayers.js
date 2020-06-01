/// <reference path="./p5.global-mode.d.ts" />

function ObjectLayer() {
    this.objects = [];

    this.update = function(){
            for (var i = 0; i < this.objects.length; i++) {
                this.objects[i].update();
            }
    }

    this.Draw = function(){
        if (gameStart && gameEnd != true) {
            for (var i = 0; i < this.objects.length; i++) {
                this.objects[i].Draw();
            }
        }
    }
}

function BackgroundLayer() {
    this.objects = [];

   /* this.backgroundUpdate = function() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].backgroundUpdate();
        }
    }*/

    this.Draw = function() {

        if (gameStart && gameEnd != true) {
            for (var i = 0; i < this.objects.length; i++) {
                this.objects[i].Draw();
            }
        }
    
    }

}

function ScreenLayer() {
    this.objects = [];

    this.update = function() {
        for(var i=0; i < this.objects.length; i++) {
            if (this.objects[i].update != null) {       //only run update function if it exists
                this.objects[i].update();
            }
        }
    }

    this.Draw = function() {
        for(var i=0; i < this.objects.length; i++) {
            this.objects[i].Draw();
        }
    }
}