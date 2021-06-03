"use strict";
var OMD;
(function (OMD) {
    class Pig extends OMD.Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.eatMuch();
        }
        eatMuch() {
            console.log("The pig eats much!");
        }
    }
    OMD.Pig = Pig;
})(OMD || (OMD = {}));
//# sourceMappingURL=pig.js.map