// var multiply = function(num1, num2) {
//
//   let addsArr = []
//   let time = 0
//   for(let i = (num1.length - 1);i>= 0; i--){
//
//     let result = []
//     for(let x = 0 ; x<time;x++){
//       result.unshift(0)
//     }
//
//     let add = 0
//     let j = (num2.length - 1)
//     while( j >= 0 || add != 0){
//       let x = j >= 0 ? (+num2[j]) : 0
//       const value =  (+num1[i]) * x + add
//       add = Math.floor(value / 10)
//       result.unshift(value % 10)
//       j--
//     }
//     addsArr.push(result.join(""))
//     time++
//   }
//
//   console.log('addsArr',addsArr);
//   if(addsArr.length === 1) return addsArr[0]
//   if(addsArr.length === 2) return addStrings(addsArr[0],addsArr[1])
//   let numberStr = addStrings(addsArr[0],addsArr[1])
//   console.log('numberStr',numberStr);
//   for(let i = 2 ; i<addsArr.length ;i++){
//     numberStr = addStrings(numberStr,addsArr[i])
//   }
//   return numberStr
// };
//
// var addStrings = function (num1, num2) {
//   let i = num1.length - 1
//   let j = num2.length - 1
//   let add = 0;
//   const ans = [];
//   while (i >= 0 || j >= 0 || add != 0) {
//     const x = i >= 0 ? num1.charAt(i) - '0' : 0;
//     const y = j >= 0 ? num2.charAt(j) - '0' : 0;
//     const result = x + y + add;
//     ans.push(result % 10);
//     add = Math.floor(result / 10);
//     i -= 1;
//     j -= 1;
//   }
//   return ans.reverse().join('');
// };



var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  var l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)
  for (let i = l1; i--;) {
    for (let j = l2; j--;) {
      let tmp = num1[i] * num2[j] + p[i + j + 1]
      p[i + j + 1] = tmp % 10
      p[i + j] += 0 | tmp / 10
    }
  }
  while(p[0] === 0) {
    p.shift()
  }
  return p.join('')
};

console.log(multiply('321', '123'));
