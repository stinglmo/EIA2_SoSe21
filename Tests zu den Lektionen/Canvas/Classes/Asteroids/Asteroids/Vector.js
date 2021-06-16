"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        // Ein Vektor mit zufälliger Richtung in einem bestimmten Längenbereich
        static getRandom(_minLength, _maxLenght) {
            let vector = new Vector(0, 0);
            let lenght = _minLength + Math.random() * (_maxLenght - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(lenght);
            return vector;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            let clone = new Vector(this.x, this.y);
            return (clone);
        }
    }
    L10_Asteroids.Vector = Vector;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Vector.js.map