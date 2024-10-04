
function createArray(){
    const arr=[];
    for(let i=0;i<=100;i++){
        arr.push(i);
            
    } return arr;
}
function button1(){
    let array= createArray();
    const filtered = array.filter(num => {
        return num % 3 != 0;
    });

    console.log(filtered);

   // console.log("hello world");
}
function button2(){
    let array= createArray();
    for(let i=101;i<=150;i++){
        array.push(i);
    }
    console.log("The all numbers between 0 and 150 are:", array);

}
function button3(){
    let array= createArray();
    const maps = array.map(num => num+3);
    console.log("The all numbers between 0 and 100 (+3) are:", maps);

}
function button4(){
    let array= createArray();
    let slicing=array.slice(20,41);
    console.log("The all numbers between 20 and 40 are:", slicing);

}
function button5(){
    let array= createArray();
    shuffleArray(array);
    console.log("The all numbers was shuffled", array);
    sort(array);
    console.log("The all numbers after sorted", array);


 
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
function sort(array){
    array.sort(function(a, b){return b - a});
}