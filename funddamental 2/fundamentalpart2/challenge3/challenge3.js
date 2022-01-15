const Mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI;
    }
};

const Johan = {
    fullName: "Johan Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return;
    }
};

Mark.calcBMI();
Johan.calcBMI();
console.log(Mark.BMI, Johan.BMI);

if (Mark.BMI > Johan.BMI) {
    console.log(`${Mark.fullName}'s BMI:( ${Mark.BMI} )is higher than ${Johan.fullName}'s BMI:${Johan.BMI}.`)

} else if (Johan.BMI > Mark.BMI) {
    console.log(`${Johan.fullName}'s BMI:( ${Johan.BMI} )is higher than ${Mark.fullName}'s BMI:${Mark.BMI}.`)
};

// uses of for loop in JavaScript
// for (let rep = 1; rep <= 20; rep++) {
//     console.log(`lifting weight repetation ${rep}`);

// };