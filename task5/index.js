
function createArray(){
    let countEven=0;
    const arr=[];
    for(let i=0;i<=100;i++){
        arr.push(i);
        if(arr[i]%2==0)
    countEven+=arr[i];}
    console.log("The sum of all even numbers between 0 and 100 is:", countEven);

   // console.log("hello world");
}

