/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Inheritance {

    export class Sunflower extends SuperclassFlower {


        constructor(_x: number, _y: number) {

            super(_x, _y);
            console.log("Create Tulpe");
            this.drawSunflower();
        }

        //Methode drawSunflower
        drawSunflower(): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#556B2F";
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x + 68, this.y + 30, 3, 55);

            //Blätter
            crc2.lineTo(this.x + 70, this.y + 50); // am Stiel direkt
            crc2.lineTo(this.x + 60, this.y + 50);
            crc2.lineTo(this.x + 70, this.y + 70);

            crc2.stroke();
            crc2.fill();

            //Blüten
            crc2.beginPath();
            crc2.fillStyle = "#FFD700";

            crc2.moveTo(this.x + 62, this.y + 24);
            crc2.lineTo(this.x + 50, this.y + 15);
            crc2.lineTo(this.x + 60, this.y + 28);
            crc2.lineTo(this.x + 45, this.y + 25);
            crc2.lineTo(this.x + 58, this.y + 33);
            crc2.lineTo(this.x + 48, this.y + 40);
            crc2.lineTo(this.x + 61, this.y + 37);
            crc2.lineTo(this.x + 55, this.y + 50);
            crc2.lineTo(this.x + 65, this.y + 38);
            crc2.lineTo(this.x + 66, this.y + 52);
            crc2.lineTo(this.x + 70, this.y + 39);
            crc2.lineTo(this.x + 76, this.y + 50);
            crc2.lineTo(this.x + 75, this.y + 37);
            crc2.lineTo(this.x + 85, this.y + 45);
            crc2.lineTo(this.x + 78, this.y + 33);
            crc2.lineTo(this.x + 90, this.y + 36);
            crc2.lineTo(this.x + 79, this.y + 28);
            crc2.lineTo(this.x + 92, this.y + 24);
            crc2.lineTo(this.x + 78, this.y + 23);
            crc2.lineTo(this.x + 88, this.y + 14);
            crc2.lineTo(this.x + 75, this.y + 20);
            crc2.lineTo(this.x + 78, this.y + 8);
            crc2.lineTo(this.x + 70, this.y + 20);
            crc2.lineTo(this.x + 69, this.y + 5);
            crc2.lineTo(this.x + 65, this.y + 20);
            crc2.lineTo(this.x + 58, this.y + 8);
            crc2.lineTo(this.x + 62, this.y + 24);

            crc2.fill();

            //Blütenmitte
            crc2.beginPath();
            crc2.fillStyle = "#8B4500";

            crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }

    }

}