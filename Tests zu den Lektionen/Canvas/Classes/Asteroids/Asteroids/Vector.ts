namespace L10_Asteroids { // erst public, dann privat
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public static getDifference(_v0: Vector, _v1: Vector): Vector {
            return new Vector (_v0.x - _v1.x, _v0.y - _v1.y);
        }

        // Ein Vektor mit zufälliger Richtung in einem bestimmten Längenbereich
        public static getRandom(_minLength: number, _maxLenght: number): Vector {
            let vector: Vector = new Vector(0, 0);
            let lenght: number = _minLength + Math.random() * (_maxLenght - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(lenght);
            return vector;
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector { // Neuer Vektor der zurückgegeben wird
            let clone: Vector = new Vector(this.x, this.y);
            return(clone);
        }

        
       
    }
}
