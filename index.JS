class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        if (this.type === "mage") {
            console.log(`The ${this.type} attacks using Fireball`)
        } 
        else if (this.type === "warrior") {
            console.log(`The ${this.type} attacks using Slash`)
        }
        else if (this.type === "monk") {
            console.log(`The ${this.type} attacks using IronFist`)
        }
        else if (this.type === "ninja") {
            console.log(`The ${this.type} attacks using Shuriken`)
        } 
        else {
            console.log("Choose classes: warrior, mage, monk or ninja ")
        }
    }

}

let player1 = new hero("madarinha", "28", "mage")

player1.attack()
