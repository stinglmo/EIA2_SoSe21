"use strict";
var OMD;
(function (OMD) {
    class Horse extends OMD.Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.springingHigh();
        }
        springingHigh() {
            console.log("The Horse can spring high");
        }
    }
    OMD.Horse = Horse;
})(OMD || (OMD = {}));
//# sourceMappingURL=horse.js.map