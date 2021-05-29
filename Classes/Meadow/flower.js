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
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Methode draw
        draw() {
            let randomFlower = Math.floor(Math.random() * 3);
            switch (randomFlower) {
                case 0:
                    this.drawSunflower();
                    break;
                case 1:
                    this.drawPoppy();
                    break;
                case 2:
                    this.drawTulip();
                    break;
            }
        }
        //Methode drawSunflower
        drawSunflower() {
            //Stiel
            Meadow.crc2.beginPath();
            Meadow.crc2.strokeStyle = "#556B2F";
            Meadow.crc2.fillStyle = "#556B2F";
            Meadow.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Blätter
            Meadow.crc2.lineTo(this.x + 70, this.y + 50); // am Stiel direkt
            Meadow.crc2.lineTo(this.x + 60, this.y + 50);
            Meadow.crc2.lineTo(this.x + 70, this.y + 70);
            Meadow.crc2.stroke();
            Meadow.crc2.fill();
            //Blüten
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#FFD700";
            Meadow.crc2.moveTo(this.x + 62, this.y + 24);
            Meadow.crc2.lineTo(this.x + 50, this.y + 15);
            Meadow.crc2.lineTo(this.x + 60, this.y + 28);
            Meadow.crc2.lineTo(this.x + 45, this.y + 25);
            Meadow.crc2.lineTo(this.x + 58, this.y + 33);
            Meadow.crc2.lineTo(this.x + 48, this.y + 40);
            Meadow.crc2.lineTo(this.x + 61, this.y + 37);
            Meadow.crc2.lineTo(this.x + 55, this.y + 50);
            Meadow.crc2.lineTo(this.x + 65, this.y + 38);
            Meadow.crc2.lineTo(this.x + 66, this.y + 52);
            Meadow.crc2.lineTo(this.x + 70, this.y + 39);
            Meadow.crc2.lineTo(this.x + 76, this.y + 50);
            Meadow.crc2.lineTo(this.x + 75, this.y + 37);
            Meadow.crc2.lineTo(this.x + 85, this.y + 45);
            Meadow.crc2.lineTo(this.x + 78, this.y + 33);
            Meadow.crc2.lineTo(this.x + 90, this.y + 36);
            Meadow.crc2.lineTo(this.x + 79, this.y + 28);
            Meadow.crc2.lineTo(this.x + 92, this.y + 24);
            Meadow.crc2.lineTo(this.x + 78, this.y + 23);
            Meadow.crc2.lineTo(this.x + 88, this.y + 14);
            Meadow.crc2.lineTo(this.x + 75, this.y + 20);
            Meadow.crc2.lineTo(this.x + 78, this.y + 8);
            Meadow.crc2.lineTo(this.x + 70, this.y + 20);
            Meadow.crc2.lineTo(this.x + 69, this.y + 5);
            Meadow.crc2.lineTo(this.x + 65, this.y + 20);
            Meadow.crc2.lineTo(this.x + 58, this.y + 8);
            Meadow.crc2.lineTo(this.x + 62, this.y + 24);
            Meadow.crc2.fill();
            //Blütenmitte
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#8B4500";
            Meadow.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            Meadow.crc2.closePath();
            Meadow.crc2.fill();
        }
        //Methode "drawPoppy"
        drawPoppy() {
            //Stiel
            Meadow.crc2.beginPath();
            Meadow.crc2.strokeStyle = "#556B2F";
            Meadow.crc2.fillStyle = "#556B2F";
            Meadow.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            Meadow.crc2.moveTo(this.x, this.y + 30);
            Meadow.crc2.lineTo(this.x + 10, this.y + 15);
            Meadow.crc2.moveTo(this.x, this.y + 40);
            Meadow.crc2.lineTo(this.x - 10, this.y + 20);
            Meadow.crc2.moveTo(this.x, this.y + 55);
            Meadow.crc2.lineTo(this.x + 12, this.y + 35);
            Meadow.crc2.stroke();
            Meadow.crc2.fill();
            //Blüten
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#DB2511";
            Meadow.crc2.moveTo(this.x, this.y);
            Meadow.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            Meadow.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            Meadow.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            Meadow.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            Meadow.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            Meadow.crc2.fill();
            //Blütenmitte
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#3B170B";
            Meadow.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Meadow.crc2.closePath();
            Meadow.crc2.fill();
        }
        //Methode "drawTulip"   
        drawTulip() {
            //Stiel
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#556B2F";
            Meadow.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Meadow.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Meadow.crc2.fill();
            //Blüte
            Meadow.crc2.beginPath();
            Meadow.crc2.fillStyle = "#FF1493";
            Meadow.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            Meadow.crc2.moveTo(this.x, this.y + 22);
            Meadow.crc2.lineTo(this.x, this.y + 7);
            Meadow.crc2.lineTo(this.x + 6, this.y + 14);
            Meadow.crc2.lineTo(this.x + 10.5, this.y + 4);
            Meadow.crc2.lineTo(this.x + 15, this.y + 14);
            Meadow.crc2.lineTo(this.x + 20, this.y + 7);
            Meadow.crc2.lineTo(this.x + 20, this.y + 21);
            Meadow.crc2.closePath();
            Meadow.crc2.fill();
        }
    } // close class
    Meadow.Flower = Flower;
})(Meadow || (Meadow = {})); // close namespace
//# sourceMappingURL=flower.js.map