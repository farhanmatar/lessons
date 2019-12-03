let qustions =[
    " what is your name ?",
    "what is your fav hobby? ",
    "what is your fav programming language? "
]
let  answers = [];
function ask (i){
    process.stdout.write(`${qustions[i]}`);
    process.stdout.write('>');
}

process.stdin.on('data',function(data){
    // process.stdout.write('\n' + data );
    answers.push(data.toString().trim());
    if(answers.length <qustions.length){
        ask(answers.length);
       
    }else{
        process.exit();
    }
});
      process.on('exit',function(){
        process.stdin.write('\n\n\n\n');

        process.stdin.write(`Go ${answers[1]} ${answers[0]} you  can finish writing
        ${answers[2]} later `) 
        process.stdin.write('\n\n\n\n');
      })


ask(0)