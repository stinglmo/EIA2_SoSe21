namespace L10_Asteroids { // Namespace bei allen Dateien gleich --> damit sie voneinander wissen
    export class Moveable { // muss exportiert werden, damit man sie auf der anderen Seite (in der Main-Datei) verwenden kann
        position: Vector;
        velocity: Vector;
        expendable: boolean = false; // wenn true --> Projectile ist verzichtbar, kann also gelöscht werden

        constructor(_position?: Vector) { 
            // console.log("Moveable constructor");

            if (_position) // hast du die Position bekommen, nimm sie,
                // this.position = new Vector(_position.x, _position.y);  
                this.position = _position.copy(); // von _position die Kopie aufrufen --> neuer Vektor, jeder der kleinen Asteroiden bekommt eine Kopie (Kopie kann unabhängig verändert werden)

                // Man kann Objekte nicht gleichsetzen. Kleine Asteroiden (?) hält die Referenz auf ein Speicherobjekt welches etwas enthält
                // Referenzieren gleichen Positionsvektor?

                // POSITION IST REFERENZ AUF EIN OBJEKT, damit sie sich unabhängig voneinander verändern können...

                else // ansonsten nehme die Position 0,0
                this.position = new Vector(0, 0); // Position ist ein neuer Vektor
                
            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            // console.log("Asteroid move");
            let offset: Vector = this.velocity.copy(); // das Stückchen Weg was er gehen soll = neuer Vektor
            offset.scale(_timeslice);
            this.position.add(offset);

            // Wenn die Position den Canvas verlässt:
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width; // wenn kleiner als 0, dann auf Position x die Canvas-Breite draufrechnen!
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
                // ansonsten abziehen:
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            // console.log("Asteroid draw");
        }
    }
}