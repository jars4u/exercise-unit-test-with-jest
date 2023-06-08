//FUNCION SUMA:
const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))



//CONVERSION DE MONEDAS:
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = ((valueInDollar/1.2) * 127.9).toFixed(1);
    return Number(valueInYen);
};
console.log(typeof(fromDollarToYen(1)))

const fromYenToPound = function (valueInYen) {
    let valueInPound = ((valueInYen/127.9) * 0.8).toFixed(1);
    return Number(valueInPound);
};
console.log((fromYenToPound(1)))


//EXPORTAR FUNCIONES:
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };