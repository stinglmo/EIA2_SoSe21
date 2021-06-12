"use strict";
var TestM;
(function (TestM) {
    class NormalBee extends TestM.SuperclassBee {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create normalBee");
            this.setRandomStyle();
        }
    }
    TestM.NormalBee = NormalBee;
})(TestM || (TestM = {}));
//# sourceMappingURL=normalBee.js.map