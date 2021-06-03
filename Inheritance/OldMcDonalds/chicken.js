"use strict";
var OMD;
(function (OMD) {
    class Chicken extends OMD.Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.layingEggs();
        }
        layingEggs() {
            console.log("The Chicken lay eggs");
        }
    }
    OMD.Chicken = Chicken;
})(OMD || (OMD = {}));
//# sourceMappingURL=chicken.js.map