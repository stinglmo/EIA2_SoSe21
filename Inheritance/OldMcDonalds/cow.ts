namespace OMD {

    export class Cow extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) {

            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.givingMilk();
            
        }

        givingMilk(): void {
            console.log("The Cow give milk");
            
        }

    }
}