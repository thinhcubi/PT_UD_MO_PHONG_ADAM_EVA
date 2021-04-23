class Apple {
    constructor(Weight) {
        this.Weight = Weight;
    }

    getWeight() {
        return this.Weight;
    }

    appleDecrease() {
         this.Weight--;

    }
}


class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    setGender(gender) {
        this.gender = gender;

    }

    isMale() {
        this.gender();
        return this.gender = true;
    }

    checkApple(apple) {
    if (apple.getWeight()===0){
        console.log('het tao')
    }
    }

    Eat(apple) {
        apple.appleDecrease();
        this.weight ++;

    }

    Say(str) {
        console.log(str);
    }

    getName() {
        return this.name
    }

    getWeight() {
        return this.weight
    }


}
