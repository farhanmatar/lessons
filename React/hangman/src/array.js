let word = 'javascript';
let guessed_letters=['a','b','c']
let  guessArray = word.split('').map((letter)=>{
    if (guessed_letters.includes(letter)){
        return letter
    }else{

    }
    return'_'
})
console.log(guessArray)



['_','_','_','_','_','_','_','_','_','_']