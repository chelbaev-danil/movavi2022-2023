// var isPalindrome = function(head) {
//     let newStr = []
//     let a = 0
//     for (let i = head.length-1; i>=0;i--) {
//         newStr.push(head[i] )
//     }
//     // return  JSON.stringify(newStr) === JSON.stringify(head)
//     for (let i = 0; i<head.length; i++){
        
//         if (head[i] == newStr[i]){
//             continue
//         }else{return false; break}
    
        
//     }
//     return true
// };

// console.log(isPalindrome([1,2,1]));

// var fizzBuzz = function(n) {
//     let list = []
//     for (let i = 1; i<=n; i++){
//         if (i%5==0 && i%3==0){
//             list.push('FizzBuzz')
//         }
//         else if(i%3==0){
//             list.push('Fizz')
//         }
//         else if(i%5==0){
//             list.push('Buzz')
//         }else{
//             list.push(i.toString())
//         }
//     }
//     return list
// };

// console.log(fizzBuzz(15));

var middleNode = function(head) {
    return head.length%2==0? head.slice(head.length/2):head.slice((head.length-1)/2 )
};

console.log(middleNode([1,2,3]));