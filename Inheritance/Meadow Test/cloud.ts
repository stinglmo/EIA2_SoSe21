/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/

namespace TestM {

    export class Cloud {

        x: number;
        y: number;
        speed: number;

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

            crc2.font = "18px Helvetica";
            crc2.fillStyle = "#3B170B";
            crc2.fillText("click", 1066, 333);
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
            this.x += this.speed * (+0.5) ; // - nach links und + nach rechts           
        }

    } // close class
} // close namespace