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
    class SmallCloud extends Advanced.SuperclassCloud {
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
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            Advanced.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            Advanced.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            Advanced.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fillStyle = "#FFFFFF";
            Advanced.crc2.fill();
        }
    }
    Advanced.SmallCloud = SmallCloud;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=smallCloud.js.map