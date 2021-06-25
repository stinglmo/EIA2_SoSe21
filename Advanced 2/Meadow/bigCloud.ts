/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Advanced2 {

    export class BigCloud extends SuperclassCloud {

        // x: number;
        // y: number;
        // speed: number;

        constructor(x: number, y: number) {
            super(x, y);
            this.moveForward();
            this.drawCloud1();
        }

         // Methode drawCloud 1
         drawCloud1(): void {

            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";

            crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();

            // Klick beim Vogel
            crc2.font = "18px Helvetica";
            crc2.fillStyle = "#3B170B";
            crc2.fillText("click", 1066, 333);
        }


        moveForward(): void {
            this.x += this.speed * (+0.04) ; // - nach links und + nach rechts           
        }

    } // close class
} // close namespace