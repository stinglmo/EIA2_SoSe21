/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Inheritance {

    export class BigCloud extends SuperclassCloud {

        x: number;
        y: number;
        speed: number;

        constructor(x: number, y: number) {
            super(x, y);
            this.moveForward();
            this.drawCloud2();
        }

        // Methode drawCloud 2
        drawCloud2(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

        }


        moveForward(): void {
            this.x += this.speed * (+0.04) ; // - nach links und + nach rechts           
        }

    } // close class
} // close namespace