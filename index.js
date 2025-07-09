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

// 今日練習題 #4：找出母音字母
// 題目：
// 寫一個函式 countVowels(str)，可以計算並回傳一個字串中有幾個母音字母（a, e, i, o, u）。


// const countVowels = function(str){
//   const newArr = []
//   const splitStr = str.split("")

//   const voStr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

//   for( i = 0 ; i < splitStr.length ; i++){
//     if(voStr.includes(splitStr[i])){
//       newArr.push(splitStr[i])
//     }

//   }return newArr.length
// }

// console.log(countVowels("Bella"))


// const countVowels = function(str){

//   const splitStr = str.split("")
//   const voStr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

//   const newArr = splitStr.filter(item => voStr.includes(item))

//   return newArr.length

// }

// console.log(countVowels("Bella"))

// 今日練習題 #5：找出陣列中的偶數
// 請寫一個函式 filterEvenNumbers(arr)，
// 接收一個「數字陣列」，回傳只包含偶數的新陣列。

// const filterEvenNumbers = function(arr){
//   // for(let i = 0 ; i < arr.length ; i++)
//   const EvenNum = arr.filter(num => ( num % 2 == 0 ))
//   return EvenNum
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// 今日練習題 #6：將每個字串轉成大寫
// 請寫一個函式 toUpperCaseArray(arr)，
// 它會接收一個「字串陣列」，回傳一個新的陣列，裡面是轉成大寫的字串。

// const toUpperCaseArray = function(arr){
//   const newArr = arr.map((str) => str.toUpperCase())
//   return newArr
// }

// console.log(toUpperCaseArray(["hello", "world", "bella"]))

// 今日練習題 #7：格式化名字陣列
// 請寫一個函式 formatNames(arr)，接受一個字串陣列，將每個名字格式化為「首字大寫，其餘小寫」，然後回傳格式化後的陣列。

// const  formatNames = function(arr){
//   let newArr = arr.map((str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   })
//   return newArr
// }

// console.log(formatNames(["bELLA", "CANDY", "lIsa"]))

// 今日練習題 #8：平方和與總數
// 請寫一個函式 sumOfSquares(arr)，它會接收一個數字陣列，並回傳所有數字的平方和。

// const sumOfSquares = function(arr){
//   const squareArr = arr.map((num) => {
//     return num ** 2
//   }).reduce((sum,num) => {
//     return num + sum 
//   },0)

//   return squareArr
// }

// console.log(sumOfSquares([1, 2, 3]))

//使用for迴圈基礎練習
// const sumOfSquares = function(arr){
//   let result = 0
//   for(let i = 0 ; i < arr.length ; i++){
//     const squareNum = arr[i] ** 2
//     result =  squareNum + result
//   }return result
// }

// console.log(sumOfSquares([1, 2, 3]))

// 今日練習題 #9：回傳最短字串的長度
// 請寫一個函式 shortestWordLength(arr)，接收一個字串陣列，回傳最短字串的長度。

// const shortestWordLength = function(arr){
//   const newArr = arr.map((str) => str.length)
//   const minStr = Math.min(...newArr)
//   return minStr
// }

// console.log(shortestWordLength(["apple", "banana", "kiwi"]))

// 加強題 #9-1：回傳最短的字串
// 找出陣列中「最短的字串」本身，而不是長度。

// const shortestWordLength = function(arr){
  
//   let minStr = arr[0]
//   for( let i = 0 ; i < arr.length ; i++){
//     if(arr[i].length < minStr.length){
//       minStr = arr[i]
//     }
//   }return minStr
// }

// console.log(shortestWordLength(["apple", "banana", "kiwi"]))

//使用filter
// const shortestWordLength = function(arr){
//   const newArr = arr.map((str) => str.length)
//   const minStr = Math.min(...newArr)
//   const result = arr.filter((str) => str.length == minStr)

//   return result
// }

// console.log(shortestWordLength(["apple", "banana", "kiwi"]))

// const shortestWordLength = function(arr){
  
