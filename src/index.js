module.exports = function toReadable(n) {

    let units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let exceptions = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let rank = String(n).length

    //вычисляем двухзначные числа от 0 до 9

    if (rank === 1) {
        if (n === 0) {
            return units[0];
        } else {
            return units[n];
        }
    }

    //вычисляем двухзначные числа от 10 до 99

    if (rank === 2) {
        if (n >= 10 && n < 20) {
            return exceptions[n - 10]
        } else if (n >= 20 && n < 100) {
            if ((n - 20) % 10 === 0) {
                return dozens[(n - 20) / 10];
            } else {
                return dozens[Math.trunc((n - 20) / 10)] + ' ' + units[(n - 20) % 10];
            }
        }
    }

    //вычисляем трехзначные числа от 100 до 999

    if (rank === 3) {
        if (n % 100 === 0) {
            return units[n / 100] + ' ' + 'hundred';
        } else if (n % 100 >= 10 && n % 100 < 20) {
            return units[Math.trunc(n / 100)] + ' ' + 'hundred' + ' ' + exceptions[n % 100 - 10];
        } else if ((n % 100) % 10 === 0) {
            return units[Math.trunc(n / 100)] + ' ' + 'hundred' + ' ' + dozens[Math.trunc((n % 100) / 10) - 2];
        } else if (n % 100 > 0 && n % 100 < 10) {
            return units[Math.trunc(n / 100)] + ' ' + 'hundred' + ' ' + units[n % 100];
        } else if (n % 100 >= 20 && n % 100 < 100) {
            return units[Math.trunc(n / 100)] + ' ' + 'hundred' + ' ' + dozens[Math.trunc((n % 100) / 10) - 2] + ' ' + units[(n % 100) % 10];
        }
    }
}