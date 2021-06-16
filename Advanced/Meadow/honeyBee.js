"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced;
(function (Advanced) {
    class HoneyBee extends Advanced.SuperclassBee {
        constructor(_x, _y) {
            super(); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            // console.log("Create Honeybee");
            // this.setRandomStyle();
            this.speed = 0.005;
            this.setRandomFlowerPosition();
            this.setStartPosition();
        }
        // Honigbiene zu dieser Position x,y bewegen 
        move() {
            let xDiff = this.xTarget - this.x + 5; // Blumenmitte
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        // Methode "setStartPosition"
        setStartPosition() {
            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
        }
        // Zufällige Position x,y aus dem Blumenarray 
        setRandomFlowerPosition() {
            let i = Math.round(Math.random() * (Advanced.allFlowers.length - 1));
            this.xTarget = Advanced.allFlowers[i].x;
            this.yTarget = Advanced.allFlowers[i].y;
            console.log(Advanced.allFlowers[i].constructor.name);
        }
    }
    Advanced.HoneyBee = HoneyBee;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=honeyBee.js.map