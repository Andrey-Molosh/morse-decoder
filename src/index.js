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
     let strTen = [];
     let str = '';
  
    for (let i = 0; i < expr.length; i += 10) {
     let letter = '';
     strTen = expr.slice(i, i + 10);
     
      if (strTen == '**********') {
        str += ' ';
      } else {
        
        for (let j = 0; j < 9; j += 2) {
          let strTwo = strTen.slice(j, j + 2)
               
          if (strTwo === '10') {
            letter += '.';
          } else if (strTwo === '11') { 
            letter += '-';
          }
          
        } 
         for (let key in MORSE_TABLE) {
          if (key === letter) {
            str += MORSE_TABLE[key]
          } 
        }
      } 
    } return str; 
}

module.exports = {
  decode
}