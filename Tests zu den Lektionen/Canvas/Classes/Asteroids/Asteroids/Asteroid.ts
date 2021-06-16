
namespace L10_Asteroids { // Namespace bei allen Dateien gleich --> damit sie voneinander wissen
    export class Asteroid extends Moveable { // muss exportiert werden, damit man sie auf der anderen Seite (in der Main-Datei) verwenden kann
        
        // Erst öffentlichen Eigenschaften schreiben
        public size: number;
        private type: number;
        

        constructor(_size: number, _position?: Vector) { // Konstruktor soll Größe von draußen entgegennehmen --> ? für kann da sein, muss nicht, weil man nicht immer die Position mitgeben will
            console.log("Asteroid constructor");

            super(_position); // Subklasse referenziert Superklasse
                
            this.velocity = Vector.getRandom(100, 200); // zufälliger Vector mit zufälliger Richtung
        
            this.type = Math.floor(Math.random() * 4); // Einer von vier Typen (Pfade im Array --> mit index drauf zugreifen)
            this.size = _size;
        }

        public draw(): void {
            // console.log("Asteroid draw");
            crc2.save(); // Aktuelle Transformation
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size); // in die Horizontale und Verticale --> Koordinatensystem wird kleiner gemacht
            crc2.translate(-50, -50); // Koordinatenverschiebung, damit der Asteroid von außerhalb kommt
            crc2.lineWidth = linewidth / this.size; // Linienstärke wird angepasst!!!
            crc2.stroke(asteroidPaths[this.type]); // An den Pfad rankommen --> in der path-Datei
            crc2.restore();
        }

        // "Gehirnzellen" --> Prüfe über einen Hotspot
        // Methode soll immer eine Aktivität beschreiben und wenn es eine Prüfung ist, ist es geschickt, wenn es mit "is" anfängt
        public isHit(_hotspot: Vector): boolean { // wenn getroffen ist der Wert von isHit == true
            let hitsize: number = 50 * this.size; // wird kleiner, je kleiner der Asteroid ist 
            // Trefferkasten: Mitte des Asteroids und Kasten um Asteroid... Frage: Überschreitet die Differenz eine bestimmte Größe?
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); // Betrag (negative nicht beachten) --> abs = absolute Wert, ohne Vorzeichen
            // --> sowohl vertikale als auch horizontale Differenz
        }
    }
}