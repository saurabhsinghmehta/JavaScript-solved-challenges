const marksHeight = 1.69;
const johansHeight = 1.95;
const marksWeight = 78;
const johansWeight = 92;

const marksBMI = marksWeight / (marksHeight * marksHeight);
const johansBMI = johansWeight / (johansHeight * johansHeight);
const markHigherBMI = marksBMI > johansBMI;

var higherBMI;
if (marksBMI >= johansBMI) {
    higherBMI =
        (`Mark's BMI is higher than Johan's!`);


} else {
    higherBMI =
        (`Johan's BMI is higher than Mark's!`);

}
console.log(higherBMI);