"use strict";
var OMD;
(function (OMD) {
    class Animal {
        constructor(_name, _food, _foodAmount, _sound, _specialAction) {
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
            this.specialAction = _specialAction;
        }
        eat() {
            if (this.food == "Grass") {
                OMD.grassStorage -= this.foodAmount;
            }
            else if (this.food == "Grains") {
                OMD.grainsStorage -= this.foodAmount;
            }
            else if (this.food == "Meat") {
                OMD.meatStorage -= this.foodAmount;
            }
            else if (this.food == "Junk") {
                OMD.junkStorage -= this.foodAmount;
            }
            else if (this.food == "Straw") {
                OMD.strawStorage -= this.foodAmount;
            }
        }
        sing() {
            let song = document.createElement("div");
            song.classList.add("songDiv");
            song.innerHTML = "<h3>" + this.name + "</h3><p>Old MacDonald had a farm Ee i ee i o<br>And on his farm he had some "
                + this.name + "s<br> Ee i ee i oh<br>With a " + this.sound + "-" + this.sound + " here<br>And a " + this.sound + "-"
                + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + "<br> Everywhere a " + this.sound + "-"
                + this.sound + "<br>Old MacDonald had a farm<br>Ee i ee i o.</p>";
            document.body.appendChild(song);
        }
        doSpecialAction() {
            let action = document.createElement("div");
            action.classList.add("actionDiv");
            action.innerHTML = "<p>The special Action of the " + this.name + " <br>is beside eating " + this.food + "<br>and making " + this.sound + " <br>--> " + this.specialAction;
            document.body.appendChild(action);
        }
    }
    OMD.Animal = Animal;
})(OMD || (OMD = {}));
//# sourceMappingURL=SuperclassAnimal.js.map