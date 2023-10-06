let num=parseInt(prompt("Enter the number"));

let square=()=>{
    let result= num*num;
    return result;
}
let ans=square(num)
document.write(`The square of ${num} is ${ans} `)