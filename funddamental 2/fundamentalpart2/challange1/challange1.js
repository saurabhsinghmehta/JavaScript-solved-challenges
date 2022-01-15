//test1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinners = function (avgDolpins, avgkoalas) {
//     if (avgDolpins >= 2 * avgkoalas) {
//         console.log(`Dolphin wins the 🏆(${avgDolpins} vs. ${avgkoalas})`);


//     } else if (avgkoalas >= 2 * avgDolpins) {
//         console.log(`Koalas wins the 🏆 (${avgkoalas} vs. ${avgDolpins})`);

//     } else { console.log('No one wins...'); }
// }

// checkWinners(scoreDolphins, scoreKoalas);

//test2
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinners = function (avgDolpins, avgkoalas) {
    if (avgDolpins >= 2 * avgkoalas) {
        console.log(`Dolphin wins the 🏆(${avgDolpins} vs. ${avgkoalas})`);


    } else if (avgkoalas >= 2 * avgDolpins) {
        console.log(`Koalas wins the 🏆 (${avgkoalas} vs. ${avgDolpins})`);

    } else { console.log('No one wins...'); }
}

checkWinners(scoreDolphins, scoreKoalas);