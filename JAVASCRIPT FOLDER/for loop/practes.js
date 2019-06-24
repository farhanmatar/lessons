// print numbers between 1 and 100 * 9

// for(let i=100 ; i<=0 ; i--){

//     console.log( i +  " * 9 = " + i * 9);
    
// }
// the Grade Assigner
// if the  Result > 89 then you get A
// if the  Result > 80 then you get B
// if the  Result > 70 then you get C
// if the  Result > 65 then you get D
// if the  Result < 65 then you get F

for(let i=100; i>=0 ; i--){
     
    if (i >89){
        console.log(i + " you get A ");

    }
    else if (i > 80){
        console.log(i + "you get B ")
    }
    else if (i > 70){
        console.log(i + "you get C ")
    }
    else if (i > 65){
        console.log(i + "you get D ")
    }
    else if  (i < 65){
        console.log(i + "you get f " )
    }

    
}
// /////////////////////////////////////////////////////
// one line of stars

// for(let i= 1; i<40 ; i++){
     
//         document.write(' * ');
//         if(i % 10 == 0){
//         document.write("<br>");              
//        }
//     }
/////////////////////////    // 


for (let i= 1 ; i < 10; i++ ){


    for(let c=1 ; c <= i ; c++){
        document.write( c ); 
    }



    document.write('<br>');
   
}

// for (let i= 1 ; i < 10; i++ ){


//     for(let c=1 ; c <= i ; c++){
//         document.write( c ); 
//     }



//     document.write('<br>');
   
// }


for (let i= 10 ; i > 1; i-- ){


    for(let c=1 ; c <= i ; c++){
        document.write( '*' ); 
    }



    document.write('<br>');
   
}
// ////////////////////////////////////7
// print triangle of stats form 4 line and 4 column 

// for (let i=0 ; i< 4 ; i++){

//     for (let j=0;j<=i; j++){
//         document.write('i=' + i + ' and j=' +j);
//         document.write(' * ');

//         document.write('<br>');

//     }
// }

document.write('<br>');

for (let i=0 ; i<8; i++){


    for(let j=i ; j < 8; j++){
        document.write( '*' ); 
    }

    document.write('<br>');
   
}
// /////////////////////////////////////////
document.write('<br>');

for (let i=1 ; i<=8; i++){

    for(k=1; k<=(125-i);k++){
        document.write('&nbsp;');
    }
    for(let j=1 ; j < i; j++){
        document.write( ' *'); 
        
    }

    document.write('<br>');
   
}


// ////////////////////////////////////////



for (let i=1 ; i<=16; i++){

    for(k=1; k<=(125-i);k++){
        document.write('&nbsp;');
    }
    for(let j=1 ; j < i; j++){
        document.write( ' *'); 
        
    }

    document.write('<br>');
   
}

for (let i=16 ; i>1; i--){


    for(let c=1 ; c <= i ; c++){
        for(k=1; k<=(125-i);k++){
        document.write('&nbsp;');
    }

    }

    document.write('<br>');
   
}
// /////////////////////////////////
for (let i=0; i<4; i++){
    for(let j=0;j<125-i;j++){
    document.write('&nbsp');    
}
for(let c=0;c<i;c++){
    document.write(' *')
}
document.write('<br>') 
}