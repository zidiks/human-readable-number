module.exports = function toReadable(number) {
    return number.toString().split('').reverse().map((item, index, array) => {
        return index < 2 ? firstTwoNums(item, index, array) : otherNums(basisNum(item), index, array);
    }).reverse().join(' ').reduceWhiteSpace().trim();
}

function firstTwoNums(item, index, array) {
    let irregular = Number(array[1]) > 1 ? false : true;
    if (irregular) {
        if (index == 1) return ''
        else {
            switch (array[1]) {
                case '1':
                    switch (item) {
                        case '0':
                            return 'ten';
                        case '1':
                            return 'eleven';
                        case '2':
                            return 'twelve';
                        default:
                            return irregularBasicNum(item) + 'een';
                    }
                case '0':
                    return basisNum(item);
            }
        }
    } else {
        switch (index) {
            case 0:
                return basisNum(item);
            case 1:
                switch (item) {
                    case '1':
                        return '';
                    case '2':
                        return 'twenty';
                    case '4':
                        return 'forty';
                    default:
                        return irregularBasicNum(item) + 'y';
                }
            default:
                break;
        }
    }
}

function otherNums(item, index, array) {
    switch (index) {
        case 2:
            return item + ' hundred'
        default:
            break;
    }
}

function basisNum(item) {
    switch (item) {
        case '0':
            return '';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            break;
    }
}

function irregularBasicNum(item) {
    switch (item) {
        case '0':
            return '';
        case '3':
            return 'thirt';
        case '4':
            return 'fourt';
        case '5':
            return 'fift';
        case '6':
            return 'sixt';
        case '7':
            return 'sevent';
        case '8':
            return 'eight';
        case '9':
            return 'ninet';
        default:
            break;
    }
}

String.prototype.reduceWhiteSpace = function() {
    return this.replace(/\s+/g, ' ');
};