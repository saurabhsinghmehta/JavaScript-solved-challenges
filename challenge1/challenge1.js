const marksHeight = 1.69;
const johansHeight = 1.95;
const marksWeight = 78;
const johansWeight = 92;

const marksBMI = marksWeight / (marksHeight * marksHeight);
const johansBMI = johansWeight / (johansHeight * johansHeight);
const markHigherBMI = marksBMI > johansBMI;

console.log(marksBMI, johansBMI, markHigherBMI);

