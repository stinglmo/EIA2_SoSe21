"use strict";
var TestM;
(function (TestM) {
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    } // close class
    TestM.SuperclassFlower = SuperclassFlower;
})(TestM || (TestM = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map