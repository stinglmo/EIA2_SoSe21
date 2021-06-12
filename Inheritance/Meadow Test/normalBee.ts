namespace TestM {

    export class NormalBee extends SuperclassBee {

        constructor(_x: number, _y: number) {

            super(_x, _y);
            console.log("Create normalBee");
            this.setRandomStyle();
        }
    }
}