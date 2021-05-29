"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/
var Meadow;
(function (Meadow) {
    class Bee {
        constructor() {
            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
            this.drawBee();
            this.setRandomStyle();
        }
        //Methode "update" - Biene an neuer Position malen 
        update() {
            this.drawBee();
            this.move();
        }
        //Methode "drawBee" - Biene malen
        drawBee() {
            // Körper
            Meadow.crc2.beginPath();
            Meadow.crc2.strokeStyle = "#000000";
            Meadow.crc2.fillStyle = "#000000";
            Meadow.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            Meadow.crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            Meadow.crc2.fill();
            // Auge
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "white";
            Meadow.crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            Meadow.crc2.fill();
            // Fühler 1
            Meadow.crc2.beginPath();
            Meadow.crc2.moveTo(this.x - 5, this.y);
            Meadow.crc2.strokeStyle = "#000000";
            Meadow.crc2.lineWidth = 0.9;
            Meadow.crc2.lineTo(this.x - 10, this.y - 13);
            Meadow.crc2.closePath();
            Meadow.crc2.stroke();
            // Fühler 2
            Meadow.crc2.beginPath();
            Meadow.crc2.moveTo(this.x - 3, this.y - 5);
            Meadow.crc2.strokeStyle = "#000000";
            Meadow.crc2.lineWidth = 0.5;
            Meadow.crc2.lineTo(this.x - 15, this.y - 12);
            Meadow.crc2.closePath();
            Meadow.crc2.stroke();
            if (this.sting == true) {
                Meadow.crc2.moveTo(this.x, this.y);
                Meadow.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else {
                console.log();
            }
            Meadow.crc2.stroke();
            Meadow.crc2.fill();
            //Streifen
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = this.color;
            Meadow.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Meadow.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Meadow.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            Meadow.crc2.stroke();
            Meadow.crc2.fill();
            //Flügel
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#aFEEEE";
            Meadow.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Meadow.crc2.moveTo(this.x, this.y);
            Meadow.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Meadow.crc2.closePath();
            Meadow.crc2.fill();
        }
        //Methode "move" - Biene bewegen
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i = 0; i < Meadow.z; i++) {
                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = Meadow.crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = Meadow.crc2.canvas.height;
                }
                if (this.y >= Meadow.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle() {
            let randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.sting = randomSting;
        }
    } // close class
    Meadow.Bee = Bee;
})(Meadow || (Meadow = {})); // close namespace
//# sourceMappingURL=bee.js.map