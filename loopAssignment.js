console.log(`----------------step 1-------------------`);

function word(str) {

    let count =0;
    for (let index = 0; index < str.length; index++) {
        let char =str.charAt(index);
        if ( char =="A" || char =="E" || char =="I" || char =="O" || char == "U" ||
             char =="a" || char =="e" || char =="i" || char =="o" || char == "u") {
            console.log(char);
            count = count+1;
        }        
    }
    console.log(`Total number of vowels is ${count}`);
}
word("I am very good IT Developer");

console.log(`----------------step 2-------------------`);

function sumCube() {
    let sum =0;
    for (let index = 1; index <=5; index++){
       sum = sum + index *index* index;
    }
    console.log(sum);

}
sumCube();


console.log(`----------------step 3-------------------`);
 function string () {
   for (let index = 0; index < string.length; index++) {
    const char = string.chatAt(index);
    if (char %2 ==1 && char == " ") {
        console.log(char);
        
    }
    console.log(char);

   }

 }
 string();

 console.log(`----------------step 4-------------------`);
