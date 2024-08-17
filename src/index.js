const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    let oneCharacter;
    for (let i = 0; i < expr.length; i+= 10){
        oneCharacter = '';
        for (let j = i + 1; j <= i + 9; j += 2){
            if ((expr[j - 1] + expr[j]) === '**') {
                break;
            } else if ((expr[j - 1] + expr[j]) === '10'){
                oneCharacter += '.';
            } else if ((expr[j - 1] + expr[j]) === '11'){
                oneCharacter += '-'
            }
        }
        if (oneCharacter === '') {
            res += ' ';
        } else {
            res += MORSE_TABLE[oneCharacter];
        }
    }
    return res;
}

module.exports = {
    decode
}