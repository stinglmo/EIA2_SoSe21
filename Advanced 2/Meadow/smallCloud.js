"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    class SmallCloud extends Advanced2.SuperclassCloud {
        // x: number;
        // y: number;
        // speed: number;
        constructor(x, y) {
            super(x, y);
            this.moveForward2();
            this.drawCloud2();
        }
        moveForward2() {
            this.x += this.speed * (+0.05); // - nach links und + nach rechts           
        }
        // Methode drawCloud 2
        drawCloud2() {
            Advanced2.crc2.beginPath();
            Advanced2.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            Advanced2.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            Advanced2.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            Advanced2.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            Advanced2.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            Advanced2.crc2.closePath();
            Advanced2.crc2.fillStyle = "#FFFFFF";
            Advanced2.crc2.fill();
        }
    }
    Advanced2.SmallCloud = SmallCloud;
})(Advanced2 || (Advanced2 = {}));
//# sourceMappingURL=smallCloud.js.map