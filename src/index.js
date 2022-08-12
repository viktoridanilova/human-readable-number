  const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
  
module.exports = function toReadable (number) {
    let numberToString = number.toString();
    if (numberToString.length === 1) {
        return single[number];
    }

    if (numberToString.length === 2 && number < 20 ) {
        return teen[number - 10];
    }

    if (numberToString.length === 2 && number >= 20 && number % 10 === 0 ) {
        return tenths[(number - 20) * 0.1];
    }

    if (numberToString.length === 2 && number > 20 && number % 10 !== 0) {
        return `${tenths[Number(numberToString[0]) - 2]} ${single[Number(numberToString[1])]}`
    }

    if(numberToString.length === 3 && number >= 100 && number % 100 === 0) {
        return `${single[Number(numberToString[0])]} hundred`
    }

    if(numberToString.length === 3 && number > 100 && number % 100 !== 0) {
        const lastNumber = Number(numberToString[2]);
        const lastTwoNumber = Number(numberToString.substr(1));
        if (lastNumber && lastTwoNumber > 20) {
            return `${single[Number(numberToString[0])]} hundred ${tenths[Number(numberToString[1]) - 2]} ${single[Number(numberToString[2])]}` 
        } else if (lastTwoNumber < 10) {
            return `${single[Number(numberToString[0])]} hundred ${single[lastTwoNumber]}`
        } else if (lastTwoNumber < 20){
            return `${single[Number(numberToString[0])]} hundred ${teen[lastTwoNumber - 10]}`
        } else {
            return `${single[Number(numberToString[0])]} hundred ${tenths[Number(numberToString[1]) - 2]}`
        }
        
    }
}

