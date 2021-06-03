"use strict";
var OMD;
(function (OMD) {
    class Dog extends OMD.Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            super(_name, _food, _foodAmount, _sound, _specialAction); //Platzhalter für Superklasse - pendant zu this
            this.catchingSticks();
        }
        catchingSticks() {
            console.log("The dog is catching sticks");
        }
    }
    OMD.Dog = Dog;
})(OMD || (OMD = {}));
//# sourceMappingURL=dog.js.map