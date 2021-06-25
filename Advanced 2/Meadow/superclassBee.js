"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 24.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    class SuperclassBee {
        constructor(_x, _y) {
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.setRandomSpeed();
            this.x = _x; // Ausgang des Bienenstocks
            this.y = _y;
            this.draw();
            this.setRandomStyle();
        }
        //Methode "update" - Biene an neuer Position malen 
        update() {
            this.move();
            this.draw();
        }
        //Methode "move" - Biene bewegen
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            // let direction: number = 
            // if (this.direction < 0) {
            //     crc2.scale(-1, 1);
            // }
            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i = 0; i < 15; i++) {
                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = Advanced2.crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = Advanced2.crc2.canvas.height;
                }
                if (this.y >= Advanced2.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        setRandomSpeed() {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle() {
            let randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.sting = randomSting;
        }
    } // close class
    Advanced2.SuperclassBee = SuperclassBee;
})(Advanced2 || (Advanced2 = {})); // close namespace
//# sourceMappingURL=superclassBee.js.map