// 今日練習題 #1：反轉字串
// 題目：
// 請寫一個函式 reverseString(str)，接收一個字串 str，回傳反轉後的字串。

// const reverseString = function(str){
//   const strArr = str.split("")
//   console.log(strArr)
//   const strRever = strArr.reverse()
//   console.log(strRever)
//   const strJoin = strRever.join("")
//   console.log(strJoin)  

// }
// reverseString("Bella")
// console.log(reverseString("Bella"))


// 今日練習題 #2：判斷迴文 Palindrome
// 題目：
// 請寫一個函式 isPalindrome(str)，判斷一個字串是否為「迴文」。
// （迴文是指正著唸和反著唸都一樣的字，例如 "madam"、"racecar"。）

// const isPalindrome = function(str){
//   const strArr = str.split("")
//   const strRever = strArr.reverse()
//   const strJoin = strRever.join("")
//   if(strJoin == str){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isPalindrome("racecar"))

//補充更精簡寫法

// const isPalindrome = function(str) {
//   return str === str.split("").reverse().join("");
// }

// 今日練習題 #3：找出陣列中的最大值
// 題目：
// 請寫一個函式 findMax(arr)，接收一個數字陣列，回傳其中的最大值。

// const findMax = function(arr){
//   let maxNum = arr[0]

//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > maxNum){
//       maxNum = arr[i];
//     }
//   }
//   return maxNum
// }

// console.log(findMax([3, 7, 2, 9, 5]))

//ES6更精簡寫法
// const findMax = function(arr){
//     return Math.max(...arr)
//   }
  
//   console.log(findMax([3, 7, 2, 9, 5]))