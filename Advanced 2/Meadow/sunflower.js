"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    class Sunflower extends Advanced2.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create Tulpe");
            this.draw();
        }
        //Methode drawSunflower
        // draw vererbt von der Superklasse
        draw() {
            //Stiel
            Advanced2.crc2.beginPath();
            Advanced2.crc2.strokeStyle = "#556B2F";
            Advanced2.crc2.fillStyle = "#556B2F";
            Advanced2.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Blätter
            Advanced2.crc2.lineTo(this.x + 70, this.y + 50); // am Stiel direkt
            Advanced2.crc2.lineTo(this.x + 60, this.y + 50);
            Advanced2.crc2.lineTo(this.x + 70, this.y + 70);
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Blüten
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "#FFD700";
            Advanced2.crc2.moveTo(this.x + 62, this.y + 24);
            Advanced2.crc2.lineTo(this.x + 50, this.y + 15);
            Advanced2.crc2.lineTo(this.x + 60, this.y + 28);
            Advanced2.crc2.lineTo(this.x + 45, this.y + 25);
            Advanced2.crc2.lineTo(this.x + 58, this.y + 33);
            Advanced2.crc2.lineTo(this.x + 48, this.y + 40);
            Advanced2.crc2.lineTo(this.x + 61, this.y + 37);
            Advanced2.crc2.lineTo(this.x + 55, this.y + 50);
            Advanced2.crc2.lineTo(this.x + 65, this.y + 38);
            Advanced2.crc2.lineTo(this.x + 66, this.y + 52);
            Advanced2.crc2.lineTo(this.x + 70, this.y + 39);
            Advanced2.crc2.lineTo(this.x + 76, this.y + 50);
            Advanced2.crc2.lineTo(this.x + 75, this.y + 37);
            Advanced2.crc2.lineTo(this.x + 85, this.y + 45);
            Advanced2.crc2.lineTo(this.x + 78, this.y + 33);
            Advanced2.crc2.lineTo(this.x + 90, this.y + 36);
            Advanced2.crc2.lineTo(this.x + 79, this.y + 28);
            Advanced2.crc2.lineTo(this.x + 92, this.y + 24);
            Advanced2.crc2.lineTo(this.x + 78, this.y + 23);
            Advanced2.crc2.lineTo(this.x + 88, this.y + 14);
            Advanced2.crc2.lineTo(this.x + 75, this.y + 20);
            Advanced2.crc2.lineTo(this.x + 78, this.y + 8);
            Advanced2.crc2.lineTo(this.x + 70, this.y + 20);
            Advanced2.crc2.lineTo(this.x + 69, this.y + 5);
            Advanced2.crc2.lineTo(this.x + 65, this.y + 20);
            Advanced2.crc2.lineTo(this.x + 58, this.y + 8);
            Advanced2.crc2.lineTo(this.x + 62, this.y + 24);
            Advanced2.crc2.fill();
            //Blütenmitte
            Advanced2.crc2.beginPath();
            // Nectarlevel
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 8) {
                Advanced2.crc2.fillStyle = "#2d1c0b";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Advanced2.crc2.fillStyle = "#543415";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Advanced2.crc2.fillStyle = "#7b4c1f";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Advanced2.crc2.fillStyle = "#a1642a";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Advanced2.crc2.fillStyle = "#c87c34";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Advanced2.crc2.fillStyle = "#d49559";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Advanced2.crc2.fillStyle = "#deae80";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Advanced2.crc2.fillStyle = "#e8c7a7";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Advanced2.crc2.fillStyle = "#f2dfce";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Advanced2.crc2.fillStyle = "#fcf8f5";
            }
            Advanced2.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            Advanced2.crc2.closePath();
            Advanced2.crc2.fill();
        }
    }
    Advanced2.Sunflower = Sunflower;
})(Advanced2 || (Advanced2 = {}));
//# sourceMappingURL=sunflower.js.map