//   const result = arr.reduce((shortStr, currentStr) => {
//     console.log(`我是currentStr: ${currentStr}`)
//     console.log(`我是shortStr: ${shortStr}`)

//     if( currentStr.length < shortStr.length ){
//       console.log(`我是currentStr: ${currentStr}`)
//       return currentStr
//     }else{
//       console.log(`我是shortStr: ${shortStr}`)
//       return shortStr
//     }
//   },arr[0])  
//   return result
// }

// console.log(shortestWordLength(["apple", "banana", "kiwi"]))

// const shortestWordLength = function(arr){
  
//   const result = arr.reduce((shortStr, currentStr) => {
//     console.log(`我是currentStr: ${currentStr}`)
//     console.log(`我是shortStr: ${shortStr}`)

//     if( currentStr.length < shortStr.length ){
//       console.log(`我是currentStr: ${currentStr}`)
//       return currentStr
//     }else{
//       console.log(`我是shortStr: ${shortStr}`)
//       return shortStr
//     }
//   },arr[0])  
//   return result
// }

// console.log(shortestWordLength(["apple", "banana", "kiwi"]))

// 今日練習題 #10：每個單字的每個字母都轉為大寫
// 請寫一個函式 capitalizeWords(arr)，接受一個字串陣列 arr，並回傳一個新的陣列，其中每個單字的每個字母都轉為大寫。

// const capitalizeWords = function(arr){
//   const strToupper = arr.map((str) => str.toUpperCase())
//   return strToupper
// }

// console.log(capitalizeWords(["hello", "world", "bella"]));

// 今日練習題 #11：字串有幾個單字
// 請寫一個函式 countWords(str)，接收一段字串 str，回傳字串中有幾個單字。

// const countWords = function(str) {
//   return str.split(" ")
//     .filter((word) => word.trim() !== "")
//     .length;
// }

// 今日練習題 #12：去除重複項目的新陣列
// 請寫一個函式 removeDuplicates(arr)，接收一個陣列，回傳一個去除重複項目的新陣列，保留原本的順序。

// const removeDuplicates = function(arr){
//   const setArr = new Set(arr)
//   return [...setArr]
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]))

// const removeDuplicates = function(arr){
//   const result = arr.filter((num, index, newArr) => {
//     return newArr.indexOf(num) == index
//   })
//   console.log(result)
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]))

// 今日練習題 #13：找出最常出現的字母
// 請寫一個函式 mostFrequentChar(str)，找出字串中出現次數最多的字母。


//方法一 ： 用兩個迴圈解答
// const mostFrequentChar = function(str){

//   const obj = {}
//   const word = str.replace(/\s/g, "").split("")

//   for( let i = 0 ; i < word.length ; i++ ){
    
//     let char = word[i]

//     if( char in obj ){
//       obj[char]++
//     }else{
//       obj[char] = 1
//     }
    
//   }

//   let maxCount = 0
//   let maxChar = ""
//   for( count in obj){
//     if( obj[count] > maxCount ){
//       maxCount = obj[count];
//       maxChar = count;
//     }
//   }

//   return maxChar;
// }

// console.log(mostFrequentChar("bella is brilliant"))

//方法二：用一個迴圈 同步進行比較
// const mostFrequentChar = function(str) {
//   const obj = {};
//   let maxChar = "", maxCount = 0;

//   for (const char of str.replace(/\s/g, '')) {
//     obj[char] = (obj[char] || 0) + 1;

//     if (obj[char] > maxCount) {
//       maxCount = obj[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// };

// console.log(mostFrequentChar("bella is brilliant"))

//方法三：使用 forEach reduce entries 方法
// const mostFrequentChar = function(str) {
//   const counts = {};
//   str.replace(/\s/g, '').split('').forEach(c => counts[c] = (counts[c] || 0) + 1);

//   return Object.entries(counts).reduce((a, b) => a[1] >= b[1] ? a : b)[0];
// };

// console.log(mostFrequentChar("bella is brilliant"))