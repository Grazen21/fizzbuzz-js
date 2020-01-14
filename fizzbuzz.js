let number = window.prompt("Choose a number between 1-100")
let answer= ""

if (1<=number&&number<101){
    if (number==33|| number%3==0|| number.includes(3)|| number==55|| number%5==0|| number.includes(5)|| number==77|| number%7==0|| number.includes(7)) {
        if (number==33){
            answer+="Fizz "
        }
        if (number%3==0) {
            answer+="Fizz "
        }
        if (number.includes(3)){
            answer+="Fizz "
        }
        if (number==55){
            answer+="Buzz "
        }
        if(number%5==0){
            answer+="Buzz "
        }
        if (number.includes(5)){
            answer+="Buzz "
        }
        if(number%7==0){
            answer+="Woof "
        }
        if (number==77){
            answer+="Woof "
        }
        if (number.includes(7)){
            answer+="Woof "
        }
    }
    else {
        answer+="Your number is " + number
    }
    alert(answer)
}
else if (isNaN(number)){
    alert("gobbledygook you understand?")
}
else {
    alert("Read the instruction before you answer, bodoh")
}