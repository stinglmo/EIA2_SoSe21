"use strict";
var OMD;
(function (OMD) {
    class Cow extends OMD.Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.givingMilk();
        }
        givingMilk() {
            console.log("The Cow give milk");
        }
    }
    OMD.Cow = Cow;
})(OMD || (OMD = {}));
//# sourceMappingURL=cow.js.map