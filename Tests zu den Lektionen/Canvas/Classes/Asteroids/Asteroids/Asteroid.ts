
namespace L09_Asteroids { // Namespace bei allen Dateien gleich --> damit sie voneinander wissen
    export class Asteroid { // muss exportiert werden, damit man sie auf der anderen Seite (in der Main-Datei) verwenden kann
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) { // Konstruktor soll Größe von draußen entgegennehmen
            console.log("Asteroid constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0); // Position ist ein neuer Vektor
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200); // Bei größeren Screen langsamer

            this.type = Math.floor(Math.random() * 4); // Einer von vier Typen (Pfade im Array --> mit index drauf zugreifen)
            this.size = _size;
        }

        move(_timeslice: number): void {
            // console.log("Asteroid move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y); // das Stückchen Weg was er gehen soll = neuer Vektor
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
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size); // in die Horizontale und Verticale
            crc2.translate(-50, -50); // Koordinatenverschiebung, damit er von außerhalb kommt
            crc2.stroke(asteroidPaths[this.type]); // An den Pfad rankommen --> in der path-Datei
            crc2.restore();
        }

        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 50 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}