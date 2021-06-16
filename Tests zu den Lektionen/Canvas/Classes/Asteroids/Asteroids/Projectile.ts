namespace L10_Asteroids { // Namespace bei allen Dateien gleich --> damit sie voneinander wissen
    export class Projectile extends Moveable { // muss exportiert werden, damit man sie auf der anderen Seite (in der Main-Datei) verwenden kann
        // position: Vector;
        velocity: Vector;
        lifetime: number;
        size: number;

        constructor(_position: Vector, _velocity: Vector) { // Konstruktor soll Größe von draußen entgegennehmen --> ? für kann da sein, muss nicht, weil man nicht immer die Position mitgeben will
            console.log("Projectile constructor");

            super(_position); // Subklasse referenziert Superklasse
            this.velocity = _velocity.copy();

        }

        draw(): void {
            // console.log("Asteroid draw");
            crc2.save(); // Aktuelle Transformation
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-1, -1, 1, 1);
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // Lifetime läuft ab

            if (this.lifetime < 0) {
            this.velocity = new Vector(0, 0); // Deine Geschwindigkeit wird auf 0 gesetzt --> dann bleibt das Projectile einfach hängen
            }
            this.expendable = true;
        }

    }
}