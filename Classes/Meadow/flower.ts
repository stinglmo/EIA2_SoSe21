/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/


namespace Meadow {

    export class Flower {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        //Methode draw
        draw(): void {

            let randomFlower: number = Math.floor(Math.random() * 3);

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

        //Methode "drawTulip"   
        drawTulip(): void {

            //Stiel
            crc2.beginPath();
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x + 9, this.y + 28, 3, 40);

            //Blatt
            crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);

            crc2.fill();

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#FF1493";

            crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y + 7);
            crc2.lineTo(this.x + 6, this.y + 14);
            crc2.lineTo(this.x + 10.5, this.y + 4);
            crc2.lineTo(this.x + 15, this.y + 14);
            crc2.lineTo(this.x + 20, this.y + 7);
            crc2.lineTo(this.x + 20, this.y + 21);

            crc2.closePath();
            crc2.fill();
        }
    } // close class

} // close namespace