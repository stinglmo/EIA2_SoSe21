/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Inheritance {
    
    export class Poppy extends SuperclassFlower {
    
        constructor(_x: number, _y: number) {

            super(_x, _y);
            console.log("Create Poppy");
            this.drawPoppy();
           
        }

        //Methode "drawPoppy"
        drawPoppy(): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#556B2F";
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge

            //Blätter 
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 15);
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x - 10, this.y + 20);
            crc2.moveTo(this.x, this.y + 55);
            crc2.lineTo(this.x + 12, this.y + 35);

            crc2.stroke();
            crc2.fill();

            //Blüten
            crc2.beginPath();
            crc2.fillStyle = "#DB2511";

            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);

            crc2.fill();

            //Blütenmitte
            crc2.beginPath();
            crc2.fillStyle = "#3B170B";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }
    }
}