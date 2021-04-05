function numberToWords(number) {
  // Your code here
  let kamus = {
    satu: 1,
    dua: 2,
    tiga: 3,
    empat: 4,
    lima: 5,
    enam: 6,
    tujuh: 7,
    delapan: 8,
    sembilan: 9,
    sepuluh: 10,
    sebelas: 11,
  };
  let convertStr = String(number);
  let result = "";
  let penampung = 0;
  for (let i in kamus) {
    if (number < 1 || convertStr.length === 0) return "";
    if (number <= 11) {
      if (kamus[i] === number) {
        result += i;
        return result + numberToWords(+convertStr.slice(1, 1));
      }
    } else if (number >= 12 && number < 20) {
      penampung = number - 10;
      if (kamus[i] === penampung) {
        result += i + " belas";
        return result + numberToWords(penampung - kamus[i]);
      }
    } else if (number >= 20 && number < 100) {
      if (+convertStr[0] === kamus[i]) {
        result += i + " puluh ";
        return result + numberToWords(+convertStr.slice(1, 2));
      }
    } else if (number >= 100 && number < 200) {
      if (+convertStr[0] === kamus[i]) {
        result += "seratus ";
        return result + numberToWords(+convertStr.slice(1, 3));
      }
    } else if (number >= 200 && number < 1000) {
      if (+convertStr[0] === kamus[i]) {
        result += i + " ratus ";
        return result + numberToWords(+convertStr.slice(1, 3));
      }
    } else if (number >= 1000 && number < 2000) {
      if (+convertStr[0] === kamus[i]) {
        result += "seribu ";
        return result + numberToWords(+convertStr.slice(1, 4));
      }
    } else if (number >= 2000 && number < 10000) {
      if (+convertStr[0] === kamus[i]) {
        result += i + " ribu ";
        return result + numberToWords(+convertStr.slice(1, 4));
      }
    } else if (number >= 10000 && number < 12000) {
      if (Number(convertStr[0] + convertStr[1]) === kamus[i]) {
        result += i + " ribu ";
        return result + numberToWords(+convertStr.slice(2, 5));
      }
    } else if (number >= 12000 && number < 20000) {
      if (Number(convertStr[1]) === kamus[i]) {
        result += i + " belas ribu ";
        return result + numberToWords(+convertStr.slice(2, 5));
      }
    } else if (number >= 20000 && number < 100000) {
      if (+convertStr[0] === kamus[i] && +convertStr[1] !== 0) {
        result += i + " puluh ";
        return result + numberToWords(+convertStr.slice(1, 5));
      } else if (+convertStr[0] === kamus[i] && +convertStr[1] == 0) {
        result += i + " puluh ribu ";
        return result + numberToWords(+convertStr.slice(1, 5));
      }
    } else if (number >= 100000 && number < 200000) {
      if (
        +convertStr[0] === kamus[i] &&
        +convertStr[1] === 0 &&
        +convertStr[2] === 0 &&
        +convertStr[3] === 0 &&
        +convertStr[4] === 0 &&
        +convertStr[5] === 0
      ) {
        result += "seratus ribu ";
        return result + numberToWords(+convertStr.slice(1, 6));
      } else if (+convertStr[0] === kamus[i]) {
        result += "seratus ";
        return result + numberToWords(+convertStr.slice(1, 6));
      }
    } else if (number >= 200000 && number < 1000000) {
      if (
        +convertStr[0] === kamus[i] &&
        +convertStr[1] === 0 &&
        +convertStr[2] === 0 &&
        +convertStr[3] === 0 &&
        +convertStr[4] === 0 &&
        +convertStr[5] === 0
      ) {
        result += i + " ratus ribu ";
        return result + numberToWords(+convertStr.slice(1, 6));
      } else if (+convertStr[0] === kamus[i]) {
        result += i + " ratus ";
        return result + numberToWords(+convertStr.slice(1, 6));
      }
    } else if (number >= 1000000 && number < 12000000) {
      //1 jt - 11jt
      if (
        convertStr.length === 8 &&
        +(convertStr[0] + convertStr[1]) === kamus[i]
      ) {
        result += i + " juta ";
        return result + numberToWords(+convertStr.slice(2, 8));
      } else if (+convertStr[0] === kamus[i] && +convertStr[1] === 0) {
        result += i + " juta ";
        return result + numberToWords(+convertStr.slice(1, 7));
      }
    } else if (number >= 12000000 && number < 20000000) {
      // 12 jt - 19jt
      if (+convertStr[1] === kamus[i]) {
        result += i + " belas juta ";
        return result + numberToWords(+convertStr.slice(1, 7));
      }
    } else if (number >= 20000000 && number < 100000000) {
      //20 jt - 100jt
      if (
        +convertStr[0] === kamus[i] &&
        +convertStr[1] === 0 &&
        +convertStr[2] === 0 &&
        +convertStr[3] === 0 &&
        +convertStr[4] === 0 &&
        +convertStr[5] === 0 &&
        +convertStr[6] === 0 &&
        +convertStr[7] === 0
      ) {
        result += i + " puluh juta ";
        return result + numberToWords(+convertStr.slice(1, 8));
      } else if (+convertStr[0] === kamus[i]) {
        result += i + " puluh ";
        return result + numberToWords(+convertStr.slice(1, 8));
      }
    } else if (number >= 100000000 && number < 200000000) {
      // 100jt - 200jt
      if (
        +convertStr[0] === kamus[i] &&
        +convertStr[1] === 0 &&
        +convertStr[2] === 0 &&
        +convertStr[3] === 0 &&
        +convertStr[4] === 0 &&
        +convertStr[5] === 0 &&
        +convertStr[6] === 0 &&
        +convertStr[7] === 0 &&
        +convertStr[8] === 0
      ) {
        result += "seratus juta ";
        return result + numberToWords(+convertStr.slice(1, 9));
      } else if (+convertStr[0] === kamus[i]) {
        result += "seratus ";
        return result + numberToWords(+convertStr.slice(1, 9));
      }
    } else if (number >= 200000000 && number < 1000000000) {
      if (
        +convertStr[0] === kamus[i] &&
        +convertStr[1] === 0 &&
        +convertStr[2] === 0 &&
        +convertStr[3] === 0 &&
        +convertStr[4] === 0 &&
        +convertStr[5] === 0 &&
        +convertStr[6] === 0 &&
        +convertStr[7] === 0 &&
        +convertStr[8] === 0
      ) {
        result += i + " ratus juta ";
        return result + numberToWords(+convertStr.slice(1, 9));
      } else if (+convertStr[0] === kamus[i]) {
        result += i + " ratus ";
        return result + numberToWords(+convertStr.slice(1, 9));
      }
    } else if (number >= 1000000000 && number < 2000000000) {
      if (+convertStr[0] === kamus[i]) {
        result += i + " miliyar ";
        return result + numberToWords(+convertStr.slice(1, 10));
      }
    } else if (number >= 2000000000 && number < 10000000000) {
      if (+convertStr[0] === kamus[i]) {
        result += i + " miliyar ";
        return result + numberToWords(+convertStr.slice(1, 10));
      }
    }
  }
}

// Driver code
console.log(numberToWords(9));
console.log(numberToWords(11));
console.log(numberToWords(211232211));

//abaikan code dibawah ini
module.exports = numberToWords;

// console.log("1000000000000".length)
